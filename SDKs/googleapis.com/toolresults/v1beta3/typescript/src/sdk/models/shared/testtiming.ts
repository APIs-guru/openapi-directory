import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Duration } from "./duration";


// TestTiming
/** 
 * Testing timing break down to know phases.
**/
export class TestTiming extends SpeakeasyBase {
  @Metadata({ data: "json, name=testProcessDuration" })
  testProcessDuration?: Duration;
}
