import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Secret } from "./secret";


// ListSecretsResponse
/** 
 * Response message for SecretManagerService.ListSecrets.
**/
export class ListSecretsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=secrets", elemType: shared.Secret })
  secrets?: Secret[];

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
