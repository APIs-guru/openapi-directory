import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1DataplexTableSpec } from "./googleclouddatacatalogv1dataplextablespec";
export declare enum GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum {
    TableTypeUnspecified = "TABLE_TYPE_UNSPECIFIED",
    Native = "NATIVE",
    External = "EXTERNAL"
}
/**
 * Specification that applies to a table resource. Valid only for entries with the `TABLE` type.
**/
export declare class GoogleCloudDatacatalogV1DatabaseTableSpec extends SpeakeasyBase {
    dataplexTable?: GoogleCloudDatacatalogV1DataplexTableSpec;
    type?: GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum;
}
