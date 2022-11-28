import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmClientsIdRolesRoleNamePathParams extends SpeakeasyBase {
    id: string;
    realm: string;
    roleName: string;
}
export declare class PutRealmClientsIdRolesRoleNameRequest extends SpeakeasyBase {
    pathParams: PutRealmClientsIdRolesRoleNamePathParams;
    request: shared.RoleRepresentation;
}
export declare class PutRealmClientsIdRolesRoleNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
