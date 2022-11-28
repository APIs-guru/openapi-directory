import { SpeakeasyBase } from "../../../internal/utils";
import { DataRange } from "./datarange";
export declare enum QueryMetadataFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    Csv = "CSV",
    Xlsx = "XLSX"
}
/**
 * Query metadata.
**/
export declare class QueryMetadata extends SpeakeasyBase {
    dataRange?: DataRange;
    format?: QueryMetadataFormatEnum;
    sendNotification?: boolean;
    shareEmailAddress?: string[];
    title?: string;
}
