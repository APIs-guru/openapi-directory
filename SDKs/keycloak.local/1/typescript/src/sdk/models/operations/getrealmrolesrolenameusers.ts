import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmRolesRoleNameUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class GetRealmRolesRoleNameUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;
}


export class GetRealmRolesRoleNameUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmRolesRoleNameUsersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmRolesRoleNameUsersQueryParams;
}


export class GetRealmRolesRoleNameUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UserRepresentation })
  userRepresentations?: shared.UserRepresentation[];
}
