import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsolidationStrategy } from "./consolidationstrategy";



// QueryDriveActivityRequest
/** 
 * The request message for querying Drive activity.
**/
export class QueryDriveActivityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ancestorName" })
  ancestorName?: string;

  @SpeakeasyMetadata({ data: "json, name=consolidationStrategy" })
  consolidationStrategy?: ConsolidationStrategy;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=itemName" })
  itemName?: string;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
