import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IdpCredential } from "./idpcredential";


// ListIdpCredentialsResponse
/** 
 * Response of the InboundSamlSsoProfilesService.ListIdpCredentials method.
**/
export class ListIdpCredentialsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=idpCredentials", elemType: shared.IdpCredential })
  idpCredentials?: IdpCredential[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
