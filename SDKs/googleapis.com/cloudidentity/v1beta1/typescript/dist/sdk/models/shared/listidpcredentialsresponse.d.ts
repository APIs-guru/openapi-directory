import { SpeakeasyBase } from "../../../internal/utils";
import { IdpCredential } from "./idpcredential";
/**
 * Response of the InboundSamlSsoProfilesService.ListIdpCredentials method.
**/
export declare class ListIdpCredentialsResponse extends SpeakeasyBase {
    idpCredentials?: IdpCredential[];
    nextPageToken?: string;
}
