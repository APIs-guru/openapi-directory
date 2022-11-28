import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableFieldSchema } from "./tablefieldschema";



// TableSchema
/** 
 * BigQuery Compatible table schema.
**/
export class TableSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: TableFieldSchema })
  fields?: TableFieldSchema[];
}
