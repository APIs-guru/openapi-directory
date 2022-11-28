import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudMlV1PredictionInputDataFormatEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED",
    Json = "JSON",
    Text = "TEXT",
    TfRecord = "TF_RECORD",
    TfRecordGzip = "TF_RECORD_GZIP",
    Csv = "CSV"
}
export declare enum GoogleCloudMlV1PredictionInputOutputDataFormatEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED",
    Json = "JSON",
    Text = "TEXT",
    TfRecord = "TF_RECORD",
    TfRecordGzip = "TF_RECORD_GZIP",
    Csv = "CSV"
}
/**
 * Represents input parameters for a prediction job.
**/
export declare class GoogleCloudMlV1PredictionInput extends SpeakeasyBase {
    batchSize?: string;
    dataFormat?: GoogleCloudMlV1PredictionInputDataFormatEnum;
    inputPaths?: string[];
    maxWorkerCount?: string;
    modelName?: string;
    outputDataFormat?: GoogleCloudMlV1PredictionInputOutputDataFormatEnum;
    outputPath?: string;
    region?: string;
    runtimeVersion?: string;
    signatureName?: string;
    uri?: string;
    versionName?: string;
}
