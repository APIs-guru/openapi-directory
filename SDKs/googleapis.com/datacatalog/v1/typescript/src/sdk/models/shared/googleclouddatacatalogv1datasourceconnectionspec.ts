import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1BigQueryConnectionSpec } from "./googleclouddatacatalogv1bigqueryconnectionspec";


// GoogleCloudDatacatalogV1DataSourceConnectionSpec
/** 
 * Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type. Only one of internal specs can be set at the time, and cannot be changed later.
**/
export class GoogleCloudDatacatalogV1DataSourceConnectionSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigqueryConnectionSpec" })
  bigqueryConnectionSpec?: GoogleCloudDatacatalogV1BigQueryConnectionSpec;
}
