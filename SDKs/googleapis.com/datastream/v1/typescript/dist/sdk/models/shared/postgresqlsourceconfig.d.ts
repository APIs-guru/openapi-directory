import { SpeakeasyBase } from "../../../internal/utils";
import { PostgresqlRdbms } from "./postgresqlrdbms";
/**
 * PostgreSQL data source configuration
**/
export declare class PostgresqlSourceConfig extends SpeakeasyBase {
    excludeObjects?: PostgresqlRdbms;
    includeObjects?: PostgresqlRdbms;
    publication?: string;
    replicationSlot?: string;
}
