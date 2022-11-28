import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdRolesRoleNameGroupsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
    roleName: string;
}
export declare class GetRealmClientsIdRolesRoleNameGroupsQueryParams extends SpeakeasyBase {
    briefRepresentation?: boolean;
    first?: number;
    max?: number;
}
export declare class GetRealmClientsIdRolesRoleNameGroupsRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdRolesRoleNameGroupsPathParams;
    queryParams: GetRealmClientsIdRolesRoleNameGroupsQueryParams;
}
export declare class GetRealmClientsIdRolesRoleNameGroupsResponse extends SpeakeasyBase {
    contentType: string;
    groupRepresentations?: shared.GroupRepresentation[];
    statusCode: number;
}
