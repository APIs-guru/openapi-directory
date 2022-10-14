package shared

type DataSourceDataQualityStandardEnum string

const (
	DataSourceDataQualityStandardEnumDataQualityUnknown                  DataSourceDataQualityStandardEnum = "dataQualityUnknown"
	DataSourceDataQualityStandardEnumDataQualityBloodPressureEsh2002     DataSourceDataQualityStandardEnum = "dataQualityBloodPressureEsh2002"
	DataSourceDataQualityStandardEnumDataQualityBloodPressureEsh2010     DataSourceDataQualityStandardEnum = "dataQualityBloodPressureEsh2010"
	DataSourceDataQualityStandardEnumDataQualityBloodPressureAami        DataSourceDataQualityStandardEnum = "dataQualityBloodPressureAami"
	DataSourceDataQualityStandardEnumDataQualityBloodPressureBhsAa       DataSourceDataQualityStandardEnum = "dataQualityBloodPressureBhsAA"
	DataSourceDataQualityStandardEnumDataQualityBloodPressureBhsAb       DataSourceDataQualityStandardEnum = "dataQualityBloodPressureBhsAB"
	DataSourceDataQualityStandardEnumDataQualityBloodPressureBhsBa       DataSourceDataQualityStandardEnum = "dataQualityBloodPressureBhsBA"
	DataSourceDataQualityStandardEnumDataQualityBloodPressureBhsBb       DataSourceDataQualityStandardEnum = "dataQualityBloodPressureBhsBB"
	DataSourceDataQualityStandardEnumDataQualityBloodGlucoseIso151972003 DataSourceDataQualityStandardEnum = "dataQualityBloodGlucoseIso151972003"
	DataSourceDataQualityStandardEnumDataQualityBloodGlucoseIso151972013 DataSourceDataQualityStandardEnum = "dataQualityBloodGlucoseIso151972013"
)

type DataSourceTypeEnum string

const (
	DataSourceTypeEnumRaw     DataSourceTypeEnum = "raw"
	DataSourceTypeEnumDerived DataSourceTypeEnum = "derived"
)

type DataSource struct {
	Application         *Application                        `json:"application,omitempty"`
	DataQualityStandard []DataSourceDataQualityStandardEnum `json:"dataQualityStandard,omitempty"`
	DataStreamID        *string                             `json:"dataStreamId,omitempty"`
	DataStreamName      *string                             `json:"dataStreamName,omitempty"`
	DataType            *DataType                           `json:"dataType,omitempty"`
	Device              *Device                             `json:"device,omitempty"`
	Name                *string                             `json:"name,omitempty"`
	Type                *DataSourceTypeEnum                 `json:"type,omitempty"`
}
