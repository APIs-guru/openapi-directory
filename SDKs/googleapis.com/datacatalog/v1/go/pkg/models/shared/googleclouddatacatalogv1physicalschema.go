package shared

type GoogleCloudDatacatalogV1PhysicalSchema struct {
	Avro     *GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema     `json:"avro"`
	Csv      map[string]interface{}                                `json:"csv"`
	Orc      map[string]interface{}                                `json:"orc"`
	Parquet  map[string]interface{}                                `json:"parquet"`
	Protobuf *GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema `json:"protobuf"`
	Thrift   *GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema   `json:"thrift"`
}
