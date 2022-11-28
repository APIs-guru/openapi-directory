import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdRolesRoleNameCompositesClientsClientPathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
    roleName: string;
}
export declare class GetRealmClientsIdRolesRoleNameCompositesClientsClientRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdRolesRoleNameCompositesClientsClientPathParams;
}
export declare class GetRealmClientsIdRolesRoleNameCompositesClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
