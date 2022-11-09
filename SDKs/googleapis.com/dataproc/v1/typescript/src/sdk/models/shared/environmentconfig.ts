import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionConfig } from "./executionconfig";
import { PeripheralsConfig } from "./peripheralsconfig";


// EnvironmentConfig
/** 
 * Environment configuration for a workload.
**/
export class EnvironmentConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionConfig" })
  executionConfig?: ExecutionConfig;

  @Metadata({ data: "json, name=peripheralsConfig" })
  peripheralsConfig?: PeripheralsConfig;
}
