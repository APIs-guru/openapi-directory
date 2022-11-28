import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionConfig } from "./executionconfig";
import { PeripheralsConfig } from "./peripheralsconfig";
/**
 * Environment configuration for a workload.
**/
export declare class EnvironmentConfig extends SpeakeasyBase {
    executionConfig?: ExecutionConfig;
    peripheralsConfig?: PeripheralsConfig;
}
