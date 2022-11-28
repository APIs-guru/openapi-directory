import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRealmClientsIdRolesRoleNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class PutRealmClientsIdRolesRoleNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmClientsIdRolesRoleNamePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RoleRepresentation;
}


export class PutRealmClientsIdRolesRoleNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
