import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventChild
/** 
 * An event child relationship resource.
**/
export class EventChild extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childId" })
  childId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
