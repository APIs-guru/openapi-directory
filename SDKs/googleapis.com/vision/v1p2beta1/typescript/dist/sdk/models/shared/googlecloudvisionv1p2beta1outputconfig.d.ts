import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1GcsDestination } from "./googlecloudvisionv1p2beta1gcsdestination";
/**
 * The desired output location and metadata.
**/
export declare class GoogleCloudVisionV1p2beta1OutputConfig extends SpeakeasyBase {
    batchSize?: number;
    gcsDestination?: GoogleCloudVisionV1p2beta1GcsDestination;
}
