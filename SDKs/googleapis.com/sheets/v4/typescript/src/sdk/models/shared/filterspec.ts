import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { FilterCriteria } from "./filtercriteria";


// FilterSpec
/** 
 * The filter criteria associated with a specific column.
**/
export class FilterSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnIndex" })
  columnIndex?: number;

  @Metadata({ data: "json, name=dataSourceColumnReference" })
  dataSourceColumnReference?: DataSourceColumnReference;

  @Metadata({ data: "json, name=filterCriteria" })
  filterCriteria?: FilterCriteria;
}
