import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigQueryDataSourceSpec } from "./bigquerydatasourcespec";
import { DataSourceParameter } from "./datasourceparameter";



// DataSourceSpec
/** 
 * This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source.
**/
export class DataSourceSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigQuery" })
  bigQuery?: BigQueryDataSourceSpec;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: DataSourceParameter })
  parameters?: DataSourceParameter[];
}
