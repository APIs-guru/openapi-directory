import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientScopesIdScopeMappingsClientsClientPathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class PostRealmClientScopesIdScopeMappingsClientsClientRequest extends SpeakeasyBase {
    pathParams: PostRealmClientScopesIdScopeMappingsClientsClientPathParams;
    request: shared.RoleRepresentation[];
}
export declare class PostRealmClientScopesIdScopeMappingsClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
