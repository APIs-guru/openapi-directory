import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1BigQueryConnectionSpec } from "./googleclouddatacatalogv1bigqueryconnectionspec";
/**
 * Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type. Only one of internal specs can be set at the time, and cannot be changed later.
**/
export declare class GoogleCloudDatacatalogV1DataSourceConnectionSpec extends SpeakeasyBase {
    bigqueryConnectionSpec?: GoogleCloudDatacatalogV1BigQueryConnectionSpec;
}
