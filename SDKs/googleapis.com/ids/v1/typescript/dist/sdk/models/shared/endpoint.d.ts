import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum EndpointSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Informational = "INFORMATIONAL",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}
export declare enum EndpointStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * Endpoint describes a single IDS endpoint. It defines a forwarding rule to which packets can be sent for IDS inspection.
**/
export declare class Endpoint extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    endpointForwardingRule?: string;
    endpointIp?: string;
    labels?: Map<string, string>;
    name?: string;
    network?: string;
    severity?: EndpointSeverityEnum;
    state?: EndpointStateEnum;
    trafficLogs?: boolean;
    updateTime?: string;
}
