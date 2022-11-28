import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1TableSpec } from "./googleclouddatacatalogv1tablespec";
import { GoogleCloudDatacatalogV1ViewSpec } from "./googleclouddatacatalogv1viewspec";
export declare enum GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum {
    TableSourceTypeUnspecified = "TABLE_SOURCE_TYPE_UNSPECIFIED",
    BigqueryView = "BIGQUERY_VIEW",
    BigqueryTable = "BIGQUERY_TABLE",
    BigqueryMaterializedView = "BIGQUERY_MATERIALIZED_VIEW"
}
/**
 * Describes a BigQuery table.
**/
export declare class GoogleCloudDatacatalogV1BigQueryTableSpec extends SpeakeasyBase {
    tableSourceType?: GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum;
    tableSpec?: GoogleCloudDatacatalogV1TableSpec;
    viewSpec?: GoogleCloudDatacatalogV1ViewSpec;
}
