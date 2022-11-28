package shared

// Service
// A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
type Service struct {
	AppEngine             *AppEngine             `json:"appEngine,omitempty"`
	BasicService          *BasicService          `json:"basicService,omitempty"`
	CloudEndpoints        *CloudEndpoints        `json:"cloudEndpoints,omitempty"`
	CloudRun              *CloudRun              `json:"cloudRun,omitempty"`
	ClusterIstio          *ClusterIstio          `json:"clusterIstio,omitempty"`
	Custom                map[string]interface{} `json:"custom,omitempty"`
	DisplayName           *string                `json:"displayName,omitempty"`
	GkeNamespace          *GkeNamespace          `json:"gkeNamespace,omitempty"`
	GkeService            *GkeService            `json:"gkeService,omitempty"`
	GkeWorkload           *GkeWorkload           `json:"gkeWorkload,omitempty"`
	IstioCanonicalService *IstioCanonicalService `json:"istioCanonicalService,omitempty"`
	MeshIstio             *MeshIstio             `json:"meshIstio,omitempty"`
	Name                  *string                `json:"name,omitempty"`
	Telemetry             *Telemetry             `json:"telemetry,omitempty"`
	UserLabels            map[string]string      `json:"userLabels,omitempty"`
}

// ServiceInput
// A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
type ServiceInput struct {
	AppEngine             *AppEngine             `json:"appEngine,omitempty"`
	BasicService          *BasicService          `json:"basicService,omitempty"`
	CloudEndpoints        *CloudEndpoints        `json:"cloudEndpoints,omitempty"`
	CloudRun              *CloudRun              `json:"cloudRun,omitempty"`
	ClusterIstio          *ClusterIstio          `json:"clusterIstio,omitempty"`
	Custom                map[string]interface{} `json:"custom,omitempty"`
	DisplayName           *string                `json:"displayName,omitempty"`
	GkeNamespace          *GkeNamespaceInput     `json:"gkeNamespace,omitempty"`
	GkeService            *GkeServiceInput       `json:"gkeService,omitempty"`
	GkeWorkload           *GkeWorkloadInput      `json:"gkeWorkload,omitempty"`
	IstioCanonicalService *IstioCanonicalService `json:"istioCanonicalService,omitempty"`
	MeshIstio             *MeshIstio             `json:"meshIstio,omitempty"`
	Name                  *string                `json:"name,omitempty"`
	Telemetry             *Telemetry             `json:"telemetry,omitempty"`
	UserLabels            map[string]string      `json:"userLabels,omitempty"`
}
