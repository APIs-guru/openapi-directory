import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Step
/** 
 * Represents a step of the workflow this execution is running.
**/
export class Step extends SpeakeasyBase {
  @Metadata({ data: "json, name=routine" })
  routine?: string;

  @Metadata({ data: "json, name=step" })
  step?: string;
}
