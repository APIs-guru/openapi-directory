import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmUsersIdRoleMappingsClientsClientPathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class PostRealmUsersIdRoleMappingsClientsClientRequest extends SpeakeasyBase {
    pathParams: PostRealmUsersIdRoleMappingsClientsClientPathParams;
    request: shared.RoleRepresentation[];
}
export declare class PostRealmUsersIdRoleMappingsClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
