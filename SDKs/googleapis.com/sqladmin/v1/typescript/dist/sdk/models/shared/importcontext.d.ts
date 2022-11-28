import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImportContextBakImportOptionsEncryptionOptions extends SpeakeasyBase {
    certPath?: string;
    pvkPassword?: string;
    pvkPath?: string;
}
/**
 * Import parameters specific to SQL Server .BAK files
**/
export declare class ImportContextBakImportOptions extends SpeakeasyBase {
    encryptionOptions?: ImportContextBakImportOptionsEncryptionOptions;
}
/**
 * Options for importing data as CSV.
**/
export declare class ImportContextCsvImportOptions extends SpeakeasyBase {
    columns?: string[];
    escapeCharacter?: string;
    fieldsTerminatedBy?: string;
    linesTerminatedBy?: string;
    quoteCharacter?: string;
    table?: string;
}
export declare enum ImportContextFileTypeEnum {
    SqlFileTypeUnspecified = "SQL_FILE_TYPE_UNSPECIFIED",
    Sql = "SQL",
    Csv = "CSV",
    Bak = "BAK"
}
/**
 * Database instance import context.
**/
export declare class ImportContext extends SpeakeasyBase {
    bakImportOptions?: ImportContextBakImportOptions;
    csvImportOptions?: ImportContextCsvImportOptions;
    database?: string;
    fileType?: ImportContextFileTypeEnum;
    importUser?: string;
    kind?: string;
    uri?: string;
}
