import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionConfig } from "./encryptionconfig";

export enum CreateDatabaseRequestDatabaseDialectEnum {
    DatabaseDialectUnspecified = "DATABASE_DIALECT_UNSPECIFIED"
,    GoogleStandardSql = "GOOGLE_STANDARD_SQL"
,    Postgresql = "POSTGRESQL"
}


// CreateDatabaseRequest
/** 
 * The request for CreateDatabase.
**/
export class CreateDatabaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=createStatement" })
  createStatement?: string;

  @Metadata({ data: "json, name=databaseDialect" })
  databaseDialect?: CreateDatabaseRequestDatabaseDialectEnum;

  @Metadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @Metadata({ data: "json, name=extraStatements" })
  extraStatements?: string[];
}
