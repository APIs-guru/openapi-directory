import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1DataplexTableSpec } from "./googleclouddatacatalogv1dataplextablespec";

export enum GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum {
    TableTypeUnspecified = "TABLE_TYPE_UNSPECIFIED"
,    Native = "NATIVE"
,    External = "EXTERNAL"
}


// GoogleCloudDatacatalogV1DatabaseTableSpec
/** 
 * Specification that applies to a table resource. Valid only for entries with the `TABLE` type.
**/
export class GoogleCloudDatacatalogV1DatabaseTableSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataplexTable" })
  dataplexTable?: GoogleCloudDatacatalogV1DataplexTableSpec;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum;
}
