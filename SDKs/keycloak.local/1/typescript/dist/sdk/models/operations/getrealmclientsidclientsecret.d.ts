import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdClientSecretPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdClientSecretRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdClientSecretPathParams;
}
export declare class GetRealmClientsIdClientSecretResponse extends SpeakeasyBase {
    contentType: string;
    credentialRepresentation?: shared.CredentialRepresentation;
    statusCode: number;
}
