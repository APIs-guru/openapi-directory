import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdRolesRoleNameCompositesRealmPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
    roleName: string;
}
export declare class GetRealmClientsIdRolesRoleNameCompositesRealmRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdRolesRoleNameCompositesRealmPathParams;
}
export declare class GetRealmClientsIdRolesRoleNameCompositesRealmResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
