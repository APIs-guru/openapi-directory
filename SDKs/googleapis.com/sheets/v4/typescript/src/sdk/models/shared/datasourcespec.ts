import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BigQueryDataSourceSpec } from "./bigquerydatasourcespec";
import { DataSourceParameter } from "./datasourceparameter";


// DataSourceSpec
/** 
 * This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source.
**/
export class DataSourceSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigQuery" })
  bigQuery?: BigQueryDataSourceSpec;

  @Metadata({ data: "json, name=parameters", elemType: shared.DataSourceParameter })
  parameters?: DataSourceParameter[];
}
