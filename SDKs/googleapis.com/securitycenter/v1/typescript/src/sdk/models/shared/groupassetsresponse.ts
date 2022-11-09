import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupResult } from "./groupresult";


// GroupAssetsResponse
/** 
 * Response message for grouping by assets.
**/
export class GroupAssetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupByResults", elemType: shared.GroupResult })
  groupByResults?: GroupResult[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
