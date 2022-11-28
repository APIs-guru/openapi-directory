import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteLicenseePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=licensee_key" })
  licenseeKey: string;
}


export class DeleteLicenseeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class DeleteLicenseeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLicenseePathParams;

  @SpeakeasyMetadata()
  security: DeleteLicenseeSecurity;
}


export class DeleteLicenseeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteLicenseeResponseSchema?: shared.DeleteLicenseeResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
