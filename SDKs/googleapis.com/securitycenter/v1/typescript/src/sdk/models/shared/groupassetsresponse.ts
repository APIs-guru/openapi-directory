import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupResult } from "./groupresult";



// GroupAssetsResponse
/** 
 * Response message for grouping by assets.
**/
export class GroupAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupByResults", elemType: GroupResult })
  groupByResults?: GroupResult[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
