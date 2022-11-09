import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateLicenseePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class CreateLicenseeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class CreateLicenseeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateLicenseePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateLicenseeSchema;

  @Metadata()
  security: CreateLicenseeSecurity;
}


export class CreateLicenseeResponse extends SpeakeasyBase {
  @Metadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @Metadata()
  contentType: string;

  @Metadata()
  licenseeResponseSchema?: shared.LicenseeResponseSchema;

  @Metadata()
  statusCode: number;
}
