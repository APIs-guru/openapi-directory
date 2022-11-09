import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateProductModuleRequestBodyLicenseTemplateEnum {
    Timevolume = "TIMEVOLUME"
,    Feature = "FEATURE"
}

export enum CreateProductModuleRequestBodyNodeSecretModeEnum {
    Predefined = "PREDEFINED"
,    Client = "CLIENT"
}


export class CreateProductModuleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=active;" })
  active: boolean;

  @Metadata({ data: "form, name=licenseTemplate;" })
  licenseTemplate?: CreateProductModuleRequestBodyLicenseTemplateEnum[];

  @Metadata({ data: "form, name=licensingModel;" })
  licensingModel: string;

  @Metadata({ data: "form, name=maxCheckoutValidity;" })
  maxCheckoutValidity?: number;

  @Metadata({ data: "form, name=name;" })
  name: string;

  @Metadata({ data: "form, name=nodeSecretMode;" })
  nodeSecretMode?: CreateProductModuleRequestBodyNodeSecretModeEnum[];

  @Metadata({ data: "form, name=number;" })
  number?: string;

  @Metadata({ data: "form, name=productNumber;" })
  productNumber: string;

  @Metadata({ data: "form, name=redThreshold;" })
  redThreshold?: number;

  @Metadata({ data: "form, name=yellowThreshold;" })
  yellowThreshold?: number;
}


export class CreateProductModuleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateProductModuleRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: CreateProductModuleRequestBody;

  @Metadata()
  security: CreateProductModuleSecurity;
}


export class CreateProductModuleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
