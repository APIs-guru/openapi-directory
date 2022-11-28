import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientsIdRegistrationAccessTokenPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PostRealmClientsIdRegistrationAccessTokenRequest extends SpeakeasyBase {
    pathParams: PostRealmClientsIdRegistrationAccessTokenPathParams;
}
export declare class PostRealmClientsIdRegistrationAccessTokenResponse extends SpeakeasyBase {
    clientRepresentation?: shared.ClientRepresentation;
    contentType: string;
    statusCode: number;
}
