package shared

type GoogleCloudMlV1PredictionInputDataFormatEnum string

const (
	GoogleCloudMlV1PredictionInputDataFormatEnumDataFormatUnspecified GoogleCloudMlV1PredictionInputDataFormatEnum = "DATA_FORMAT_UNSPECIFIED"
	GoogleCloudMlV1PredictionInputDataFormatEnumJSON                  GoogleCloudMlV1PredictionInputDataFormatEnum = "JSON"
	GoogleCloudMlV1PredictionInputDataFormatEnumText                  GoogleCloudMlV1PredictionInputDataFormatEnum = "TEXT"
	GoogleCloudMlV1PredictionInputDataFormatEnumTfRecord              GoogleCloudMlV1PredictionInputDataFormatEnum = "TF_RECORD"
	GoogleCloudMlV1PredictionInputDataFormatEnumTfRecordGzip          GoogleCloudMlV1PredictionInputDataFormatEnum = "TF_RECORD_GZIP"
	GoogleCloudMlV1PredictionInputDataFormatEnumCsv                   GoogleCloudMlV1PredictionInputDataFormatEnum = "CSV"
)

type GoogleCloudMlV1PredictionInputOutputDataFormatEnum string

const (
	GoogleCloudMlV1PredictionInputOutputDataFormatEnumDataFormatUnspecified GoogleCloudMlV1PredictionInputOutputDataFormatEnum = "DATA_FORMAT_UNSPECIFIED"
	GoogleCloudMlV1PredictionInputOutputDataFormatEnumJSON                  GoogleCloudMlV1PredictionInputOutputDataFormatEnum = "JSON"
	GoogleCloudMlV1PredictionInputOutputDataFormatEnumText                  GoogleCloudMlV1PredictionInputOutputDataFormatEnum = "TEXT"
	GoogleCloudMlV1PredictionInputOutputDataFormatEnumTfRecord              GoogleCloudMlV1PredictionInputOutputDataFormatEnum = "TF_RECORD"
	GoogleCloudMlV1PredictionInputOutputDataFormatEnumTfRecordGzip          GoogleCloudMlV1PredictionInputOutputDataFormatEnum = "TF_RECORD_GZIP"
	GoogleCloudMlV1PredictionInputOutputDataFormatEnumCsv                   GoogleCloudMlV1PredictionInputOutputDataFormatEnum = "CSV"
)

type GoogleCloudMlV1PredictionInput struct {
	BatchSize        *string                                             `json:"batchSize"`
	DataFormat       *GoogleCloudMlV1PredictionInputDataFormatEnum       `json:"dataFormat"`
	InputPaths       []string                                            `json:"inputPaths"`
	MaxWorkerCount   *string                                             `json:"maxWorkerCount"`
	ModelName        *string                                             `json:"modelName"`
	OutputDataFormat *GoogleCloudMlV1PredictionInputOutputDataFormatEnum `json:"outputDataFormat"`
	OutputPath       *string                                             `json:"outputPath"`
	Region           *string                                             `json:"region"`
	RuntimeVersion   *string                                             `json:"runtimeVersion"`
	SignatureName    *string                                             `json:"signatureName"`
	URI              *string                                             `json:"uri"`
	VersionName      *string                                             `json:"versionName"`
}
