import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { FilterCriteria } from "./filtercriteria";



// FilterSpec
/** 
 * The filter criteria associated with a specific column.
**/
export class FilterSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnIndex" })
  columnIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=dataSourceColumnReference" })
  dataSourceColumnReference?: DataSourceColumnReference;

  @SpeakeasyMetadata({ data: "json, name=filterCriteria" })
  filterCriteria?: FilterCriteria;
}
