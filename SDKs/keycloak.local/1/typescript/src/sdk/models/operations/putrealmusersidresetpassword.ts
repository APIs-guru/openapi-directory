import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmUsersIdResetPasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmUsersIdResetPasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmUsersIdResetPasswordPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CredentialRepresentation;
}


export class PutRealmUsersIdResetPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
