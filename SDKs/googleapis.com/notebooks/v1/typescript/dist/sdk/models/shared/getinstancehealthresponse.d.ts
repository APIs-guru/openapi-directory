import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetInstanceHealthResponseHealthStateEnum {
    HealthStateUnspecified = "HEALTH_STATE_UNSPECIFIED",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    AgentNotInstalled = "AGENT_NOT_INSTALLED",
    AgentNotRunning = "AGENT_NOT_RUNNING"
}
/**
 * Response for checking if a notebook instance is healthy.
**/
export declare class GetInstanceHealthResponse extends SpeakeasyBase {
    healthInfo?: Map<string, string>;
    healthState?: GetInstanceHealthResponseHealthStateEnum;
}
