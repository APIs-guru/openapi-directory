import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
import { AppBundle } from "./appbundle";
import { RoboDirective } from "./robodirective";
import { RoboStartingIntent } from "./robostartingintent";
export declare enum AndroidRoboTestRoboModeEnum {
    RoboModeUnspecified = "ROBO_MODE_UNSPECIFIED",
    RoboVersion1 = "ROBO_VERSION_1",
    RoboVersion2 = "ROBO_VERSION_2"
}
/**
 * A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes.
**/
export declare class AndroidRoboTest extends SpeakeasyBase {
    appApk?: FileReference;
    appBundle?: AppBundle;
    appInitialActivity?: string;
    appPackageId?: string;
    maxDepth?: number;
    maxSteps?: number;
    roboDirectives?: RoboDirective[];
    roboMode?: AndroidRoboTestRoboModeEnum;
    roboScript?: FileReference;
    startingIntents?: RoboStartingIntent[];
}
