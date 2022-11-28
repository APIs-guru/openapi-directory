import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AndroidRoboTest
/** 
 * A test of an android application that explores the application on a virtual or physical Android device, finding culprits and crashes as it goes.
**/
export class AndroidRoboTest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appInitialActivity" })
  appInitialActivity?: string;

  @SpeakeasyMetadata({ data: "json, name=bootstrapPackageId" })
  bootstrapPackageId?: string;

  @SpeakeasyMetadata({ data: "json, name=bootstrapRunnerClass" })
  bootstrapRunnerClass?: string;

  @SpeakeasyMetadata({ data: "json, name=maxDepth" })
  maxDepth?: number;

  @SpeakeasyMetadata({ data: "json, name=maxSteps" })
  maxSteps?: number;
}
