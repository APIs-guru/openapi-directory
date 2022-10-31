package shared




type GoogleCloudMlV1PredictionInputDataFormatEnum string

const (
    GoogleCloudMlV1PredictionInputDataFormatEnumDataFormatUnspecified GoogleCloudMlV1PredictionInputDataFormatEnum = "DATA_FORMAT_UNSPECIFIED"
GoogleCloudMlV1PredictionInputDataFormatEnumJSON GoogleCloudMlV1PredictionInputDataFormatEnum = "JSON"
GoogleCloudMlV1PredictionInputDataFormatEnumText GoogleCloudMlV1PredictionInputDataFormatEnum = "TEXT"
GoogleCloudMlV1PredictionInputDataFormatEnumTfRecord GoogleCloudMlV1PredictionInputDataFormatEnum = "TF_RECORD"
GoogleCloudMlV1PredictionInputDataFormatEnumTfRecordGzip GoogleCloudMlV1PredictionInputDataFormatEnum = "TF_RECORD_GZIP"
GoogleCloudMlV1PredictionInputDataFormatEnumCsv GoogleCloudMlV1PredictionInputDataFormatEnum = "CSV"
)



type GoogleCloudMlV1PredictionInputOutputDataFormatEnum string

const (
    GoogleCloudMlV1PredictionInputOutputDataFormatEnumDataFormatUnspecified GoogleCloudMlV1PredictionInputOutputDataFormatEnum = "DATA_FORMAT_UNSPECIFIED"
GoogleCloudMlV1PredictionInputOutputDataFormatEnumJSON GoogleCloudMlV1PredictionInputOutputDataFormatEnum = "JSON"
GoogleCloudMlV1PredictionInputOutputDataFormatEnumText GoogleCloudMlV1PredictionInputOutputDataFormatEnum = "TEXT"
GoogleCloudMlV1PredictionInputOutputDataFormatEnumTfRecord GoogleCloudMlV1PredictionInputOutputDataFormatEnum = "TF_RECORD"
GoogleCloudMlV1PredictionInputOutputDataFormatEnumTfRecordGzip GoogleCloudMlV1PredictionInputOutputDataFormatEnum = "TF_RECORD_GZIP"
GoogleCloudMlV1PredictionInputOutputDataFormatEnumCsv GoogleCloudMlV1PredictionInputOutputDataFormatEnum = "CSV"
)


type GoogleCloudMlV1PredictionInput struct {
    BatchSize *string `json:"batchSize,omitempty"`
    DataFormat *GoogleCloudMlV1PredictionInputDataFormatEnum `json:"dataFormat,omitempty"`
    InputPaths []string `json:"inputPaths,omitempty"`
    MaxWorkerCount *string `json:"maxWorkerCount,omitempty"`
    ModelName *string `json:"modelName,omitempty"`
    OutputDataFormat *GoogleCloudMlV1PredictionInputOutputDataFormatEnum `json:"outputDataFormat,omitempty"`
    OutputPath *string `json:"outputPath,omitempty"`
    Region *string `json:"region,omitempty"`
    RuntimeVersion *string `json:"runtimeVersion,omitempty"`
    SignatureName *string `json:"signatureName,omitempty"`
    URI *string `json:"uri,omitempty"`
    VersionName *string `json:"versionName,omitempty"`
    
}

