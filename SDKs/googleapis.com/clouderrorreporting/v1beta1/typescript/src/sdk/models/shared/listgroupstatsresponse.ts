import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorGroupStats } from "./errorgroupstats";


// ListGroupStatsResponse
/** 
 * Contains a set of requested error group stats.
**/
export class ListGroupStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorGroupStats", elemType: shared.ErrorGroupStats })
  errorGroupStats?: ErrorGroupStats[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=timeRangeBegin" })
  timeRangeBegin?: string;
}
