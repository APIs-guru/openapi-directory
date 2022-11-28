import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1DataplexSpec } from "./googleclouddatacatalogv1dataplexspec";
import { GoogleCloudDatacatalogV1DataplexExternalTable } from "./googleclouddatacatalogv1dataplexexternaltable";
/**
 * Entry specification for a Dataplex table.
**/
export declare class GoogleCloudDatacatalogV1DataplexTableSpec extends SpeakeasyBase {
    dataplexSpec?: GoogleCloudDatacatalogV1DataplexSpec;
    externalTables?: GoogleCloudDatacatalogV1DataplexExternalTable[];
    userManaged?: boolean;
}
