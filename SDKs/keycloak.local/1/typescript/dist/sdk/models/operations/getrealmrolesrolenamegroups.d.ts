import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmRolesRoleNameGroupsPathParams extends SpeakeasyBase {
    realm: string;
    roleName: string;
}
export declare class GetRealmRolesRoleNameGroupsQueryParams extends SpeakeasyBase {
    briefRepresentation?: boolean;
    first?: number;
    max?: number;
}
export declare class GetRealmRolesRoleNameGroupsRequest extends SpeakeasyBase {
    pathParams: GetRealmRolesRoleNameGroupsPathParams;
    queryParams: GetRealmRolesRoleNameGroupsQueryParams;
}
export declare class GetRealmRolesRoleNameGroupsResponse extends SpeakeasyBase {
    contentType: string;
    groupRepresentations?: shared.GroupRepresentation[];
    statusCode: number;
}
