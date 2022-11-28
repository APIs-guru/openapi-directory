import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmRolesRoleNamePathParams extends SpeakeasyBase {
    realm: string;
    roleName: string;
}
export declare class PutRealmRolesRoleNameRequest extends SpeakeasyBase {
    pathParams: PutRealmRolesRoleNamePathParams;
    request: shared.RoleRepresentation;
}
export declare class PutRealmRolesRoleNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
