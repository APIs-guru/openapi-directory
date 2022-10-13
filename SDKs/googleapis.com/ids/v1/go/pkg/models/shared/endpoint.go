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
	CreateTime             *string               `json:"createTime"`
	Description            *string               `json:"description"`
	EndpointForwardingRule *string               `json:"endpointForwardingRule"`
	EndpointIP             *string               `json:"endpointIp"`
	Labels                 map[string]string     `json:"labels"`
	Name                   *string               `json:"name"`
	Network                *string               `json:"network"`
	Severity               *EndpointSeverityEnum `json:"severity"`
	State                  *EndpointStateEnum    `json:"state"`
	TrafficLogs            *bool                 `json:"trafficLogs"`
	UpdateTime             *string               `json:"updateTime"`
}
