package shared




type DataExporterConfigTypEnum string

const (
    DataExporterConfigTypEnumKafka DataExporterConfigTypEnum = "kafka"
DataExporterConfigTypEnumPulsar DataExporterConfigTypEnum = "pulsar"
DataExporterConfigTypEnumFile DataExporterConfigTypEnum = "file"
DataExporterConfigTypEnumMailer DataExporterConfigTypEnum = "mailer"
DataExporterConfigTypEnumElastic DataExporterConfigTypEnum = "elastic"
DataExporterConfigTypEnumConsole DataExporterConfigTypEnum = "console"
DataExporterConfigTypEnumCustom DataExporterConfigTypEnum = "custom"
)


type DataExporterConfig struct {
    BufferSize *int32 `json:"bufferSize,omitempty"`
    Config *interface{} `json:"config,omitempty"`
    Desc *string `json:"desc,omitempty"`
    Enabled *string `json:"enabled,omitempty"`
    Filtering *Filtering `json:"filtering,omitempty"`
    GroupDuration *int64 `json:"groupDuration,omitempty"`
    GroupSize *int32 `json:"groupSize,omitempty"`
    ID *string `json:"id,omitempty"`
    JSONWorkers *int32 `json:"jsonWorkers,omitempty"`
    Location *Location `json:"location,omitempty"`
    Metadata map[string]string `json:"metadata,omitempty"`
    Name *string `json:"name,omitempty"`
    Projection map[string]string `json:"projection,omitempty"`
    SendWorkers *int32 `json:"sendWorkers,omitempty"`
    Typ *DataExporterConfigTypEnum `json:"typ,omitempty"`
    
}

