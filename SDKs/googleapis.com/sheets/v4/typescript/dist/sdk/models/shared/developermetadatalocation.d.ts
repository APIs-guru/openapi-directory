import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionRange } from "./dimensionrange";
export declare enum DeveloperMetadataLocationLocationTypeEnum {
    DeveloperMetadataLocationTypeUnspecified = "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED",
    Row = "ROW",
    Column = "COLUMN",
    Sheet = "SHEET",
    Spreadsheet = "SPREADSHEET"
}
/**
 * A location where metadata may be associated in a spreadsheet.
**/
export declare class DeveloperMetadataLocation extends SpeakeasyBase {
    dimensionRange?: DimensionRange;
    locationType?: DeveloperMetadataLocationLocationTypeEnum;
    sheetId?: number;
    spreadsheet?: boolean;
}
