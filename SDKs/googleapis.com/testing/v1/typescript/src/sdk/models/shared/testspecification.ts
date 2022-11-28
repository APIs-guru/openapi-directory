import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AndroidInstrumentationTest } from "./androidinstrumentationtest";
import { AndroidRoboTest } from "./androidrobotest";
import { AndroidTestLoop } from "./androidtestloop";
import { IosTestLoop } from "./iostestloop";
import { IosTestSetup } from "./iostestsetup";
import { IosXcTest } from "./iosxctest";
import { TestSetup } from "./testsetup";



// TestSpecification
/** 
 * A description of how to run the test.
**/
export class TestSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidInstrumentationTest" })
  androidInstrumentationTest?: AndroidInstrumentationTest;

  @SpeakeasyMetadata({ data: "json, name=androidRoboTest" })
  androidRoboTest?: AndroidRoboTest;

  @SpeakeasyMetadata({ data: "json, name=androidTestLoop" })
  androidTestLoop?: AndroidTestLoop;

  @SpeakeasyMetadata({ data: "json, name=disablePerformanceMetrics" })
  disablePerformanceMetrics?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disableVideoRecording" })
  disableVideoRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=iosTestLoop" })
  iosTestLoop?: IosTestLoop;

  @SpeakeasyMetadata({ data: "json, name=iosTestSetup" })
  iosTestSetup?: IosTestSetup;

  @SpeakeasyMetadata({ data: "json, name=iosXcTest" })
  iosXcTest?: IosXcTest;

  @SpeakeasyMetadata({ data: "json, name=testSetup" })
  testSetup?: TestSetup;

  @SpeakeasyMetadata({ data: "json, name=testTimeout" })
  testTimeout?: string;
}
