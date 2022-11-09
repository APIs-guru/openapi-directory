import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetInstanceHealthResponseHealthStateEnum {
    HealthStateUnspecified = "HEALTH_STATE_UNSPECIFIED"
,    Healthy = "HEALTHY"
,    Unhealthy = "UNHEALTHY"
,    AgentNotInstalled = "AGENT_NOT_INSTALLED"
,    AgentNotRunning = "AGENT_NOT_RUNNING"
}


// GetInstanceHealthResponse
/** 
 * Response for checking if a notebook instance is healthy.
**/
export class GetInstanceHealthResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=healthInfo" })
  healthInfo?: Map<string, string>;

  @Metadata({ data: "json, name=healthState" })
  healthState?: GetInstanceHealthResponseHealthStateEnum;
}
