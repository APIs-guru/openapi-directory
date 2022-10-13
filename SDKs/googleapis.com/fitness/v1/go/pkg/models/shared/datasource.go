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
	Application         *Application                        `json:"application"`
	DataQualityStandard []DataSourceDataQualityStandardEnum `json:"dataQualityStandard"`
	DataStreamID        *string                             `json:"dataStreamId"`
	DataStreamName      *string                             `json:"dataStreamName"`
	DataType            *DataType                           `json:"dataType"`
	Device              *Device                             `json:"device"`
	Name                *string                             `json:"name"`
	Type                *DataSourceTypeEnum                 `json:"type"`
}
