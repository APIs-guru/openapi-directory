import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostgresqlSchema } from "./postgresqlschema";



// PostgresqlRdbms
/** 
 * PostgreSQL database structure.
**/
export class PostgresqlRdbms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=postgresqlSchemas", elemType: PostgresqlSchema })
  postgresqlSchemas?: PostgresqlSchema[];
}
