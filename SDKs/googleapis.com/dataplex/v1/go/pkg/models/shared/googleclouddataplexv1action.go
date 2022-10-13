package shared

type GoogleCloudDataplexV1ActionCategoryEnum string

const (
	GoogleCloudDataplexV1ActionCategoryEnumCategoryUnspecified GoogleCloudDataplexV1ActionCategoryEnum = "CATEGORY_UNSPECIFIED"
	GoogleCloudDataplexV1ActionCategoryEnumResourceManagement  GoogleCloudDataplexV1ActionCategoryEnum = "RESOURCE_MANAGEMENT"
	GoogleCloudDataplexV1ActionCategoryEnumSecurityPolicy      GoogleCloudDataplexV1ActionCategoryEnum = "SECURITY_POLICY"
	GoogleCloudDataplexV1ActionCategoryEnumDataDiscovery       GoogleCloudDataplexV1ActionCategoryEnum = "DATA_DISCOVERY"
)

type GoogleCloudDataplexV1Action struct {
	Asset                     *string                                               `json:"asset"`
	Category                  *GoogleCloudDataplexV1ActionCategoryEnum              `json:"category"`
	DataLocations             []string                                              `json:"dataLocations"`
	DetectTime                *string                                               `json:"detectTime"`
	FailedSecurityPolicyApply *GoogleCloudDataplexV1ActionFailedSecurityPolicyApply `json:"failedSecurityPolicyApply"`
	IncompatibleDataSchema    *GoogleCloudDataplexV1ActionIncompatibleDataSchema    `json:"incompatibleDataSchema"`
	InvalidDataFormat         *GoogleCloudDataplexV1ActionInvalidDataFormat         `json:"invalidDataFormat"`
	InvalidDataOrganization   map[string]interface{}                                `json:"invalidDataOrganization"`
	InvalidDataPartition      *GoogleCloudDataplexV1ActionInvalidDataPartition      `json:"invalidDataPartition"`
	Issue                     *string                                               `json:"issue"`
	Lake                      *string                                               `json:"lake"`
	MissingData               map[string]interface{}                                `json:"missingData"`
	MissingResource           map[string]interface{}                                `json:"missingResource"`
	Name                      *string                                               `json:"name"`
	UnauthorizedResource      map[string]interface{}                                `json:"unauthorizedResource"`
	Zone                      *string                                               `json:"zone"`
}
