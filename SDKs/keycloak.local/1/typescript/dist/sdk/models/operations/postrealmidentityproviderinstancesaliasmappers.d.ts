import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmIdentityProviderInstancesAliasMappersPathParams extends SpeakeasyBase {
    alias: string;
    realm: string;
}
export declare class PostRealmIdentityProviderInstancesAliasMappersRequest extends SpeakeasyBase {
    pathParams: PostRealmIdentityProviderInstancesAliasMappersPathParams;
    request: shared.IdentityProviderMapperRepresentation;
}
export declare class PostRealmIdentityProviderInstancesAliasMappersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
