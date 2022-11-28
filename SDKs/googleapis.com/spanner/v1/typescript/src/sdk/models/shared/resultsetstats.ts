import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryPlan } from "./queryplan";



// ResultSetStats
/** 
 * Additional statistics about a ResultSet or PartialResultSet.
**/
export class ResultSetStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queryPlan" })
  queryPlan?: QueryPlan;

  @SpeakeasyMetadata({ data: "json, name=queryStats" })
  queryStats?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=rowCountExact" })
  rowCountExact?: string;

  @SpeakeasyMetadata({ data: "json, name=rowCountLowerBound" })
  rowCountLowerBound?: string;
}
