import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveLicenseePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=licensee_key" })
  licenseeKey: string;
}


export class RetrieveLicenseeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class RetrieveLicenseeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveLicenseePathParams;

  @SpeakeasyMetadata()
  security: RetrieveLicenseeSecurity;
}


export class RetrieveLicenseeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  licenseeResponseSchema?: shared.LicenseeResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
