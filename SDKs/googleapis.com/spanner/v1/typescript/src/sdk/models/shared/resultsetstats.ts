import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryPlan } from "./queryplan";


// ResultSetStats
/** 
 * Additional statistics about a ResultSet or PartialResultSet.
**/
export class ResultSetStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=queryPlan" })
  queryPlan?: QueryPlan;

  @Metadata({ data: "json, name=queryStats" })
  queryStats?: Map<string, any>;

  @Metadata({ data: "json, name=rowCountExact" })
  rowCountExact?: string;

  @Metadata({ data: "json, name=rowCountLowerBound" })
  rowCountLowerBound?: string;
}
