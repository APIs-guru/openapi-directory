import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmRolesRoleNameGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class GetRealmRolesRoleNameGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=briefRepresentation" })
  briefRepresentation?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;
}


export class GetRealmRolesRoleNameGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmRolesRoleNameGroupsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmRolesRoleNameGroupsQueryParams;
}


export class GetRealmRolesRoleNameGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GroupRepresentation })
  groupRepresentations?: shared.GroupRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
