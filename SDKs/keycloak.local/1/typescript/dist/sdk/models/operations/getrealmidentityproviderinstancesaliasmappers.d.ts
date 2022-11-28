import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmIdentityProviderInstancesAliasMappersPathParams extends SpeakeasyBase {
    alias: string;
    realm: string;
}
export declare class GetRealmIdentityProviderInstancesAliasMappersRequest extends SpeakeasyBase {
    pathParams: GetRealmIdentityProviderInstancesAliasMappersPathParams;
}
export declare class GetRealmIdentityProviderInstancesAliasMappersResponse extends SpeakeasyBase {
    contentType: string;
    identityProviderMapperRepresentations?: shared.IdentityProviderMapperRepresentation[];
    statusCode: number;
}
