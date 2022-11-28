import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1TableSpec } from "./googleclouddatacatalogv1tablespec";
import { GoogleCloudDatacatalogV1ViewSpec } from "./googleclouddatacatalogv1viewspec";


export enum GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum {
    TableSourceTypeUnspecified = "TABLE_SOURCE_TYPE_UNSPECIFIED",
    BigqueryView = "BIGQUERY_VIEW",
    BigqueryTable = "BIGQUERY_TABLE",
    BigqueryMaterializedView = "BIGQUERY_MATERIALIZED_VIEW"
}


// GoogleCloudDatacatalogV1BigQueryTableSpec
/** 
 * Describes a BigQuery table.
**/
export class GoogleCloudDatacatalogV1BigQueryTableSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tableSourceType" })
  tableSourceType?: GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=tableSpec" })
  tableSpec?: GoogleCloudDatacatalogV1TableSpec;

  @SpeakeasyMetadata({ data: "json, name=viewSpec" })
  viewSpec?: GoogleCloudDatacatalogV1ViewSpec;
}
