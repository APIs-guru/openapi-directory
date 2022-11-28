import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRealmUsersIdRoleMappingsClientsClientPathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class DeleteRealmUsersIdRoleMappingsClientsClientRequest extends SpeakeasyBase {
    pathParams: DeleteRealmUsersIdRoleMappingsClientsClientPathParams;
    request: shared.RoleRepresentation[];
}
export declare class DeleteRealmUsersIdRoleMappingsClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
