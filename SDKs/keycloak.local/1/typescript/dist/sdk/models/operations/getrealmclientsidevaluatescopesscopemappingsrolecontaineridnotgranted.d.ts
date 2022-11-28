import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
    roleContainerId: string;
}
export declare class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryParams extends SpeakeasyBase {
    scope?: string;
}
export declare class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedPathParams;
    queryParams: GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryParams;
}
export declare class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
