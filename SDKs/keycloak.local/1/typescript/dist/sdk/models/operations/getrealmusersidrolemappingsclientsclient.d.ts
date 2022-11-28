import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmUsersIdRoleMappingsClientsClientPathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class GetRealmUsersIdRoleMappingsClientsClientRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersIdRoleMappingsClientsClientPathParams;
}
export declare class GetRealmUsersIdRoleMappingsClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
