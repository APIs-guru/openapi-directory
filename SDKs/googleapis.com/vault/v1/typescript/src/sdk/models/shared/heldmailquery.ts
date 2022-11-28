import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HeldMailQuery
/** 
 * Query options for Gmail holds.
**/
export class HeldMailQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: string;
}
