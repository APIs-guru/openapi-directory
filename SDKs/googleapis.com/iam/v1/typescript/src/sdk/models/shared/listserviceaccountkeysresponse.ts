import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceAccountKey } from "./serviceaccountkey";


// ListServiceAccountKeysResponse
/** 
 * The service account keys list response.
**/
export class ListServiceAccountKeysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=keys", elemType: shared.ServiceAccountKey })
  keys?: ServiceAccountKey[];
}
