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

// DataSource
// Definition of a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point inserted into or read from this service has an associated data source. The data source contains enough information to uniquely identify its data, including the hardware device and the application that collected and/or transformed the data. It also holds useful metadata, such as the hardware and application versions, and the device type. Each data source produces a unique stream of data, with a unique identifier. Not all changes to data source affect the stream identifier, so that data collected by updated versions of the same application/device can still be considered to belong to the same data stream.
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
