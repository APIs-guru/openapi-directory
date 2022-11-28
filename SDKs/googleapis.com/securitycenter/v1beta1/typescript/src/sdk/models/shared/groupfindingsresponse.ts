import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupResult } from "./groupresult";



// GroupFindingsResponse
/** 
 * Response message for group by findings.
**/
export class GroupFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupByResults", elemType: GroupResult })
  groupByResults?: GroupResult[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;
}
