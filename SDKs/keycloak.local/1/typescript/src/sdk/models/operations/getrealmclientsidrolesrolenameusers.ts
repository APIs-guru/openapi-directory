import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsIdRolesRoleNameUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class GetRealmClientsIdRolesRoleNameUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;
}


export class GetRealmClientsIdRolesRoleNameUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdRolesRoleNameUsersPathParams;

  @Metadata()
  queryParams: GetRealmClientsIdRolesRoleNameUsersQueryParams;
}


export class GetRealmClientsIdRolesRoleNameUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.UserRepresentation })
  userRepresentations?: shared.UserRepresentation[];
}
