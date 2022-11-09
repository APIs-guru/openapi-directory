import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExportContextCsvExportOptions
/** 
 * Options for exporting data as CSV. `MySQL` and `PostgreSQL` instances only.
**/
export class ExportContextCsvExportOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=escapeCharacter" })
  escapeCharacter?: string;

  @Metadata({ data: "json, name=fieldsTerminatedBy" })
  fieldsTerminatedBy?: string;

  @Metadata({ data: "json, name=linesTerminatedBy" })
  linesTerminatedBy?: string;

  @Metadata({ data: "json, name=quoteCharacter" })
  quoteCharacter?: string;

  @Metadata({ data: "json, name=selectQuery" })
  selectQuery?: string;
}

export enum ExportContextFileTypeEnum {
    SqlFileTypeUnspecified = "SQL_FILE_TYPE_UNSPECIFIED"
,    Sql = "SQL"
,    Csv = "CSV"
,    Bak = "BAK"
}


// ExportContextSqlExportOptionsMysqlExportOptions
/** 
 * Options for exporting from MySQL.
**/
export class ExportContextSqlExportOptionsMysqlExportOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=masterData" })
  masterData?: number;
}


// ExportContextSqlExportOptions
/** 
 * Options for exporting data as SQL statements.
**/
export class ExportContextSqlExportOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=mysqlExportOptions" })
  mysqlExportOptions?: ExportContextSqlExportOptionsMysqlExportOptions;

  @Metadata({ data: "json, name=schemaOnly" })
  schemaOnly?: boolean;

  @Metadata({ data: "json, name=tables" })
  tables?: string[];
}


// ExportContext
/** 
 * Database instance export context.
**/
export class ExportContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=csvExportOptions" })
  csvExportOptions?: ExportContextCsvExportOptions;

  @Metadata({ data: "json, name=databases" })
  databases?: string[];

  @Metadata({ data: "json, name=fileType" })
  fileType?: ExportContextFileTypeEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=offload" })
  offload?: boolean;

  @Metadata({ data: "json, name=sqlExportOptions" })
  sqlExportOptions?: ExportContextSqlExportOptions;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
