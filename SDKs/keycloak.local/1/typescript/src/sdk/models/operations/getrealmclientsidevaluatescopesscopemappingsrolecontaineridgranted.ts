import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roleContainerId" })
  roleContainerId: string;
}


export class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: string;
}


export class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryParams;
}


export class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RoleRepresentation })
  roleRepresentations?: shared.RoleRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
