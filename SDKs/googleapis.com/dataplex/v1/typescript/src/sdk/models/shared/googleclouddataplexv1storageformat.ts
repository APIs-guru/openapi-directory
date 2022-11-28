import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1StorageFormatCsvOptions } from "./googleclouddataplexv1storageformatcsvoptions";
import { GoogleCloudDataplexV1StorageFormatJsonOptions } from "./googleclouddataplexv1storageformatjsonoptions";


export enum GoogleCloudDataplexV1StorageFormatCompressionFormatEnum {
    CompressionFormatUnspecified = "COMPRESSION_FORMAT_UNSPECIFIED",
    Gzip = "GZIP",
    Bzip2 = "BZIP2"
}

export enum GoogleCloudDataplexV1StorageFormatFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    Parquet = "PARQUET",
    Avro = "AVRO",
    Orc = "ORC",
    Csv = "CSV",
    Json = "JSON",
    Image = "IMAGE",
    Audio = "AUDIO",
    Video = "VIDEO",
    Text = "TEXT",
    Tfrecord = "TFRECORD",
    Other = "OTHER",
    Unknown = "UNKNOWN"
}


// GoogleCloudDataplexV1StorageFormatInput
/** 
 * Describes the format of the data within its storage location.
**/
export class GoogleCloudDataplexV1StorageFormatInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compressionFormat" })
  compressionFormat?: GoogleCloudDataplexV1StorageFormatCompressionFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=csv" })
  csv?: GoogleCloudDataplexV1StorageFormatCsvOptions;

  @SpeakeasyMetadata({ data: "json, name=json" })
  json?: GoogleCloudDataplexV1StorageFormatJsonOptions;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}


// GoogleCloudDataplexV1StorageFormat
/** 
 * Describes the format of the data within its storage location.
**/
export class GoogleCloudDataplexV1StorageFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compressionFormat" })
  compressionFormat?: GoogleCloudDataplexV1StorageFormatCompressionFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=csv" })
  csv?: GoogleCloudDataplexV1StorageFormatCsvOptions;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: GoogleCloudDataplexV1StorageFormatFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=json" })
  json?: GoogleCloudDataplexV1StorageFormatJsonOptions;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
