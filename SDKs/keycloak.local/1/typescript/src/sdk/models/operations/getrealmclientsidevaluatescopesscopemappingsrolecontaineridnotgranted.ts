import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=roleContainerId" })
  roleContainerId: string;
}


export class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: string;
}


export class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedPathParams;

  @Metadata()
  queryParams: GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryParams;
}


export class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RoleRepresentation })
  roleRepresentations?: shared.RoleRepresentation[];

  @Metadata()
  statusCode: number;
}
