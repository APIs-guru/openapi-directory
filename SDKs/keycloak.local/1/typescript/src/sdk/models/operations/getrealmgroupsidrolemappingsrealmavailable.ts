import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmGroupsIdRoleMappingsRealmAvailablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmGroupsIdRoleMappingsRealmAvailableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmGroupsIdRoleMappingsRealmAvailablePathParams;
}


export class GetRealmGroupsIdRoleMappingsRealmAvailableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RoleRepresentation })
  roleRepresentations?: shared.RoleRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
