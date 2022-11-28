import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionConfig } from "./executionconfig";
import { PeripheralsConfig } from "./peripheralsconfig";



// EnvironmentConfig
/** 
 * Environment configuration for a workload.
**/
export class EnvironmentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionConfig" })
  executionConfig?: ExecutionConfig;

  @SpeakeasyMetadata({ data: "json, name=peripheralsConfig" })
  peripheralsConfig?: PeripheralsConfig;
}
