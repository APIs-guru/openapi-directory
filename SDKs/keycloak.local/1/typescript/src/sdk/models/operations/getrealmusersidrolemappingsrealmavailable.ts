import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmUsersIdRoleMappingsRealmAvailablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUsersIdRoleMappingsRealmAvailableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmUsersIdRoleMappingsRealmAvailablePathParams;
}


export class GetRealmUsersIdRoleMappingsRealmAvailableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RoleRepresentation })
  roleRepresentations?: shared.RoleRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
