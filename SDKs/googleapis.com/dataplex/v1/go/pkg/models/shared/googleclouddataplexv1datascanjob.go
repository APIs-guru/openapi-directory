package shared

type GoogleCloudDataplexV1DataScanJobStateEnum string

const (
	GoogleCloudDataplexV1DataScanJobStateEnumStateUnspecified GoogleCloudDataplexV1DataScanJobStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDataplexV1DataScanJobStateEnumRunning          GoogleCloudDataplexV1DataScanJobStateEnum = "RUNNING"
	GoogleCloudDataplexV1DataScanJobStateEnumCanceling        GoogleCloudDataplexV1DataScanJobStateEnum = "CANCELING"
	GoogleCloudDataplexV1DataScanJobStateEnumCancelled        GoogleCloudDataplexV1DataScanJobStateEnum = "CANCELLED"
	GoogleCloudDataplexV1DataScanJobStateEnumSucceeded        GoogleCloudDataplexV1DataScanJobStateEnum = "SUCCEEDED"
	GoogleCloudDataplexV1DataScanJobStateEnumFailed           GoogleCloudDataplexV1DataScanJobStateEnum = "FAILED"
	GoogleCloudDataplexV1DataScanJobStateEnumPending          GoogleCloudDataplexV1DataScanJobStateEnum = "PENDING"
)

type GoogleCloudDataplexV1DataScanJobTypeEnum string

const (
	GoogleCloudDataplexV1DataScanJobTypeEnumDataScanTypeUnspecified GoogleCloudDataplexV1DataScanJobTypeEnum = "DATA_SCAN_TYPE_UNSPECIFIED"
	GoogleCloudDataplexV1DataScanJobTypeEnumDataQuality             GoogleCloudDataplexV1DataScanJobTypeEnum = "DATA_QUALITY"
	GoogleCloudDataplexV1DataScanJobTypeEnumDataProfile             GoogleCloudDataplexV1DataScanJobTypeEnum = "DATA_PROFILE"
)

// GoogleCloudDataplexV1DataScanJob
// A DataScanJob represents an instance of a data scan.
type GoogleCloudDataplexV1DataScanJob struct {
	DataProfileResult *GoogleCloudDataplexV1DataProfileResult    `json:"dataProfileResult,omitempty"`
	DataProfileSpec   map[string]interface{}                     `json:"dataProfileSpec,omitempty"`
	DataQualityResult *GoogleCloudDataplexV1DataQualityResult    `json:"dataQualityResult,omitempty"`
	DataQualitySpec   *GoogleCloudDataplexV1DataQualitySpec      `json:"dataQualitySpec,omitempty"`
	EndTime           *string                                    `json:"endTime,omitempty"`
	Message           *string                                    `json:"message,omitempty"`
	Name              *string                                    `json:"name,omitempty"`
	StartTime         *string                                    `json:"startTime,omitempty"`
	State             *GoogleCloudDataplexV1DataScanJobStateEnum `json:"state,omitempty"`
	Type              *GoogleCloudDataplexV1DataScanJobTypeEnum  `json:"type,omitempty"`
	UID               *string                                    `json:"uid,omitempty"`
}
