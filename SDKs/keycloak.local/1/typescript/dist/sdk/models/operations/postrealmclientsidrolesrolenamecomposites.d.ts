import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientsIdRolesRoleNameCompositesPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
    roleName: string;
}
export declare class PostRealmClientsIdRolesRoleNameCompositesRequest extends SpeakeasyBase {
    pathParams: PostRealmClientsIdRolesRoleNameCompositesPathParams;
    request: shared.RoleRepresentation[];
}
export declare class PostRealmClientsIdRolesRoleNameCompositesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
