import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateLicenseePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class CreateLicenseeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class CreateLicenseeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateLicenseePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateLicenseeSchema;

  @SpeakeasyMetadata()
  security: CreateLicenseeSecurity;
}


export class CreateLicenseeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  licenseeResponseSchema?: shared.LicenseeResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
