import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmRolesRoleNameCompositesPathParams extends SpeakeasyBase {
    realm: string;
    roleName: string;
}
export declare class GetRealmRolesRoleNameCompositesRequest extends SpeakeasyBase {
    pathParams: GetRealmRolesRoleNameCompositesPathParams;
}
export declare class GetRealmRolesRoleNameCompositesResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
