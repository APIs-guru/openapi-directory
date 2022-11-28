import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmRolesRoleNameCompositesClientsClientPathParams extends SpeakeasyBase {
    client: string;
    realm: string;
    roleName: string;
}
export declare class GetRealmRolesRoleNameCompositesClientsClientRequest extends SpeakeasyBase {
    pathParams: GetRealmRolesRoleNameCompositesClientsClientPathParams;
}
export declare class GetRealmRolesRoleNameCompositesClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
