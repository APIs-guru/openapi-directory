import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataProfileResultProfile } from "./googleclouddataplexv1dataprofileresultprofile";
import { GoogleCloudDataplexV1ScannedData } from "./googleclouddataplexv1scanneddata";
/**
 * DataProfileResult defines the output of DataProfileScan. Each field of the table will have field type specific profile result.
**/
export declare class GoogleCloudDataplexV1DataProfileResult extends SpeakeasyBase {
    profile?: GoogleCloudDataplexV1DataProfileResultProfile;
    rowCount?: string;
    scannedData?: GoogleCloudDataplexV1ScannedData;
}
