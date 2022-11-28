import { SpeakeasyBase } from "../../../internal/utils";
import { JsonFileFormat } from "./jsonfileformat";
export declare enum GcsDestinationConfigGcsFileFormatEnum {
    GcsFileFormatUnspecified = "GCS_FILE_FORMAT_UNSPECIFIED",
    Avro = "AVRO"
}
/**
 * Google Cloud Storage destination configuration
**/
export declare class GcsDestinationConfig extends SpeakeasyBase {
    avroFileFormat?: Map<string, any>;
    fileRotationInterval?: string;
    fileRotationMb?: number;
    gcsFileFormat?: GcsDestinationConfigGcsFileFormatEnum;
    jsonFileFormat?: JsonFileFormat;
    path?: string;
}
