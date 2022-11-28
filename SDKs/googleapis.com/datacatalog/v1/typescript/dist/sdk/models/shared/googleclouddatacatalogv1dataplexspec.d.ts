import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1PhysicalSchema } from "./googleclouddatacatalogv1physicalschema";
/**
 * Common Dataplex fields.
**/
export declare class GoogleCloudDatacatalogV1DataplexSpec extends SpeakeasyBase {
    asset?: string;
    compressionFormat?: string;
    dataFormat?: GoogleCloudDatacatalogV1PhysicalSchema;
    projectId?: string;
}
