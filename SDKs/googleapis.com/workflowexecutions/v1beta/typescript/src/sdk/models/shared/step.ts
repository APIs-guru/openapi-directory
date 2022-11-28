import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Step
/** 
 * Represents a step of the workflow this execution is running.
**/
export class Step extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=routine" })
  routine?: string;

  @SpeakeasyMetadata({ data: "json, name=step" })
  step?: string;
}
