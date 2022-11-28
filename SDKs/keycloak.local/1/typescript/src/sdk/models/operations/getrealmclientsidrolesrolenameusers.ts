import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmClientsIdRolesRoleNameUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class GetRealmClientsIdRolesRoleNameUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;
}


export class GetRealmClientsIdRolesRoleNameUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmClientsIdRolesRoleNameUsersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmClientsIdRolesRoleNameUsersQueryParams;
}


export class GetRealmClientsIdRolesRoleNameUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UserRepresentation })
  userRepresentations?: shared.UserRepresentation[];
}
