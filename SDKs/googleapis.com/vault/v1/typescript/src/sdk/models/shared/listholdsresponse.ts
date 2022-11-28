import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Hold } from "./hold";



// ListHoldsResponse
/** 
 * The holds for a matter.
**/
export class ListHoldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=holds", elemType: Hold })
  holds?: Hold[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
