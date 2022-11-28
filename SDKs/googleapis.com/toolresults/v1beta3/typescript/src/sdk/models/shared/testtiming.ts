import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";



// TestTiming
/** 
 * Testing timing break down to know phases.
**/
export class TestTiming extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=testProcessDuration" })
  testProcessDuration?: Duration;
}
