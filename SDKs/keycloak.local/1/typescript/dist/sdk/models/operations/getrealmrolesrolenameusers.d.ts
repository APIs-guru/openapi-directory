import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmRolesRoleNameUsersPathParams extends SpeakeasyBase {
    realm: string;
    roleName: string;
}
export declare class GetRealmRolesRoleNameUsersQueryParams extends SpeakeasyBase {
    first?: number;
    max?: number;
}
export declare class GetRealmRolesRoleNameUsersRequest extends SpeakeasyBase {
    pathParams: GetRealmRolesRoleNameUsersPathParams;
    queryParams: GetRealmRolesRoleNameUsersQueryParams;
}
export declare class GetRealmRolesRoleNameUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRepresentations?: shared.UserRepresentation[];
}
