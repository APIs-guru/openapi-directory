import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRealmUsersIdResetPasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmUsersIdResetPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmUsersIdResetPasswordPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CredentialRepresentation;
}


export class PutRealmUsersIdResetPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
