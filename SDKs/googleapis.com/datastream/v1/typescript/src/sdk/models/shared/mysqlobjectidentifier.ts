import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MysqlObjectIdentifier
/** 
 * Mysql data source object identifier.
**/
export class MysqlObjectIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=database" })
  database?: string;

  @Metadata({ data: "json, name=table" })
  table?: string;
}
