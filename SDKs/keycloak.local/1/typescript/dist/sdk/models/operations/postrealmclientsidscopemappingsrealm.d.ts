import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientsIdScopeMappingsRealmPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PostRealmClientsIdScopeMappingsRealmRequest extends SpeakeasyBase {
    pathParams: PostRealmClientsIdScopeMappingsRealmPathParams;
    request: shared.RoleRepresentation[];
}
export declare class PostRealmClientsIdScopeMappingsRealmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
