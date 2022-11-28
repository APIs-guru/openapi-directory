import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateLicenseePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class UpdateLicenseeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class UpdateLicenseeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateLicenseePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateLicenseeSchema;

  @SpeakeasyMetadata()
  security: UpdateLicenseeSecurity;
}


export class UpdateLicenseeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  licenseeResponseSchema?: shared.LicenseeResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
