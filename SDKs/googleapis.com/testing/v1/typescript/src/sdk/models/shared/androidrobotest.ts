import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
import { AppBundle } from "./appbundle";
import { RoboDirective } from "./robodirective";
import { RoboStartingIntent } from "./robostartingintent";


export enum AndroidRoboTestRoboModeEnum {
    RoboModeUnspecified = "ROBO_MODE_UNSPECIFIED",
    RoboVersion1 = "ROBO_VERSION_1",
    RoboVersion2 = "ROBO_VERSION_2"
}


// AndroidRoboTest
/** 
 * A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes.
**/
export class AndroidRoboTest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appApk" })
  appApk?: FileReference;

  @SpeakeasyMetadata({ data: "json, name=appBundle" })
  appBundle?: AppBundle;

  @SpeakeasyMetadata({ data: "json, name=appInitialActivity" })
  appInitialActivity?: string;

  @SpeakeasyMetadata({ data: "json, name=appPackageId" })
  appPackageId?: string;

  @SpeakeasyMetadata({ data: "json, name=maxDepth" })
  maxDepth?: number;

  @SpeakeasyMetadata({ data: "json, name=maxSteps" })
  maxSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=roboDirectives", elemType: RoboDirective })
  roboDirectives?: RoboDirective[];

  @SpeakeasyMetadata({ data: "json, name=roboMode" })
  roboMode?: AndroidRoboTestRoboModeEnum;

  @SpeakeasyMetadata({ data: "json, name=roboScript" })
  roboScript?: FileReference;

  @SpeakeasyMetadata({ data: "json, name=startingIntents", elemType: RoboStartingIntent })
  startingIntents?: RoboStartingIntent[];
}
