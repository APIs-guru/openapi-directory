import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmClientsIdRolesRoleNameGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class GetRealmClientsIdRolesRoleNameGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=briefRepresentation" })
  briefRepresentation?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;
}


export class GetRealmClientsIdRolesRoleNameGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmClientsIdRolesRoleNameGroupsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmClientsIdRolesRoleNameGroupsQueryParams;
}


export class GetRealmClientsIdRolesRoleNameGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GroupRepresentation })
  groupRepresentations?: shared.GroupRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
