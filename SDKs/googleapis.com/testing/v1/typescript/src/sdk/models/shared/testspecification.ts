import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=androidInstrumentationTest" })
  androidInstrumentationTest?: AndroidInstrumentationTest;

  @Metadata({ data: "json, name=androidRoboTest" })
  androidRoboTest?: AndroidRoboTest;

  @Metadata({ data: "json, name=androidTestLoop" })
  androidTestLoop?: AndroidTestLoop;

  @Metadata({ data: "json, name=disablePerformanceMetrics" })
  disablePerformanceMetrics?: boolean;

  @Metadata({ data: "json, name=disableVideoRecording" })
  disableVideoRecording?: boolean;

  @Metadata({ data: "json, name=iosTestLoop" })
  iosTestLoop?: IosTestLoop;

  @Metadata({ data: "json, name=iosTestSetup" })
  iosTestSetup?: IosTestSetup;

  @Metadata({ data: "json, name=iosXcTest" })
  iosXcTest?: IosXcTest;

  @Metadata({ data: "json, name=testSetup" })
  testSetup?: TestSetup;

  @Metadata({ data: "json, name=testTimeout" })
  testTimeout?: string;
}
