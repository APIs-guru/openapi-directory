import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmIdentityProviderInstancesAliasPathParams extends SpeakeasyBase {
    alias: string;
    realm: string;
}
export declare class PutRealmIdentityProviderInstancesAliasRequest extends SpeakeasyBase {
    pathParams: PutRealmIdentityProviderInstancesAliasPathParams;
    request: shared.IdentityProviderRepresentation;
}
export declare class PutRealmIdentityProviderInstancesAliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
