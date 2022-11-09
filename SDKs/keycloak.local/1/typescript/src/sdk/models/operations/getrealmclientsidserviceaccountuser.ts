import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsIdServiceAccountUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdServiceAccountUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdServiceAccountUserPathParams;
}


export class GetRealmClientsIdServiceAccountUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userRepresentation?: shared.UserRepresentation;
}
