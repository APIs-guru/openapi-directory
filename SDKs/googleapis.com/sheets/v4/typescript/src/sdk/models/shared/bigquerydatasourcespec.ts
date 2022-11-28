import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigQueryQuerySpec } from "./bigqueryqueryspec";
import { BigQueryTableSpec } from "./bigquerytablespec";



// BigQueryDataSourceSpec
/** 
 * The specification of a BigQuery data source that's connected to a sheet.
**/
export class BigQueryDataSourceSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=querySpec" })
  querySpec?: BigQueryQuerySpec;

  @SpeakeasyMetadata({ data: "json, name=tableSpec" })
  tableSpec?: BigQueryTableSpec;
}
