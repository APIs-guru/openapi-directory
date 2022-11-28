import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdpCredential } from "./idpcredential";



// ListIdpCredentialsResponse
/** 
 * Response of the InboundSamlSsoProfilesService.ListIdpCredentials method.
**/
export class ListIdpCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idpCredentials", elemType: IdpCredential })
  idpCredentials?: IdpCredential[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
