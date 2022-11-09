import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EndpointSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Informational = "INFORMATIONAL"
,    Low = "LOW"
,    Medium = "MEDIUM"
,    High = "HIGH"
,    Critical = "CRITICAL"
}

export enum EndpointStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
}


// Endpoint
/** 
 * Endpoint describes a single IDS endpoint. It defines a forwarding rule to which packets can be sent for IDS inspection.
**/
export class Endpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=endpointForwardingRule" })
  endpointForwardingRule?: string;

  @Metadata({ data: "json, name=endpointIp" })
  endpointIp?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: EndpointSeverityEnum;

  @Metadata({ data: "json, name=state" })
  state?: EndpointStateEnum;

  @Metadata({ data: "json, name=trafficLogs" })
  trafficLogs?: boolean;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
