import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLicenseePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class UpdateLicenseeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class UpdateLicenseeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLicenseePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateLicenseeSchema;

  @Metadata()
  security: UpdateLicenseeSecurity;
}


export class UpdateLicenseeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  licenseeResponseSchema?: shared.LicenseeResponseSchema;

  @Metadata()
  statusCode: number;
}
