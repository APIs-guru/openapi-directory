package shared

type ResourceTypeEnum string

const (
	ResourceTypeEnumTypeUnspecified               ResourceTypeEnum = "TYPE_UNSPECIFIED"
	ResourceTypeEnumGcpProject                    ResourceTypeEnum = "GCP_PROJECT"
	ResourceTypeEnumGcpResource                   ResourceTypeEnum = "GCP_RESOURCE"
	ResourceTypeEnumGcpSecretmanagerSecret        ResourceTypeEnum = "GCP_SECRETMANAGER_SECRET"
	ResourceTypeEnumGcpSecretmanagerSecretVersion ResourceTypeEnum = "GCP_SECRETMANAGER_SECRET_VERSION"
)

type Resource struct {
	PathTemplate *string           `json:"pathTemplate"`
	Type         *ResourceTypeEnum `json:"type"`
}
