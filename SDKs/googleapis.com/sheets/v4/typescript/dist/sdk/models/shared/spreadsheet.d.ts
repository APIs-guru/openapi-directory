import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { DeveloperMetadata } from "./developermetadata";
import { NamedRange } from "./namedrange";
import { SpreadsheetProperties } from "./spreadsheetproperties";
import { Sheet } from "./sheet";
import { DataSourceRefreshSchedule } from "./datasourcerefreshschedule";
/**
 * Resource that represents a spreadsheet.
**/
export declare class SpreadsheetInput extends SpeakeasyBase {
    dataSources?: DataSource[];
    developerMetadata?: DeveloperMetadata[];
    namedRanges?: NamedRange[];
    properties?: SpreadsheetProperties;
    sheets?: Sheet[];
    spreadsheetId?: string;
    spreadsheetUrl?: string;
}
/**
 * Resource that represents a spreadsheet.
**/
export declare class Spreadsheet extends SpeakeasyBase {
    dataSourceSchedules?: DataSourceRefreshSchedule[];
    dataSources?: DataSource[];
    developerMetadata?: DeveloperMetadata[];
    namedRanges?: NamedRange[];
    properties?: SpreadsheetProperties;
    sheets?: Sheet[];
    spreadsheetId?: string;
    spreadsheetUrl?: string;
}
