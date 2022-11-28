import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudMlV1PredictionInputDataFormatEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED",
    Json = "JSON",
    Text = "TEXT",
    TfRecord = "TF_RECORD",
    TfRecordGzip = "TF_RECORD_GZIP",
    Csv = "CSV"
}

export enum GoogleCloudMlV1PredictionInputOutputDataFormatEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED",
    Json = "JSON",
    Text = "TEXT",
    TfRecord = "TF_RECORD",
    TfRecordGzip = "TF_RECORD_GZIP",
    Csv = "CSV"
}


// GoogleCloudMlV1PredictionInput
/** 
 * Represents input parameters for a prediction job.
**/
export class GoogleCloudMlV1PredictionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchSize" })
  batchSize?: string;

  @SpeakeasyMetadata({ data: "json, name=dataFormat" })
  dataFormat?: GoogleCloudMlV1PredictionInputDataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=inputPaths" })
  inputPaths?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxWorkerCount" })
  maxWorkerCount?: string;

  @SpeakeasyMetadata({ data: "json, name=modelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "json, name=outputDataFormat" })
  outputDataFormat?: GoogleCloudMlV1PredictionInputOutputDataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=outputPath" })
  outputPath?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeVersion" })
  runtimeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=signatureName" })
  signatureName?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=versionName" })
  versionName?: string;
}
