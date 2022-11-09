import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Watch } from "./watch";


// ListWatchesResponse
/** 
 * The response of a ListWatchesRequest.
**/
export class ListWatchesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=watches", elemType: shared.Watch })
  watches?: Watch[];
}
