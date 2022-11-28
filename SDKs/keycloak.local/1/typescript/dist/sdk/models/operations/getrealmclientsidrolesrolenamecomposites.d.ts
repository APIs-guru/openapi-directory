import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdRolesRoleNameCompositesPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
    roleName: string;
}
export declare class GetRealmClientsIdRolesRoleNameCompositesRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdRolesRoleNameCompositesPathParams;
}
export declare class GetRealmClientsIdRolesRoleNameCompositesResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
