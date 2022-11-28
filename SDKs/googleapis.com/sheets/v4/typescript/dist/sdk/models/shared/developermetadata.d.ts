import { SpeakeasyBase } from "../../../internal/utils";
import { DeveloperMetadataLocation } from "./developermetadatalocation";
export declare enum DeveloperMetadataVisibilityEnum {
    DeveloperMetadataVisibilityUnspecified = "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED",
    Document = "DOCUMENT",
    Project = "PROJECT"
}
/**
 * Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too.
**/
export declare class DeveloperMetadata extends SpeakeasyBase {
    location?: DeveloperMetadataLocation;
    metadataId?: number;
    metadataKey?: string;
    metadataValue?: string;
    visibility?: DeveloperMetadataVisibilityEnum;
}
