import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PostgresqlObjectIdentifier
/** 
 * PostgreSQL data source object identifier.
**/
export class PostgresqlObjectIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=table" })
  table?: string;
}
