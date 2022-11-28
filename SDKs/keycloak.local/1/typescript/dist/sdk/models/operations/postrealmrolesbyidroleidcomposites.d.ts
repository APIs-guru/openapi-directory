import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmRolesByIdRoleIdCompositesPathParams extends SpeakeasyBase {
    realm: string;
    roleId: string;
}
export declare class PostRealmRolesByIdRoleIdCompositesRequest extends SpeakeasyBase {
    pathParams: PostRealmRolesByIdRoleIdCompositesPathParams;
    request: shared.RoleRepresentation[];
}
export declare class PostRealmRolesByIdRoleIdCompositesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
