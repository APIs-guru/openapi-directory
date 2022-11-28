import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorGroupStats } from "./errorgroupstats";



// ListGroupStatsResponse
/** 
 * Contains a set of requested error group stats.
**/
export class ListGroupStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorGroupStats", elemType: ErrorGroupStats })
  errorGroupStats?: ErrorGroupStats[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=timeRangeBegin" })
  timeRangeBegin?: string;
}
