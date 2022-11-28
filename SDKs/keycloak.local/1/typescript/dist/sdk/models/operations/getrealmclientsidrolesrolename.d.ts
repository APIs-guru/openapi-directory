import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdRolesRoleNamePathParams extends SpeakeasyBase {
    id: string;
    realm: string;
    roleName: string;
}
export declare class GetRealmClientsIdRolesRoleNameRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdRolesRoleNamePathParams;
}
export declare class GetRealmClientsIdRolesRoleNameResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentation?: shared.RoleRepresentation;
    statusCode: number;
}
