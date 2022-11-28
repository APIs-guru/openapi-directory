import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmRolesRoleNameCompositesRealmPathParams extends SpeakeasyBase {
    realm: string;
    roleName: string;
}
export declare class GetRealmRolesRoleNameCompositesRealmRequest extends SpeakeasyBase {
    pathParams: GetRealmRolesRoleNameCompositesRealmPathParams;
}
export declare class GetRealmRolesRoleNameCompositesRealmResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
