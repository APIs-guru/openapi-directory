import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { PivotFilterCriteria } from "./pivotfiltercriteria";



// PivotFilterSpec
/** 
 * The pivot table filter criteria associated with a specific source column offset.
**/
export class PivotFilterSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnOffsetIndex" })
  columnOffsetIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=dataSourceColumnReference" })
  dataSourceColumnReference?: DataSourceColumnReference;

  @SpeakeasyMetadata({ data: "json, name=filterCriteria" })
  filterCriteria?: PivotFilterCriteria;
}
