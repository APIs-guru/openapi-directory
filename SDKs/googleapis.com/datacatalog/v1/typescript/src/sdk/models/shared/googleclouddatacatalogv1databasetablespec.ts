import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1DataplexTableSpec } from "./googleclouddatacatalogv1dataplextablespec";


export enum GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum {
    TableTypeUnspecified = "TABLE_TYPE_UNSPECIFIED",
    Native = "NATIVE",
    External = "EXTERNAL"
}


// GoogleCloudDatacatalogV1DatabaseTableSpec
/** 
 * Specification that applies to a table resource. Valid only for entries with the `TABLE` type.
**/
export class GoogleCloudDatacatalogV1DatabaseTableSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataplexTable" })
  dataplexTable?: GoogleCloudDatacatalogV1DataplexTableSpec;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum;
}
