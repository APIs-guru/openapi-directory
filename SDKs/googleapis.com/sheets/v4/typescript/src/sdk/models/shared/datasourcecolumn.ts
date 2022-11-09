import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";


// DataSourceColumn
/** 
 * A column in a data source.
**/
export class DataSourceColumn extends SpeakeasyBase {
  @Metadata({ data: "json, name=formula" })
  formula?: string;

  @Metadata({ data: "json, name=reference" })
  reference?: DataSourceColumnReference;
}
