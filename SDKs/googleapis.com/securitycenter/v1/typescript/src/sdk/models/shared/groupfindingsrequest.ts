import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupFindingsRequest
/** 
 * Request message for grouping by findings.
**/
export class GroupFindingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compareDuration" })
  compareDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=groupBy" })
  groupBy?: string;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;
}
