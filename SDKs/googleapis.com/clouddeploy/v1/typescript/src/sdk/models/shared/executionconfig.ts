import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefaultPool } from "./defaultpool";
import { PrivatePool } from "./privatepool";


export enum ExecutionConfigUsagesEnum {
    ExecutionEnvironmentUsageUnspecified = "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED",
    Render = "RENDER",
    Deploy = "DEPLOY",
    Verify = "VERIFY"
}


// ExecutionConfig
/** 
 * Configuration of the environment to use when calling Skaffold.
**/
export class ExecutionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactStorage" })
  artifactStorage?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultPool" })
  defaultPool?: DefaultPool;

  @SpeakeasyMetadata({ data: "json, name=executionTimeout" })
  executionTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=privatePool" })
  privatePool?: PrivatePool;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=usages" })
  usages?: ExecutionConfigUsagesEnum[];

  @SpeakeasyMetadata({ data: "json, name=workerPool" })
  workerPool?: string;
}
