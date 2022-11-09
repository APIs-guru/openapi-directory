import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupFindingsRequest
/** 
 * Request message for grouping by findings.
**/
export class GroupFindingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=groupBy" })
  groupBy?: string;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;
}
