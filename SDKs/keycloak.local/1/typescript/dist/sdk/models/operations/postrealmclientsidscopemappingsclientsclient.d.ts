import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientsIdScopeMappingsClientsClientPathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class PostRealmClientsIdScopeMappingsClientsClientRequest extends SpeakeasyBase {
    pathParams: PostRealmClientsIdScopeMappingsClientsClientPathParams;
    request: shared.RoleRepresentation[];
}
export declare class PostRealmClientsIdScopeMappingsClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
