import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudMlV1PredictionInputDataFormatEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED"
,    Json = "JSON"
,    Text = "TEXT"
,    TfRecord = "TF_RECORD"
,    TfRecordGzip = "TF_RECORD_GZIP"
,    Csv = "CSV"
}

export enum GoogleCloudMlV1PredictionInputOutputDataFormatEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED"
,    Json = "JSON"
,    Text = "TEXT"
,    TfRecord = "TF_RECORD"
,    TfRecordGzip = "TF_RECORD_GZIP"
,    Csv = "CSV"
}


// GoogleCloudMlV1PredictionInput
/** 
 * Represents input parameters for a prediction job.
**/
export class GoogleCloudMlV1PredictionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchSize" })
  batchSize?: string;

  @Metadata({ data: "json, name=dataFormat" })
  dataFormat?: GoogleCloudMlV1PredictionInputDataFormatEnum;

  @Metadata({ data: "json, name=inputPaths" })
  inputPaths?: string[];

  @Metadata({ data: "json, name=maxWorkerCount" })
  maxWorkerCount?: string;

  @Metadata({ data: "json, name=modelName" })
  modelName?: string;

  @Metadata({ data: "json, name=outputDataFormat" })
  outputDataFormat?: GoogleCloudMlV1PredictionInputOutputDataFormatEnum;

  @Metadata({ data: "json, name=outputPath" })
  outputPath?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=runtimeVersion" })
  runtimeVersion?: string;

  @Metadata({ data: "json, name=signatureName" })
  signatureName?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=versionName" })
  versionName?: string;
}
