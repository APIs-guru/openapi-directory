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
