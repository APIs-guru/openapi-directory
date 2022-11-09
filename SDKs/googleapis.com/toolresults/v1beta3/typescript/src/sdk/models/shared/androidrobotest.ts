import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AndroidRoboTest
/** 
 * A test of an android application that explores the application on a virtual or physical Android device, finding culprits and crashes as it goes.
**/
export class AndroidRoboTest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appInitialActivity" })
  appInitialActivity?: string;

  @Metadata({ data: "json, name=bootstrapPackageId" })
  bootstrapPackageId?: string;

  @Metadata({ data: "json, name=bootstrapRunnerClass" })
  bootstrapRunnerClass?: string;

  @Metadata({ data: "json, name=maxDepth" })
  maxDepth?: number;

  @Metadata({ data: "json, name=maxSteps" })
  maxSteps?: number;
}
