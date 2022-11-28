import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmUsersIdFederatedIdentityPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmUsersIdFederatedIdentityRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersIdFederatedIdentityPathParams;
}
export declare class GetRealmUsersIdFederatedIdentityResponse extends SpeakeasyBase {
    contentType: string;
    federatedIdentityRepresentations?: shared.FederatedIdentityRepresentation[];
    statusCode: number;
}
