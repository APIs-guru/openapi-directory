import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BigQueryQuerySpec } from "./bigqueryqueryspec";
import { BigQueryTableSpec } from "./bigquerytablespec";


// BigQueryDataSourceSpec
/** 
 * The specification of a BigQuery data source that's connected to a sheet.
**/
export class BigQueryDataSourceSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=querySpec" })
  querySpec?: BigQueryQuerySpec;

  @Metadata({ data: "json, name=tableSpec" })
  tableSpec?: BigQueryTableSpec;
}
