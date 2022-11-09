import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImportContextBakImportOptionsEncryptionOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=certPath" })
  certPath?: string;

  @Metadata({ data: "json, name=pvkPassword" })
  pvkPassword?: string;

  @Metadata({ data: "json, name=pvkPath" })
  pvkPath?: string;
}


// ImportContextBakImportOptions
/** 
 * Import parameters specific to SQL Server .BAK files
**/
export class ImportContextBakImportOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptionOptions" })
  encryptionOptions?: ImportContextBakImportOptionsEncryptionOptions;
}


// ImportContextCsvImportOptions
/** 
 * Options for importing data as CSV.
**/
export class ImportContextCsvImportOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns" })
  columns?: string[];

  @Metadata({ data: "json, name=escapeCharacter" })
  escapeCharacter?: string;

  @Metadata({ data: "json, name=fieldsTerminatedBy" })
  fieldsTerminatedBy?: string;

  @Metadata({ data: "json, name=linesTerminatedBy" })
  linesTerminatedBy?: string;

  @Metadata({ data: "json, name=quoteCharacter" })
  quoteCharacter?: string;

  @Metadata({ data: "json, name=table" })
  table?: string;
}

export enum ImportContextFileTypeEnum {
    SqlFileTypeUnspecified = "SQL_FILE_TYPE_UNSPECIFIED"
,    Sql = "SQL"
,    Csv = "CSV"
,    Bak = "BAK"
}


// ImportContext
/** 
 * Database instance import context.
**/
export class ImportContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=bakImportOptions" })
  bakImportOptions?: ImportContextBakImportOptions;

  @Metadata({ data: "json, name=csvImportOptions" })
  csvImportOptions?: ImportContextCsvImportOptions;

  @Metadata({ data: "json, name=database" })
  database?: string;

  @Metadata({ data: "json, name=fileType" })
  fileType?: ImportContextFileTypeEnum;

  @Metadata({ data: "json, name=importUser" })
  importUser?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
