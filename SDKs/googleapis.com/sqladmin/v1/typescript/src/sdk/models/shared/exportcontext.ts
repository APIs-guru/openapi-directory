import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExportContextCsvExportOptions
/** 
 * Options for exporting data as CSV. `MySQL` and `PostgreSQL` instances only.
**/
export class ExportContextCsvExportOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=escapeCharacter" })
  escapeCharacter?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldsTerminatedBy" })
  fieldsTerminatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=linesTerminatedBy" })
  linesTerminatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=quoteCharacter" })
  quoteCharacter?: string;

  @SpeakeasyMetadata({ data: "json, name=selectQuery" })
  selectQuery?: string;
}

export enum ExportContextFileTypeEnum {
    SqlFileTypeUnspecified = "SQL_FILE_TYPE_UNSPECIFIED",
    Sql = "SQL",
    Csv = "CSV",
    Bak = "BAK"
}


// ExportContextSqlExportOptionsMysqlExportOptions
/** 
 * Options for exporting from MySQL.
**/
export class ExportContextSqlExportOptionsMysqlExportOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=masterData" })
  masterData?: number;
}


// ExportContextSqlExportOptions
/** 
 * Options for exporting data as SQL statements.
**/
export class ExportContextSqlExportOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mysqlExportOptions" })
  mysqlExportOptions?: ExportContextSqlExportOptionsMysqlExportOptions;

  @SpeakeasyMetadata({ data: "json, name=schemaOnly" })
  schemaOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tables" })
  tables?: string[];
}


// ExportContext
/** 
 * Database instance export context.
**/
export class ExportContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=csvExportOptions" })
  csvExportOptions?: ExportContextCsvExportOptions;

  @SpeakeasyMetadata({ data: "json, name=databases" })
  databases?: string[];

  @SpeakeasyMetadata({ data: "json, name=fileType" })
  fileType?: ExportContextFileTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=offload" })
  offload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sqlExportOptions" })
  sqlExportOptions?: ExportContextSqlExportOptions;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
