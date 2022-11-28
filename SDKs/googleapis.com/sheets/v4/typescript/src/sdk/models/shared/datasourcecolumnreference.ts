import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataSourceColumnReference
/** 
 * An unique identifier that references a data source column.
**/
export class DataSourceColumnReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
