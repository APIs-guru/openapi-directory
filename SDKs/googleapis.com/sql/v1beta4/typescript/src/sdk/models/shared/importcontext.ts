import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportContextBakImportOptionsEncryptionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certPath" })
  certPath?: string;

  @SpeakeasyMetadata({ data: "json, name=pvkPassword" })
  pvkPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=pvkPath" })
  pvkPath?: string;
}


// ImportContextBakImportOptions
/** 
 * Import parameters specific to SQL Server .BAK files
**/
export class ImportContextBakImportOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionOptions" })
  encryptionOptions?: ImportContextBakImportOptionsEncryptionOptions;
}


// ImportContextCsvImportOptions
/** 
 * Options for importing data as CSV.
**/
export class ImportContextCsvImportOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: string[];

  @SpeakeasyMetadata({ data: "json, name=escapeCharacter" })
  escapeCharacter?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldsTerminatedBy" })
  fieldsTerminatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=linesTerminatedBy" })
  linesTerminatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=quoteCharacter" })
  quoteCharacter?: string;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;
}

export enum ImportContextFileTypeEnum {
    SqlFileTypeUnspecified = "SQL_FILE_TYPE_UNSPECIFIED",
    Sql = "SQL",
    Csv = "CSV",
    Bak = "BAK"
}


// ImportContext
/** 
 * Database instance import context.
**/
export class ImportContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bakImportOptions" })
  bakImportOptions?: ImportContextBakImportOptions;

  @SpeakeasyMetadata({ data: "json, name=csvImportOptions" })
  csvImportOptions?: ImportContextCsvImportOptions;

  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: string;

  @SpeakeasyMetadata({ data: "json, name=fileType" })
  fileType?: ImportContextFileTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=importUser" })
  importUser?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
