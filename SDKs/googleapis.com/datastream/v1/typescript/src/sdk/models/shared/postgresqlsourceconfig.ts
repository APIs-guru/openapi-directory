import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PostgresqlRdbms } from "./postgresqlrdbms";
import { PostgresqlRdbms } from "./postgresqlrdbms";


// PostgresqlSourceConfig
/** 
 * PostgreSQL data source configuration
**/
export class PostgresqlSourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludeObjects" })
  excludeObjects?: PostgresqlRdbms;

  @Metadata({ data: "json, name=includeObjects" })
  includeObjects?: PostgresqlRdbms;

  @Metadata({ data: "json, name=publication" })
  publication?: string;

  @Metadata({ data: "json, name=replicationSlot" })
  replicationSlot?: string;
}
