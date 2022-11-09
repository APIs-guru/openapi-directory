import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveLicenseePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=licensee_key" })
  licenseeKey: string;
}


export class RetrieveLicenseeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class RetrieveLicenseeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveLicenseePathParams;

  @Metadata()
  security: RetrieveLicenseeSecurity;
}


export class RetrieveLicenseeResponse extends SpeakeasyBase {
  @Metadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @Metadata()
  contentType: string;

  @Metadata()
  licenseeResponseSchema?: shared.LicenseeResponseSchema;

  @Metadata()
  statusCode: number;
}
