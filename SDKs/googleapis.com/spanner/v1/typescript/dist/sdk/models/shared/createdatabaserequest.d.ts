import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfig } from "./encryptionconfig";
export declare enum CreateDatabaseRequestDatabaseDialectEnum {
    DatabaseDialectUnspecified = "DATABASE_DIALECT_UNSPECIFIED",
    GoogleStandardSql = "GOOGLE_STANDARD_SQL",
    Postgresql = "POSTGRESQL"
}
/**
 * The request for CreateDatabase.
**/
export declare class CreateDatabaseRequest extends SpeakeasyBase {
    createStatement?: string;
    databaseDialect?: CreateDatabaseRequestDatabaseDialectEnum;
    encryptionConfig?: EncryptionConfig;
    extraStatements?: string[];
}
