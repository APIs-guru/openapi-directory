import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmGroupsIdRoleMappingsClientsClientPathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class PostRealmGroupsIdRoleMappingsClientsClientRequest extends SpeakeasyBase {
    pathParams: PostRealmGroupsIdRoleMappingsClientsClientPathParams;
    request: shared.RoleRepresentation[];
}
export declare class PostRealmGroupsIdRoleMappingsClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
