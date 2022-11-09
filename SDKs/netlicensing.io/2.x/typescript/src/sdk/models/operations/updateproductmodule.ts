import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateProductModulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productModuleNumber" })
  productModuleNumber: string;
}

export enum UpdateProductModuleRequestBodyLicenseTemplateEnum {
    Timevolume = "TIMEVOLUME"
,    Feature = "FEATURE"
}

export enum UpdateProductModuleRequestBodyNodeSecretModeEnum {
    Predefined = "PREDEFINED"
,    Client = "CLIENT"
}


export class UpdateProductModuleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=active;" })
  active?: boolean;

  @Metadata({ data: "form, name=licenseTemplate;" })
  licenseTemplate?: UpdateProductModuleRequestBodyLicenseTemplateEnum[];

  @Metadata({ data: "form, name=licensingModel;" })
  licensingModel?: string;

  @Metadata({ data: "form, name=maxCheckoutValidity;" })
  maxCheckoutValidity?: number;

  @Metadata({ data: "form, name=name;" })
  name?: string;

  @Metadata({ data: "form, name=nodeSecretMode;" })
  nodeSecretMode?: UpdateProductModuleRequestBodyNodeSecretModeEnum[];

  @Metadata({ data: "form, name=number;" })
  number?: string;

  @Metadata({ data: "form, name=redThreshold;" })
  redThreshold?: number;

  @Metadata({ data: "form, name=yellowThreshold;" })
  yellowThreshold?: number;
}


export class UpdateProductModuleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class UpdateProductModuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateProductModulePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateProductModuleRequestBody;

  @Metadata()
  security: UpdateProductModuleSecurity;
}


export class UpdateProductModuleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
