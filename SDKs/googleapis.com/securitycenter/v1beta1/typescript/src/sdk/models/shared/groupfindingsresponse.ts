import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupResult } from "./groupresult";


// GroupFindingsResponse
/** 
 * Response message for group by findings.
**/
export class GroupFindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupByResults", elemType: shared.GroupResult })
  groupByResults?: GroupResult[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;
}
