import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientsIdClientSecretPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PostRealmClientsIdClientSecretRequest extends SpeakeasyBase {
    pathParams: PostRealmClientsIdClientSecretPathParams;
}
export declare class PostRealmClientsIdClientSecretResponse extends SpeakeasyBase {
    contentType: string;
    credentialRepresentation?: shared.CredentialRepresentation;
    statusCode: number;
}
