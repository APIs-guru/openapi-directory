import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostgresqlRdbms } from "./postgresqlrdbms";



// PostgresqlSourceConfig
/** 
 * PostgreSQL data source configuration
**/
export class PostgresqlSourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludeObjects" })
  excludeObjects?: PostgresqlRdbms;

  @SpeakeasyMetadata({ data: "json, name=includeObjects" })
  includeObjects?: PostgresqlRdbms;

  @SpeakeasyMetadata({ data: "json, name=publication" })
  publication?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationSlot" })
  replicationSlot?: string;
}
