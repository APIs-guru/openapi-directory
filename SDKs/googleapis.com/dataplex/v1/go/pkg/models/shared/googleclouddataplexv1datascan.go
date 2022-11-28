package shared

type GoogleCloudDataplexV1DataScanStateEnum string

const (
	GoogleCloudDataplexV1DataScanStateEnumStateUnspecified GoogleCloudDataplexV1DataScanStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDataplexV1DataScanStateEnumActive           GoogleCloudDataplexV1DataScanStateEnum = "ACTIVE"
	GoogleCloudDataplexV1DataScanStateEnumCreating         GoogleCloudDataplexV1DataScanStateEnum = "CREATING"
	GoogleCloudDataplexV1DataScanStateEnumDeleting         GoogleCloudDataplexV1DataScanStateEnum = "DELETING"
	GoogleCloudDataplexV1DataScanStateEnumActionRequired   GoogleCloudDataplexV1DataScanStateEnum = "ACTION_REQUIRED"
)

type GoogleCloudDataplexV1DataScanTypeEnum string

const (
	GoogleCloudDataplexV1DataScanTypeEnumDataScanTypeUnspecified GoogleCloudDataplexV1DataScanTypeEnum = "DATA_SCAN_TYPE_UNSPECIFIED"
	GoogleCloudDataplexV1DataScanTypeEnumDataQuality             GoogleCloudDataplexV1DataScanTypeEnum = "DATA_QUALITY"
	GoogleCloudDataplexV1DataScanTypeEnumDataProfile             GoogleCloudDataplexV1DataScanTypeEnum = "DATA_PROFILE"
)

// GoogleCloudDataplexV1DataScanInput
// Represents a user-visible job which provides the insights for the related data source. For examples: - Data Quality: generates queries based on the rules and run against the data to get data quality check results. - Data Profile: analyzes the data in table(s) and generates insights about the structure, content and relationships (such as null percent, cardinality, min/max/mean, etc).
type GoogleCloudDataplexV1DataScanInput struct {
	Data              *GoogleCloudDataplexV1DataSource            `json:"data,omitempty"`
	DataProfileResult *GoogleCloudDataplexV1DataProfileResult     `json:"dataProfileResult,omitempty"`
	DataProfileSpec   map[string]interface{}                      `json:"dataProfileSpec,omitempty"`
	DataQualityResult *GoogleCloudDataplexV1DataQualityResult     `json:"dataQualityResult,omitempty"`
	DataQualitySpec   *GoogleCloudDataplexV1DataQualitySpec       `json:"dataQualitySpec,omitempty"`
	Description       *string                                     `json:"description,omitempty"`
	DisplayName       *string                                     `json:"displayName,omitempty"`
	ExecutionSpec     *GoogleCloudDataplexV1DataScanExecutionSpec `json:"executionSpec,omitempty"`
	Labels            map[string]string                           `json:"labels,omitempty"`
}

// GoogleCloudDataplexV1DataScan
// Represents a user-visible job which provides the insights for the related data source. For examples: - Data Quality: generates queries based on the rules and run against the data to get data quality check results. - Data Profile: analyzes the data in table(s) and generates insights about the structure, content and relationships (such as null percent, cardinality, min/max/mean, etc).
type GoogleCloudDataplexV1DataScan struct {
	CreateTime        *string                                     `json:"createTime,omitempty"`
	Data              *GoogleCloudDataplexV1DataSource            `json:"data,omitempty"`
	DataProfileResult *GoogleCloudDataplexV1DataProfileResult     `json:"dataProfileResult,omitempty"`
	DataProfileSpec   map[string]interface{}                      `json:"dataProfileSpec,omitempty"`
	DataQualityResult *GoogleCloudDataplexV1DataQualityResult     `json:"dataQualityResult,omitempty"`
	DataQualitySpec   *GoogleCloudDataplexV1DataQualitySpec       `json:"dataQualitySpec,omitempty"`
	Description       *string                                     `json:"description,omitempty"`
	DisplayName       *string                                     `json:"displayName,omitempty"`
	ExecutionSpec     *GoogleCloudDataplexV1DataScanExecutionSpec `json:"executionSpec,omitempty"`
	Labels            map[string]string                           `json:"labels,omitempty"`
	Name              *string                                     `json:"name,omitempty"`
	State             *GoogleCloudDataplexV1DataScanStateEnum     `json:"state,omitempty"`
	Type              *GoogleCloudDataplexV1DataScanTypeEnum      `json:"type,omitempty"`
	UID               *string                                     `json:"uid,omitempty"`
	UpdateTime        *string                                     `json:"updateTime,omitempty"`
}
