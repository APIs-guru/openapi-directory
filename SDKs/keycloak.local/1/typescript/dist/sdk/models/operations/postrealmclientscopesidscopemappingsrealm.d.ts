import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientScopesIdScopeMappingsRealmPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PostRealmClientScopesIdScopeMappingsRealmRequest extends SpeakeasyBase {
    pathParams: PostRealmClientScopesIdScopeMappingsRealmPathParams;
    request: shared.RoleRepresentation[];
}
export declare class PostRealmClientScopesIdScopeMappingsRealmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
