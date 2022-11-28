import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AndroidAppInfo } from "./androidappinfo";
import { AndroidInstrumentationTest } from "./androidinstrumentationtest";
import { AndroidRoboTest } from "./androidrobotest";
import { Duration } from "./duration";



// AndroidTest
/** 
 * An Android mobile test specification.
**/
export class AndroidTest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidAppInfo" })
  androidAppInfo?: AndroidAppInfo;

  @SpeakeasyMetadata({ data: "json, name=androidInstrumentationTest" })
  androidInstrumentationTest?: AndroidInstrumentationTest;

  @SpeakeasyMetadata({ data: "json, name=androidRoboTest" })
  androidRoboTest?: AndroidRoboTest;

  @SpeakeasyMetadata({ data: "json, name=androidTestLoop" })
  androidTestLoop?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=testTimeout" })
  testTimeout?: Duration;
}
