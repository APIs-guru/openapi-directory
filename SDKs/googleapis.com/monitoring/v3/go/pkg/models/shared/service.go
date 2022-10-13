package shared

type Service struct {
	AppEngine             *AppEngine             `json:"appEngine"`
	BasicService          *BasicService          `json:"basicService"`
	CloudEndpoints        *CloudEndpoints        `json:"cloudEndpoints"`
	CloudRun              *CloudRun              `json:"cloudRun"`
	ClusterIstio          *ClusterIstio          `json:"clusterIstio"`
	Custom                map[string]interface{} `json:"custom"`
	DisplayName           *string                `json:"displayName"`
	GkeNamespace          *GkeNamespace          `json:"gkeNamespace"`
	GkeService            *GkeService            `json:"gkeService"`
	GkeWorkload           *GkeWorkload           `json:"gkeWorkload"`
	IstioCanonicalService *IstioCanonicalService `json:"istioCanonicalService"`
	MeshIstio             *MeshIstio             `json:"meshIstio"`
	Name                  *string                `json:"name"`
	Telemetry             *Telemetry             `json:"telemetry"`
	UserLabels            map[string]string      `json:"userLabels"`
}
