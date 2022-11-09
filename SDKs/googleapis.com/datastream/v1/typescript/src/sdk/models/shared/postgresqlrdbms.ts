import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PostgresqlSchema } from "./postgresqlschema";


// PostgresqlRdbms
/** 
 * PostgreSQL database structure.
**/
export class PostgresqlRdbms extends SpeakeasyBase {
  @Metadata({ data: "json, name=postgresqlSchemas", elemType: shared.PostgresqlSchema })
  postgresqlSchemas?: PostgresqlSchema[];
}
