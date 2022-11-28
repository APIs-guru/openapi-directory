import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { HealthCheck } from "./healthcheck";
import { VmParams } from "./vmparams";
/**
 * The template used for creating replicas in the pool.
**/
export declare class Template extends SpeakeasyBase {
    action?: Action;
    healthChecks?: HealthCheck[];
    version?: string;
    vmParams?: VmParams;
}
