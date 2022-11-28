import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmIdentityProviderInstancesAliasMappersIdPathParams extends SpeakeasyBase {
    alias: string;
    id: string;
    realm: string;
}
export declare class GetRealmIdentityProviderInstancesAliasMappersIdRequest extends SpeakeasyBase {
    pathParams: GetRealmIdentityProviderInstancesAliasMappersIdPathParams;
}
export declare class GetRealmIdentityProviderInstancesAliasMappersIdResponse extends SpeakeasyBase {
    contentType: string;
    identityProviderMapperRepresentation?: shared.IdentityProviderMapperRepresentation;
    statusCode: number;
}
