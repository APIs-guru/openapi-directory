import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1StorageFormatCsvOptions } from "./googleclouddataplexv1storageformatcsvoptions";
import { GoogleCloudDataplexV1StorageFormatJsonOptions } from "./googleclouddataplexv1storageformatjsonoptions";

export enum GoogleCloudDataplexV1StorageFormatCompressionFormatEnum {
    CompressionFormatUnspecified = "COMPRESSION_FORMAT_UNSPECIFIED"
,    Gzip = "GZIP"
,    Bzip2 = "BZIP2"
}

export enum GoogleCloudDataplexV1StorageFormatFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED"
,    Parquet = "PARQUET"
,    Avro = "AVRO"
,    Orc = "ORC"
,    Csv = "CSV"
,    Json = "JSON"
,    Image = "IMAGE"
,    Audio = "AUDIO"
,    Video = "VIDEO"
,    Text = "TEXT"
,    Tfrecord = "TFRECORD"
,    Other = "OTHER"
,    Unknown = "UNKNOWN"
}


// GoogleCloudDataplexV1StorageFormat
/** 
 * Describes the format of the data within its storage location.
**/
export class GoogleCloudDataplexV1StorageFormat extends SpeakeasyBase {
  @Metadata({ data: "json, name=compressionFormat" })
  compressionFormat?: GoogleCloudDataplexV1StorageFormatCompressionFormatEnum;

  @Metadata({ data: "json, name=csv" })
  csv?: GoogleCloudDataplexV1StorageFormatCsvOptions;

  @Metadata({ data: "json, name=format" })
  format?: GoogleCloudDataplexV1StorageFormatFormatEnum;

  @Metadata({ data: "json, name=json" })
  json?: GoogleCloudDataplexV1StorageFormatJsonOptions;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
