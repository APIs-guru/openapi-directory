import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=roleContainerId" })
  roleContainerId: string;
}


export class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: string;
}


export class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedPathParams;

  @Metadata()
  queryParams: GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryParams;
}


export class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RoleRepresentation })
  roleRepresentations?: shared.RoleRepresentation[];

  @Metadata()
  statusCode: number;
}
