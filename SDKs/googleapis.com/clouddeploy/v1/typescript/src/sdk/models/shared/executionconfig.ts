import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DefaultPool } from "./defaultpool";
import { PrivatePool } from "./privatepool";

export enum ExecutionConfigUsagesEnum {
    ExecutionEnvironmentUsageUnspecified = "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
,    Render = "RENDER"
,    Deploy = "DEPLOY"
,    Verify = "VERIFY"
}


// ExecutionConfig
/** 
 * Configuration of the environment to use when calling Skaffold.
**/
export class ExecutionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactStorage" })
  artifactStorage?: string;

  @Metadata({ data: "json, name=defaultPool" })
  defaultPool?: DefaultPool;

  @Metadata({ data: "json, name=executionTimeout" })
  executionTimeout?: string;

  @Metadata({ data: "json, name=privatePool" })
  privatePool?: PrivatePool;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=usages" })
  usages?: ExecutionConfigUsagesEnum[];

  @Metadata({ data: "json, name=workerPool" })
  workerPool?: string;
}
