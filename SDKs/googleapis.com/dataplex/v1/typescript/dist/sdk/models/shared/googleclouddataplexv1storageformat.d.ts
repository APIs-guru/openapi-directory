import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1StorageFormatCsvOptions } from "./googleclouddataplexv1storageformatcsvoptions";
import { GoogleCloudDataplexV1StorageFormatJsonOptions } from "./googleclouddataplexv1storageformatjsonoptions";
export declare enum GoogleCloudDataplexV1StorageFormatCompressionFormatEnum {
    CompressionFormatUnspecified = "COMPRESSION_FORMAT_UNSPECIFIED",
    Gzip = "GZIP",
    Bzip2 = "BZIP2"
}
export declare enum GoogleCloudDataplexV1StorageFormatFormatEnum {
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
/**
 * Describes the format of the data within its storage location.
**/
export declare class GoogleCloudDataplexV1StorageFormatInput extends SpeakeasyBase {
    compressionFormat?: GoogleCloudDataplexV1StorageFormatCompressionFormatEnum;
    csv?: GoogleCloudDataplexV1StorageFormatCsvOptions;
    json?: GoogleCloudDataplexV1StorageFormatJsonOptions;
    mimeType?: string;
}
/**
 * Describes the format of the data within its storage location.
**/
export declare class GoogleCloudDataplexV1StorageFormat extends SpeakeasyBase {
    compressionFormat?: GoogleCloudDataplexV1StorageFormatCompressionFormatEnum;
    csv?: GoogleCloudDataplexV1StorageFormatCsvOptions;
    format?: GoogleCloudDataplexV1StorageFormatFormatEnum;
    json?: GoogleCloudDataplexV1StorageFormatJsonOptions;
    mimeType?: string;
}
