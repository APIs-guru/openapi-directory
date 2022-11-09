import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventChild
/** 
 * An event child relationship resource.
**/
export class EventChild extends SpeakeasyBase {
  @Metadata({ data: "json, name=childId" })
  childId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
