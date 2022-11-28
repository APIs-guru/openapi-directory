import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLicenseTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=licenseTemplateNumber" })
  licenseTemplateNumber: string;
}


export class GetLicenseTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetLicenseTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLicenseTemplatePathParams;

  @SpeakeasyMetadata()
  security: GetLicenseTemplateSecurity;
}


export class GetLicenseTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
