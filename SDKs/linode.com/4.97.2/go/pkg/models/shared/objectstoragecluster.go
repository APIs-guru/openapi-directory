package shared

type ObjectStorageClusterStatusEnum string

const (
	ObjectStorageClusterStatusEnumAvailable   ObjectStorageClusterStatusEnum = "available"
	ObjectStorageClusterStatusEnumUnavailable ObjectStorageClusterStatusEnum = "unavailable"
)

type ObjectStorageCluster struct {
	Domain           *string                         `json:"domain"`
	ID               *string                         `json:"id"`
	Region           *string                         `json:"region"`
	StaticSiteDomain *string                         `json:"static_site_domain"`
	Status           *ObjectStorageClusterStatusEnum `json:"status"`
}
