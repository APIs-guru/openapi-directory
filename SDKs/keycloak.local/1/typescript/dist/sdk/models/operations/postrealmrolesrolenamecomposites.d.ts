import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmRolesRoleNameCompositesPathParams extends SpeakeasyBase {
    realm: string;
    roleName: string;
}
export declare class PostRealmRolesRoleNameCompositesRequest extends SpeakeasyBase {
    pathParams: PostRealmRolesRoleNameCompositesPathParams;
    request: shared.RoleRepresentation[];
}
export declare class PostRealmRolesRoleNameCompositesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
