import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConsolidationStrategy } from "./consolidationstrategy";


// QueryDriveActivityRequest
/** 
 * The request message for querying Drive activity.
**/
export class QueryDriveActivityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ancestorName" })
  ancestorName?: string;

  @Metadata({ data: "json, name=consolidationStrategy" })
  consolidationStrategy?: ConsolidationStrategy;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=itemName" })
  itemName?: string;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
