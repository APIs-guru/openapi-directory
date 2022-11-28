import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmUsersIdRoleMappingsClientsClientAvailablePathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class GetRealmUsersIdRoleMappingsClientsClientAvailableRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersIdRoleMappingsClientsClientAvailablePathParams;
}
export declare class GetRealmUsersIdRoleMappingsClientsClientAvailableResponse extends SpeakeasyBase {
    contentType: string;
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
}
