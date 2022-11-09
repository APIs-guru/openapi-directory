import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLicenseTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=licenseTemplateNumber" })
  licenseTemplateNumber: string;
}


export class GetLicenseTemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetLicenseTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLicenseTemplatePathParams;

  @Metadata()
  security: GetLicenseTemplateSecurity;
}


export class GetLicenseTemplateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
