package shared



type GoogleCloudDatacatalogV1PhysicalSchema struct {
    Avro *GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema `json:"avro,omitempty"`
    Csv map[string]interface{} `json:"csv,omitempty"`
    Orc map[string]interface{} `json:"orc,omitempty"`
    Parquet map[string]interface{} `json:"parquet,omitempty"`
    Protobuf *GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema `json:"protobuf,omitempty"`
    Thrift *GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema `json:"thrift,omitempty"`
    
}

