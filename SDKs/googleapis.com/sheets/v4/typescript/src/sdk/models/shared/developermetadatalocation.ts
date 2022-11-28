import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionRange } from "./dimensionrange";


export enum DeveloperMetadataLocationLocationTypeEnum {
    DeveloperMetadataLocationTypeUnspecified = "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED",
    Row = "ROW",
    Column = "COLUMN",
    Sheet = "SHEET",
    Spreadsheet = "SPREADSHEET"
}


// DeveloperMetadataLocation
/** 
 * A location where metadata may be associated in a spreadsheet.
**/
export class DeveloperMetadataLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionRange" })
  dimensionRange?: DimensionRange;

  @SpeakeasyMetadata({ data: "json, name=locationType" })
  locationType?: DeveloperMetadataLocationLocationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sheetId" })
  sheetId?: number;

  @SpeakeasyMetadata({ data: "json, name=spreadsheet" })
  spreadsheet?: boolean;
}
