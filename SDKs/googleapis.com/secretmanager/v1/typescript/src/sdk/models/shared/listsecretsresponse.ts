import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";



// ListSecretsResponse
/** 
 * Response message for SecretManagerService.ListSecrets.
**/
export class ListSecretsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=secrets", elemType: Secret })
  secrets?: Secret[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
