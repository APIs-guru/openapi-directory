import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmRolesRoleNamePathParams extends SpeakeasyBase {
    realm: string;
    roleName: string;
}
export declare class GetRealmRolesRoleNameRequest extends SpeakeasyBase {
    pathParams: GetRealmRolesRoleNamePathParams;
}
export declare class GetRealmRolesRoleNameResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentation?: shared.RoleRepresentation;
    statusCode: number;
}
