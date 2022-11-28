import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmIdentityProviderInstancesAliasMappersIdPathParams extends SpeakeasyBase {
    alias: string;
    id: string;
    realm: string;
}
export declare class PutRealmIdentityProviderInstancesAliasMappersIdRequest extends SpeakeasyBase {
    pathParams: PutRealmIdentityProviderInstancesAliasMappersIdPathParams;
    request: shared.IdentityProviderMapperRepresentation;
}
export declare class PutRealmIdentityProviderInstancesAliasMappersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
