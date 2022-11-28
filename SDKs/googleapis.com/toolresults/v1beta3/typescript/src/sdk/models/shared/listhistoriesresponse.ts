import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { History } from "./history";



// ListHistoriesResponse
/** 
 * Response message for HistoryService.List
**/
export class ListHistoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=histories", elemType: History })
  histories?: History[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
