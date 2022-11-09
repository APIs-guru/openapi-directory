import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { PivotFilterCriteria } from "./pivotfiltercriteria";


// PivotFilterSpec
/** 
 * The pivot table filter criteria associated with a specific source column offset.
**/
export class PivotFilterSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnOffsetIndex" })
  columnOffsetIndex?: number;

  @Metadata({ data: "json, name=dataSourceColumnReference" })
  dataSourceColumnReference?: DataSourceColumnReference;

  @Metadata({ data: "json, name=filterCriteria" })
  filterCriteria?: PivotFilterCriteria;
}
