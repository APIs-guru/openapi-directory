import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HeldMailQuery
/** 
 * Query options for Gmail holds.
**/
export class HeldMailQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=terms" })
  terms?: string;
}
