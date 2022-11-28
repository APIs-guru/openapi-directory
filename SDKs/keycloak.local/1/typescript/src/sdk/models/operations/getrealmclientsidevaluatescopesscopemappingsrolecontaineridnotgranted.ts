import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roleContainerId" })
  roleContainerId: string;
}


export class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: string;
}


export class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryParams;
}


export class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RoleRepresentation })
  roleRepresentations?: shared.RoleRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
