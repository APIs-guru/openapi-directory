import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EndpointSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Informational = "INFORMATIONAL",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}

export enum EndpointStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING"
}


// EndpointInput
/** 
 * Endpoint describes a single IDS endpoint. It defines a forwarding rule to which packets can be sent for IDS inspection.
**/
export class EndpointInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: EndpointSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=trafficLogs" })
  trafficLogs?: boolean;
}


// Endpoint
/** 
 * Endpoint describes a single IDS endpoint. It defines a forwarding rule to which packets can be sent for IDS inspection.
**/
export class Endpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointForwardingRule" })
  endpointForwardingRule?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointIp" })
  endpointIp?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: EndpointSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: EndpointStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trafficLogs" })
  trafficLogs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
