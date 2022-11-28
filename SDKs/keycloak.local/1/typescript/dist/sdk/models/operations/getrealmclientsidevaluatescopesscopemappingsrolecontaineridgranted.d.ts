import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
    roleContainerId: string;
}
export declare class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryParams extends SpeakeasyBase {
    scope?: string;
}
export declare class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedPathParams;
    queryParams: GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryParams;
}
export declare class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
