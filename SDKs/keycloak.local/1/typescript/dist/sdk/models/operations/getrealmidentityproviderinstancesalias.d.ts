import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmIdentityProviderInstancesAliasPathParams extends SpeakeasyBase {
    alias: string;
    realm: string;
}
export declare class GetRealmIdentityProviderInstancesAliasRequest extends SpeakeasyBase {
    pathParams: GetRealmIdentityProviderInstancesAliasPathParams;
}
export declare class GetRealmIdentityProviderInstancesAliasResponse extends SpeakeasyBase {
    contentType: string;
    identityProviderRepresentation?: shared.IdentityProviderRepresentation;
    statusCode: number;
}
