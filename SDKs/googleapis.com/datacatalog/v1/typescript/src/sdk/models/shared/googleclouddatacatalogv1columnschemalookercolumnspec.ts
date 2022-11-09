import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecTypeEnum {
    LookerColumnTypeUnspecified = "LOOKER_COLUMN_TYPE_UNSPECIFIED"
,    Dimension = "DIMENSION"
,    DimensionGroup = "DIMENSION_GROUP"
,    Filter = "FILTER"
,    Measure = "MEASURE"
,    Paremeter = "PAREMETER"
}


// GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec
/** 
 * Column info specific to Looker System.
**/
export class GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecTypeEnum;
}
