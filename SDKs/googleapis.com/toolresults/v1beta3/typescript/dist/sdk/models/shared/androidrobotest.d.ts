import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A test of an android application that explores the application on a virtual or physical Android device, finding culprits and crashes as it goes.
**/
export declare class AndroidRoboTest extends SpeakeasyBase {
    appInitialActivity?: string;
    bootstrapPackageId?: string;
    bootstrapRunnerClass?: string;
    maxDepth?: number;
    maxSteps?: number;
}
