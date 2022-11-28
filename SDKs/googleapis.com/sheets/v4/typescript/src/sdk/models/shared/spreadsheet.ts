import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { DeveloperMetadata } from "./developermetadata";
import { NamedRange } from "./namedrange";
import { SpreadsheetProperties } from "./spreadsheetproperties";
import { Sheet } from "./sheet";
import { DataSourceRefreshSchedule } from "./datasourcerefreshschedule";



// SpreadsheetInput
/** 
 * Resource that represents a spreadsheet.
**/
export class SpreadsheetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSources", elemType: DataSource })
  dataSources?: DataSource[];

  @SpeakeasyMetadata({ data: "json, name=developerMetadata", elemType: DeveloperMetadata })
  developerMetadata?: DeveloperMetadata[];

  @SpeakeasyMetadata({ data: "json, name=namedRanges", elemType: NamedRange })
  namedRanges?: NamedRange[];

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: SpreadsheetProperties;

  @SpeakeasyMetadata({ data: "json, name=sheets", elemType: Sheet })
  sheets?: Sheet[];

  @SpeakeasyMetadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;

  @SpeakeasyMetadata({ data: "json, name=spreadsheetUrl" })
  spreadsheetUrl?: string;
}


// Spreadsheet
/** 
 * Resource that represents a spreadsheet.
**/
export class Spreadsheet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceSchedules", elemType: DataSourceRefreshSchedule })
  dataSourceSchedules?: DataSourceRefreshSchedule[];

  @SpeakeasyMetadata({ data: "json, name=dataSources", elemType: DataSource })
  dataSources?: DataSource[];

  @SpeakeasyMetadata({ data: "json, name=developerMetadata", elemType: DeveloperMetadata })
  developerMetadata?: DeveloperMetadata[];

  @SpeakeasyMetadata({ data: "json, name=namedRanges", elemType: NamedRange })
  namedRanges?: NamedRange[];

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: SpreadsheetProperties;

  @SpeakeasyMetadata({ data: "json, name=sheets", elemType: Sheet })
  sheets?: Sheet[];

  @SpeakeasyMetadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;

  @SpeakeasyMetadata({ data: "json, name=spreadsheetUrl" })
  spreadsheetUrl?: string;
}
