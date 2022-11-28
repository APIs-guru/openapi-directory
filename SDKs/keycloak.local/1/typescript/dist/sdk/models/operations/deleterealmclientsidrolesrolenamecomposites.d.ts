import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRealmClientsIdRolesRoleNameCompositesPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
    roleName: string;
}
export declare class DeleteRealmClientsIdRolesRoleNameCompositesRequest extends SpeakeasyBase {
    pathParams: DeleteRealmClientsIdRolesRoleNameCompositesPathParams;
    request: shared.RoleRepresentation[];
}
export declare class DeleteRealmClientsIdRolesRoleNameCompositesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
