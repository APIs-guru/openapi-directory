import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Restore } from "./restore";



// ListRestoresResponse
/** 
 * Response message for ListRestores.
**/
export class ListRestoresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=restores", elemType: Restore })
  restores?: Restore[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
