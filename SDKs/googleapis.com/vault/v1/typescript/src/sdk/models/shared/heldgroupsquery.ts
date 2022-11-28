import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HeldGroupsQuery
/** 
 * Query options for group holds.
**/
export class HeldGroupsQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: string;
}
