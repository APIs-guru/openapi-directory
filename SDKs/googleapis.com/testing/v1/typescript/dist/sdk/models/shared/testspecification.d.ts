import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidInstrumentationTest } from "./androidinstrumentationtest";
import { AndroidRoboTest } from "./androidrobotest";
import { AndroidTestLoop } from "./androidtestloop";
import { IosTestLoop } from "./iostestloop";
import { IosTestSetup } from "./iostestsetup";
import { IosXcTest } from "./iosxctest";
import { TestSetup } from "./testsetup";
/**
 * A description of how to run the test.
**/
export declare class TestSpecification extends SpeakeasyBase {
    androidInstrumentationTest?: AndroidInstrumentationTest;
    androidRoboTest?: AndroidRoboTest;
    androidTestLoop?: AndroidTestLoop;
    disablePerformanceMetrics?: boolean;
    disableVideoRecording?: boolean;
    iosTestLoop?: IosTestLoop;
    iosTestSetup?: IosTestSetup;
    iosXcTest?: IosXcTest;
    testSetup?: TestSetup;
    testTimeout?: string;
}
