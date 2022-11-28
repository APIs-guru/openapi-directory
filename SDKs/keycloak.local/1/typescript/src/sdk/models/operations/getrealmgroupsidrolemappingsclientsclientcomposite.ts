import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmGroupsIdRoleMappingsClientsClientCompositePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client" })
  client: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmGroupsIdRoleMappingsClientsClientCompositeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmGroupsIdRoleMappingsClientsClientCompositePathParams;
}


export class GetRealmGroupsIdRoleMappingsClientsClientCompositeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RoleRepresentation })
  roleRepresentations?: shared.RoleRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
