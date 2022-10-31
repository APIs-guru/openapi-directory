package shared

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
