import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupAssetsRequest
/** 
 * Request message for grouping by assets.
**/
export class GroupAssetsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=compareDuration" })
  compareDuration?: string;

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
