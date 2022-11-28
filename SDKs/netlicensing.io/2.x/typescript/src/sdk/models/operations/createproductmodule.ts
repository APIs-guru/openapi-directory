import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateProductModuleRequestBodyLicenseTemplateEnum {
    Timevolume = "TIMEVOLUME",
    Feature = "FEATURE"
}

export enum CreateProductModuleRequestBodyNodeSecretModeEnum {
    Predefined = "PREDEFINED",
    Client = "CLIENT"
}


export class CreateProductModuleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=active;" })
  active: boolean;

  @SpeakeasyMetadata({ data: "form, name=licenseTemplate;" })
  licenseTemplate?: CreateProductModuleRequestBodyLicenseTemplateEnum[];

  @SpeakeasyMetadata({ data: "form, name=licensingModel;" })
  licensingModel: string;

  @SpeakeasyMetadata({ data: "form, name=maxCheckoutValidity;" })
  maxCheckoutValidity?: number;

  @SpeakeasyMetadata({ data: "form, name=name;" })
  name: string;

  @SpeakeasyMetadata({ data: "form, name=nodeSecretMode;" })
  nodeSecretMode?: CreateProductModuleRequestBodyNodeSecretModeEnum[];

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number?: string;

  @SpeakeasyMetadata({ data: "form, name=productNumber;" })
  productNumber: string;

  @SpeakeasyMetadata({ data: "form, name=redThreshold;" })
  redThreshold?: number;

  @SpeakeasyMetadata({ data: "form, name=yellowThreshold;" })
  yellowThreshold?: number;
}


export class CreateProductModuleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateProductModuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: CreateProductModuleRequestBody;

  @SpeakeasyMetadata()
  security: CreateProductModuleSecurity;
}


export class CreateProductModuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
