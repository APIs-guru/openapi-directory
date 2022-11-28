import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmUsersIdCredentialsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmUsersIdCredentialsRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersIdCredentialsPathParams;
}
export declare class GetRealmUsersIdCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    credentialRepresentations?: shared.CredentialRepresentation[];
    statusCode: number;
}
