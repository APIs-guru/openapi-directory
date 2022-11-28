import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRealmRolesRoleNameCompositesPathParams extends SpeakeasyBase {
    realm: string;
    roleName: string;
}
export declare class DeleteRealmRolesRoleNameCompositesRequest extends SpeakeasyBase {
    pathParams: DeleteRealmRolesRoleNameCompositesPathParams;
    request: shared.RoleRepresentation[];
}
export declare class DeleteRealmRolesRoleNameCompositesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
