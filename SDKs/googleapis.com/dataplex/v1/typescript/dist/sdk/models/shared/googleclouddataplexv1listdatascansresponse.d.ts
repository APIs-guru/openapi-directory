import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataScan } from "./googleclouddataplexv1datascan";
/**
 * List dataScans response.
**/
export declare class GoogleCloudDataplexV1ListDataScansResponse extends SpeakeasyBase {
    dataScans?: GoogleCloudDataplexV1DataScan[];
    nextPageToken?: string;
    unreachable?: string[];
}
