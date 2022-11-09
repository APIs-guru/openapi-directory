import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AndroidAppInfo } from "./androidappinfo";
import { AndroidInstrumentationTest } from "./androidinstrumentationtest";
import { AndroidRoboTest } from "./androidrobotest";
import { Duration } from "./duration";


// AndroidTest
/** 
 * An Android mobile test specification.
**/
export class AndroidTest extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidAppInfo" })
  androidAppInfo?: AndroidAppInfo;

  @Metadata({ data: "json, name=androidInstrumentationTest" })
  androidInstrumentationTest?: AndroidInstrumentationTest;

  @Metadata({ data: "json, name=androidRoboTest" })
  androidRoboTest?: AndroidRoboTest;

  @Metadata({ data: "json, name=androidTestLoop" })
  androidTestLoop?: Map<string, any>;

  @Metadata({ data: "json, name=testTimeout" })
  testTimeout?: Duration;
}
