import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSourceRefreshSchedule } from "./datasourcerefreshschedule";
import { DataSource } from "./datasource";
import { DeveloperMetadata } from "./developermetadata";
import { NamedRange } from "./namedrange";
import { SpreadsheetProperties } from "./spreadsheetproperties";
import { Sheet } from "./sheet";


// Spreadsheet
/** 
 * Resource that represents a spreadsheet.
**/
export class Spreadsheet extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceSchedules", elemType: shared.DataSourceRefreshSchedule })
  dataSourceSchedules?: DataSourceRefreshSchedule[];

  @Metadata({ data: "json, name=dataSources", elemType: shared.DataSource })
  dataSources?: DataSource[];

  @Metadata({ data: "json, name=developerMetadata", elemType: shared.DeveloperMetadata })
  developerMetadata?: DeveloperMetadata[];

  @Metadata({ data: "json, name=namedRanges", elemType: shared.NamedRange })
  namedRanges?: NamedRange[];

  @Metadata({ data: "json, name=properties" })
  properties?: SpreadsheetProperties;

  @Metadata({ data: "json, name=sheets", elemType: shared.Sheet })
  sheets?: Sheet[];

  @Metadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;

  @Metadata({ data: "json, name=spreadsheetUrl" })
  spreadsheetUrl?: string;
}
