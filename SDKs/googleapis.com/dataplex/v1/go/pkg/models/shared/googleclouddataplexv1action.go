package shared




type GoogleCloudDataplexV1ActionCategoryEnum string

const (
    GoogleCloudDataplexV1ActionCategoryEnumCategoryUnspecified GoogleCloudDataplexV1ActionCategoryEnum = "CATEGORY_UNSPECIFIED"
GoogleCloudDataplexV1ActionCategoryEnumResourceManagement GoogleCloudDataplexV1ActionCategoryEnum = "RESOURCE_MANAGEMENT"
GoogleCloudDataplexV1ActionCategoryEnumSecurityPolicy GoogleCloudDataplexV1ActionCategoryEnum = "SECURITY_POLICY"
GoogleCloudDataplexV1ActionCategoryEnumDataDiscovery GoogleCloudDataplexV1ActionCategoryEnum = "DATA_DISCOVERY"
)


type GoogleCloudDataplexV1Action struct {
    Asset *string `json:"asset,omitempty"`
    Category *GoogleCloudDataplexV1ActionCategoryEnum `json:"category,omitempty"`
    DataLocations []string `json:"dataLocations,omitempty"`
    DetectTime *string `json:"detectTime,omitempty"`
    FailedSecurityPolicyApply *GoogleCloudDataplexV1ActionFailedSecurityPolicyApply `json:"failedSecurityPolicyApply,omitempty"`
    IncompatibleDataSchema *GoogleCloudDataplexV1ActionIncompatibleDataSchema `json:"incompatibleDataSchema,omitempty"`
    InvalidDataFormat *GoogleCloudDataplexV1ActionInvalidDataFormat `json:"invalidDataFormat,omitempty"`
    InvalidDataOrganization map[string]interface{} `json:"invalidDataOrganization,omitempty"`
    InvalidDataPartition *GoogleCloudDataplexV1ActionInvalidDataPartition `json:"invalidDataPartition,omitempty"`
    Issue *string `json:"issue,omitempty"`
    Lake *string `json:"lake,omitempty"`
    MissingData map[string]interface{} `json:"missingData,omitempty"`
    MissingResource map[string]interface{} `json:"missingResource,omitempty"`
    Name *string `json:"name,omitempty"`
    UnauthorizedResource map[string]interface{} `json:"unauthorizedResource,omitempty"`
    Zone *string `json:"zone,omitempty"`
    
}

