import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmIdentityProviderInstancesPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PostRealmIdentityProviderInstancesRequest extends SpeakeasyBase {
    pathParams: PostRealmIdentityProviderInstancesPathParams;
    request: shared.IdentityProviderRepresentation;
}
export declare class PostRealmIdentityProviderInstancesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
