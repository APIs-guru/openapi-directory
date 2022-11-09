import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsIdRolesRoleNameGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class GetRealmClientsIdRolesRoleNameGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=briefRepresentation" })
  briefRepresentation?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;
}


export class GetRealmClientsIdRolesRoleNameGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdRolesRoleNameGroupsPathParams;

  @Metadata()
  queryParams: GetRealmClientsIdRolesRoleNameGroupsQueryParams;
}


export class GetRealmClientsIdRolesRoleNameGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.GroupRepresentation })
  groupRepresentations?: shared.GroupRepresentation[];

  @Metadata()
  statusCode: number;
}
