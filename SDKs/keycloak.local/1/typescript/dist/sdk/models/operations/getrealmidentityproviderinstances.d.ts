import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmIdentityProviderInstancesPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmIdentityProviderInstancesRequest extends SpeakeasyBase {
    pathParams: GetRealmIdentityProviderInstancesPathParams;
}
export declare class GetRealmIdentityProviderInstancesResponse extends SpeakeasyBase {
    contentType: string;
    identityProviderRepresentations?: shared.IdentityProviderRepresentation[];
    statusCode: number;
}
