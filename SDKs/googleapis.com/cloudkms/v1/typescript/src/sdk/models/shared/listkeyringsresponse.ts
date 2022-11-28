import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyRing } from "./keyring";



// ListKeyRingsResponse
/** 
 * Response message for KeyManagementService.ListKeyRings.
**/
export class ListKeyRingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyRings", elemType: KeyRing })
  keyRings?: KeyRing[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
