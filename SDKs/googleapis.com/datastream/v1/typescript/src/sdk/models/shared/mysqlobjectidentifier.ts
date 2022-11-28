import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MysqlObjectIdentifier
/** 
 * Mysql data source object identifier.
**/
export class MysqlObjectIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: string;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;
}
