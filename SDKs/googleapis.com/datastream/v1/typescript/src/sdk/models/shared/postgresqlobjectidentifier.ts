import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PostgresqlObjectIdentifier
/** 
 * PostgreSQL data source object identifier.
**/
export class PostgresqlObjectIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;
}
