import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceAccountKey } from "./serviceaccountkey";



// ListServiceAccountKeysResponse
/** 
 * The service account keys list response.
**/
export class ListServiceAccountKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keys", elemType: ServiceAccountKey })
  keys?: ServiceAccountKey[];
}
