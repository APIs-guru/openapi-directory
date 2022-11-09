import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyRing } from "./keyring";


// ListKeyRingsResponse
/** 
 * Response message for KeyManagementService.ListKeyRings.
**/
export class ListKeyRingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyRings", elemType: shared.KeyRing })
  keyRings?: KeyRing[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
