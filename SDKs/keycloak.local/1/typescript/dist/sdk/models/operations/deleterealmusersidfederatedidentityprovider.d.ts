import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRealmUsersIdFederatedIdentityProviderPathParams extends SpeakeasyBase {
    id: string;
    provider: string;
    realm: string;
}
export declare class DeleteRealmUsersIdFederatedIdentityProviderRequest extends SpeakeasyBase {
    pathParams: DeleteRealmUsersIdFederatedIdentityProviderPathParams;
}
export declare class DeleteRealmUsersIdFederatedIdentityProviderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
