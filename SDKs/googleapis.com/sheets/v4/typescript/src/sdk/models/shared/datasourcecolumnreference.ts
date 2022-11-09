import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataSourceColumnReference
/** 
 * An unique identifier that references a data source column.
**/
export class DataSourceColumnReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
