import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidAppInfo } from "./androidappinfo";
import { AndroidInstrumentationTest } from "./androidinstrumentationtest";
import { AndroidRoboTest } from "./androidrobotest";
import { Duration } from "./duration";
/**
 * An Android mobile test specification.
**/
export declare class AndroidTest extends SpeakeasyBase {
    androidAppInfo?: AndroidAppInfo;
    androidInstrumentationTest?: AndroidInstrumentationTest;
    androidRoboTest?: AndroidRoboTest;
    androidTestLoop?: Map<string, any>;
    testTimeout?: Duration;
}
