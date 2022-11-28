import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1TableSpec } from "./googleclouddatacatalogv1beta1tablespec";
import { GoogleCloudDatacatalogV1beta1ViewSpec } from "./googleclouddatacatalogv1beta1viewspec";
export declare enum GoogleCloudDatacatalogV1beta1BigQueryTableSpecTableSourceTypeEnum {
    TableSourceTypeUnspecified = "TABLE_SOURCE_TYPE_UNSPECIFIED",
    BigqueryView = "BIGQUERY_VIEW",
    BigqueryTable = "BIGQUERY_TABLE",
    BigqueryMaterializedView = "BIGQUERY_MATERIALIZED_VIEW"
}
/**
 * Describes a BigQuery table.
**/
export declare class GoogleCloudDatacatalogV1beta1BigQueryTableSpec extends SpeakeasyBase {
    tableSourceType?: GoogleCloudDatacatalogV1beta1BigQueryTableSpecTableSourceTypeEnum;
    tableSpec?: GoogleCloudDatacatalogV1beta1TableSpec;
    viewSpec?: GoogleCloudDatacatalogV1beta1ViewSpec;
}
