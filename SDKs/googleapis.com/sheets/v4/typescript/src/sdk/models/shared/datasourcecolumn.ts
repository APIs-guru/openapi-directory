import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";



// DataSourceColumn
/** 
 * A column in a data source.
**/
export class DataSourceColumn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formula" })
  formula?: string;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: DataSourceColumnReference;
}
