import { SpeakeasyBase } from "../../../internal/utils";
import { DefaultPool } from "./defaultpool";
import { PrivatePool } from "./privatepool";
export declare enum ExecutionConfigUsagesEnum {
    ExecutionEnvironmentUsageUnspecified = "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED",
    Render = "RENDER",
    Deploy = "DEPLOY",
    Verify = "VERIFY"
}
/**
 * Configuration of the environment to use when calling Skaffold.
**/
export declare class ExecutionConfig extends SpeakeasyBase {
    artifactStorage?: string;
    defaultPool?: DefaultPool;
    executionTimeout?: string;
    privatePool?: PrivatePool;
    serviceAccount?: string;
    usages?: ExecutionConfigUsagesEnum[];
    workerPool?: string;
}
