import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for exporting data as CSV. `MySQL` and `PostgreSQL` instances only.
**/
export declare class ExportContextCsvExportOptions extends SpeakeasyBase {
    escapeCharacter?: string;
    fieldsTerminatedBy?: string;
    linesTerminatedBy?: string;
    quoteCharacter?: string;
    selectQuery?: string;
}
export declare enum ExportContextFileTypeEnum {
    SqlFileTypeUnspecified = "SQL_FILE_TYPE_UNSPECIFIED",
    Sql = "SQL",
    Csv = "CSV",
    Bak = "BAK"
}
/**
 * Options for exporting from MySQL.
**/
export declare class ExportContextSqlExportOptionsMysqlExportOptions extends SpeakeasyBase {
    masterData?: number;
}
/**
 * Options for exporting data as SQL statements.
**/
export declare class ExportContextSqlExportOptions extends SpeakeasyBase {
    mysqlExportOptions?: ExportContextSqlExportOptionsMysqlExportOptions;
    schemaOnly?: boolean;
    tables?: string[];
}
/**
 * Database instance export context.
**/
export declare class ExportContext extends SpeakeasyBase {
    csvExportOptions?: ExportContextCsvExportOptions;
    databases?: string[];
    fileType?: ExportContextFileTypeEnum;
    kind?: string;
    offload?: boolean;
    sqlExportOptions?: ExportContextSqlExportOptions;
    uri?: string;
}
