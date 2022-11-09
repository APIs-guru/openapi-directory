import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HeldGroupsQuery
/** 
 * Query options for group holds.
**/
export class HeldGroupsQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=terms" })
  terms?: string;
}
