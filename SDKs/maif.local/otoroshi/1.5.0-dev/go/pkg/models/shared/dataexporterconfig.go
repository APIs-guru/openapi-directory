package shared

type DataExporterConfigTypEnum string

const (
	DataExporterConfigTypEnumKafka   DataExporterConfigTypEnum = "kafka"
	DataExporterConfigTypEnumPulsar  DataExporterConfigTypEnum = "pulsar"
	DataExporterConfigTypEnumFile    DataExporterConfigTypEnum = "file"
	DataExporterConfigTypEnumMailer  DataExporterConfigTypEnum = "mailer"
	DataExporterConfigTypEnumElastic DataExporterConfigTypEnum = "elastic"
	DataExporterConfigTypEnumConsole DataExporterConfigTypEnum = "console"
	DataExporterConfigTypEnumCustom  DataExporterConfigTypEnum = "custom"
)

type DataExporterConfig struct {
	BufferSize    *int32                     `json:"bufferSize"`
	Config        *interface{}               `json:"config"`
	Desc          *string                    `json:"desc"`
	Enabled       *string                    `json:"enabled"`
	Filtering     *Filtering                 `json:"filtering"`
	GroupDuration *int64                     `json:"groupDuration"`
	GroupSize     *int32                     `json:"groupSize"`
	ID            *string                    `json:"id"`
	JSONWorkers   *int32                     `json:"jsonWorkers"`
	Location      *Location                  `json:"location"`
	Metadata      map[string]string          `json:"metadata"`
	Name          *string                    `json:"name"`
	Projection    map[string]string          `json:"projection"`
	SendWorkers   *int32                     `json:"sendWorkers"`
	Typ           *DataExporterConfigTypEnum `json:"typ"`
}
