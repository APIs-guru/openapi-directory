package shared

type EndpointSeverityEnum string

const (
	EndpointSeverityEnumSeverityUnspecified EndpointSeverityEnum = "SEVERITY_UNSPECIFIED"
	EndpointSeverityEnumInformational       EndpointSeverityEnum = "INFORMATIONAL"
	EndpointSeverityEnumLow                 EndpointSeverityEnum = "LOW"
	EndpointSeverityEnumMedium              EndpointSeverityEnum = "MEDIUM"
	EndpointSeverityEnumHigh                EndpointSeverityEnum = "HIGH"
	EndpointSeverityEnumCritical            EndpointSeverityEnum = "CRITICAL"
)

type EndpointStateEnum string

const (
	EndpointStateEnumStateUnspecified EndpointStateEnum = "STATE_UNSPECIFIED"
	EndpointStateEnumCreating         EndpointStateEnum = "CREATING"
	EndpointStateEnumReady            EndpointStateEnum = "READY"
	EndpointStateEnumDeleting         EndpointStateEnum = "DELETING"
	EndpointStateEnumUpdating         EndpointStateEnum = "UPDATING"
)

// Endpoint
// Endpoint describes a single IDS endpoint. It defines a forwarding rule to which packets can be sent for IDS inspection.
type Endpoint struct {
	CreateTime             *string               `json:"createTime,omitempty"`
	Description            *string               `json:"description,omitempty"`
	EndpointForwardingRule *string               `json:"endpointForwardingRule,omitempty"`
	EndpointIP             *string               `json:"endpointIp,omitempty"`
	Labels                 map[string]string     `json:"labels,omitempty"`
	Name                   *string               `json:"name,omitempty"`
	Network                *string               `json:"network,omitempty"`
	Severity               *EndpointSeverityEnum `json:"severity,omitempty"`
	State                  *EndpointStateEnum    `json:"state,omitempty"`
	TrafficLogs            *bool                 `json:"trafficLogs,omitempty"`
	UpdateTime             *string               `json:"updateTime,omitempty"`
}

// EndpointInput
// Endpoint describes a single IDS endpoint. It defines a forwarding rule to which packets can be sent for IDS inspection.
type EndpointInput struct {
	Description *string               `json:"description,omitempty"`
	Labels      map[string]string     `json:"labels,omitempty"`
	Network     *string               `json:"network,omitempty"`
	Severity    *EndpointSeverityEnum `json:"severity,omitempty"`
	TrafficLogs *bool                 `json:"trafficLogs,omitempty"`
}
