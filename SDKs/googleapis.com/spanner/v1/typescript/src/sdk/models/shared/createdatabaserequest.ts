import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfig } from "./encryptionconfig";


export enum CreateDatabaseRequestDatabaseDialectEnum {
    DatabaseDialectUnspecified = "DATABASE_DIALECT_UNSPECIFIED",
    GoogleStandardSql = "GOOGLE_STANDARD_SQL",
    Postgresql = "POSTGRESQL"
}


// CreateDatabaseRequest
/** 
 * The request for CreateDatabase.
**/
export class CreateDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createStatement" })
  createStatement?: string;

  @SpeakeasyMetadata({ data: "json, name=databaseDialect" })
  databaseDialect?: CreateDatabaseRequestDatabaseDialectEnum;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=extraStatements" })
  extraStatements?: string[];
}
