import { SpeakeasyBase } from "../../../internal/utils";
export declare class HealthCheck extends SpeakeasyBase {
    checkIntervalSec?: number;
    description?: string;
    healthyThreshold?: number;
    host?: string;
    name?: string;
    path?: string;
    port?: number;
    timeoutSec?: number;
    unhealthyThreshold?: number;
}
