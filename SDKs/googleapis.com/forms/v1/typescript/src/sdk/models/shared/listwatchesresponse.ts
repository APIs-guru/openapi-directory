import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Watch } from "./watch";



// ListWatchesResponse
/** 
 * The response of a ListWatchesRequest.
**/
export class ListWatchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=watches", elemType: Watch })
  watches?: Watch[];
}
