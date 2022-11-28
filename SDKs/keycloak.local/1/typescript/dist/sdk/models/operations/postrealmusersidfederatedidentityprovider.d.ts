import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmUsersIdFederatedIdentityProviderPathParams extends SpeakeasyBase {
    id: string;
    provider: string;
    realm: string;
}
export declare class PostRealmUsersIdFederatedIdentityProviderRequest extends SpeakeasyBase {
    pathParams: PostRealmUsersIdFederatedIdentityProviderPathParams;
    request: shared.FederatedIdentityRepresentation;
}
export declare class PostRealmUsersIdFederatedIdentityProviderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
