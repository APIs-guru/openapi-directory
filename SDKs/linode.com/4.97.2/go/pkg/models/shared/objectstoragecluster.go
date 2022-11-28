package shared

type ObjectStorageClusterStatusEnum string

const (
	ObjectStorageClusterStatusEnumAvailable   ObjectStorageClusterStatusEnum = "available"
	ObjectStorageClusterStatusEnumUnavailable ObjectStorageClusterStatusEnum = "unavailable"
)

// ObjectStorageCluster
// An Object Storage Cluster
type ObjectStorageCluster struct {
	Domain           *string                         `json:"domain,omitempty"`
	ID               *string                         `json:"id,omitempty"`
	Region           *string                         `json:"region,omitempty"`
	StaticSiteDomain *string                         `json:"static_site_domain,omitempty"`
	Status           *ObjectStorageClusterStatusEnum `json:"status,omitempty"`
}
