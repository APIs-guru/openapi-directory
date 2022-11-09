import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteLicenseePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=licensee_key" })
  licenseeKey: string;
}


export class DeleteLicenseeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class DeleteLicenseeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLicenseePathParams;

  @Metadata()
  security: DeleteLicenseeSecurity;
}


export class DeleteLicenseeResponse extends SpeakeasyBase {
  @Metadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteLicenseeResponseSchema?: shared.DeleteLicenseeResponseSchema;

  @Metadata()
  statusCode: number;
}
