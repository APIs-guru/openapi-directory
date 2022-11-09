import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FileReference } from "./filereference";
import { AppBundle } from "./appbundle";
import { RoboDirective } from "./robodirective";
import { FileReference } from "./filereference";
import { RoboStartingIntent } from "./robostartingintent";

export enum AndroidRoboTestRoboModeEnum {
    RoboModeUnspecified = "ROBO_MODE_UNSPECIFIED"
,    RoboVersion1 = "ROBO_VERSION_1"
,    RoboVersion2 = "ROBO_VERSION_2"
}


// AndroidRoboTest
/** 
 * A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes.
**/
export class AndroidRoboTest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appApk" })
  appApk?: FileReference;

  @Metadata({ data: "json, name=appBundle" })
  appBundle?: AppBundle;

  @Metadata({ data: "json, name=appInitialActivity" })
  appInitialActivity?: string;

  @Metadata({ data: "json, name=appPackageId" })
  appPackageId?: string;

  @Metadata({ data: "json, name=maxDepth" })
  maxDepth?: number;

  @Metadata({ data: "json, name=maxSteps" })
  maxSteps?: number;

  @Metadata({ data: "json, name=roboDirectives", elemType: shared.RoboDirective })
  roboDirectives?: RoboDirective[];

  @Metadata({ data: "json, name=roboMode" })
  roboMode?: AndroidRoboTestRoboModeEnum;

  @Metadata({ data: "json, name=roboScript" })
  roboScript?: FileReference;

  @Metadata({ data: "json, name=startingIntents", elemType: shared.RoboStartingIntent })
  startingIntents?: RoboStartingIntent[];
}
