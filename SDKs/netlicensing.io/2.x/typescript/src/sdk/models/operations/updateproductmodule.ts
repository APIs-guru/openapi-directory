import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateProductModulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productModuleNumber" })
  productModuleNumber: string;
}

export enum UpdateProductModuleRequestBodyLicenseTemplateEnum {
    Timevolume = "TIMEVOLUME",
    Feature = "FEATURE"
}

export enum UpdateProductModuleRequestBodyNodeSecretModeEnum {
    Predefined = "PREDEFINED",
    Client = "CLIENT"
}


export class UpdateProductModuleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=active;" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "form, name=licenseTemplate;" })
  licenseTemplate?: UpdateProductModuleRequestBodyLicenseTemplateEnum[];

  @SpeakeasyMetadata({ data: "form, name=licensingModel;" })
  licensingModel?: string;

  @SpeakeasyMetadata({ data: "form, name=maxCheckoutValidity;" })
  maxCheckoutValidity?: number;

  @SpeakeasyMetadata({ data: "form, name=name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "form, name=nodeSecretMode;" })
  nodeSecretMode?: UpdateProductModuleRequestBodyNodeSecretModeEnum[];

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number?: string;

  @SpeakeasyMetadata({ data: "form, name=redThreshold;" })
  redThreshold?: number;

  @SpeakeasyMetadata({ data: "form, name=yellowThreshold;" })
  yellowThreshold?: number;
}


export class UpdateProductModuleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class UpdateProductModuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateProductModulePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateProductModuleRequestBody;

  @SpeakeasyMetadata()
  security: UpdateProductModuleSecurity;
}


export class UpdateProductModuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
