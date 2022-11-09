import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionRange } from "./dimensionrange";

export enum DeveloperMetadataLocationLocationTypeEnum {
    DeveloperMetadataLocationTypeUnspecified = "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED"
,    Row = "ROW"
,    Column = "COLUMN"
,    Sheet = "SHEET"
,    Spreadsheet = "SPREADSHEET"
}


// DeveloperMetadataLocation
/** 
 * A location where metadata may be associated in a spreadsheet.
**/
export class DeveloperMetadataLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionRange" })
  dimensionRange?: DimensionRange;

  @Metadata({ data: "json, name=locationType" })
  locationType?: DeveloperMetadataLocationLocationTypeEnum;

  @Metadata({ data: "json, name=sheetId" })
  sheetId?: number;

  @Metadata({ data: "json, name=spreadsheet" })
  spreadsheet?: boolean;
}
