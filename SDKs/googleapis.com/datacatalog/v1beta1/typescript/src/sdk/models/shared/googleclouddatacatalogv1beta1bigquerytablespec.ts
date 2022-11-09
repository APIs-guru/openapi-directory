import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1beta1TableSpec } from "./googleclouddatacatalogv1beta1tablespec";
import { GoogleCloudDatacatalogV1beta1ViewSpec } from "./googleclouddatacatalogv1beta1viewspec";

export enum GoogleCloudDatacatalogV1beta1BigQueryTableSpecTableSourceTypeEnum {
    TableSourceTypeUnspecified = "TABLE_SOURCE_TYPE_UNSPECIFIED"
,    BigqueryView = "BIGQUERY_VIEW"
,    BigqueryTable = "BIGQUERY_TABLE"
,    BigqueryMaterializedView = "BIGQUERY_MATERIALIZED_VIEW"
}


// GoogleCloudDatacatalogV1beta1BigQueryTableSpec
/** 
 * Describes a BigQuery table.
**/
export class GoogleCloudDatacatalogV1beta1BigQueryTableSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=tableSourceType" })
  tableSourceType?: GoogleCloudDatacatalogV1beta1BigQueryTableSpecTableSourceTypeEnum;

  @Metadata({ data: "json, name=tableSpec" })
  tableSpec?: GoogleCloudDatacatalogV1beta1TableSpec;

  @Metadata({ data: "json, name=viewSpec" })
  viewSpec?: GoogleCloudDatacatalogV1beta1ViewSpec;
}
