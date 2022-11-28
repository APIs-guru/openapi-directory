import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmRolesByIdRoleIdCompositesClientsClientPathParams extends SpeakeasyBase {
    client: string;
    realm: string;
    roleId: string;
}
export declare class GetRealmRolesByIdRoleIdCompositesClientsClientRequest extends SpeakeasyBase {
    pathParams: GetRealmRolesByIdRoleIdCompositesClientsClientPathParams;
}
export declare class GetRealmRolesByIdRoleIdCompositesClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
