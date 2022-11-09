import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { History } from "./history";


// ListHistoriesResponse
/** 
 * Response message for HistoryService.List
**/
export class ListHistoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=histories", elemType: shared.History })
  histories?: History[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
