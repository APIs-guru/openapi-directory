import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdRolesRoleNameUsersPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
    roleName: string;
}
export declare class GetRealmClientsIdRolesRoleNameUsersQueryParams extends SpeakeasyBase {
    first?: number;
    max?: number;
}
export declare class GetRealmClientsIdRolesRoleNameUsersRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdRolesRoleNameUsersPathParams;
    queryParams: GetRealmClientsIdRolesRoleNameUsersQueryParams;
}
export declare class GetRealmClientsIdRolesRoleNameUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRepresentations?: shared.UserRepresentation[];
}
