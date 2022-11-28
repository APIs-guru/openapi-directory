import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1GcsDestination } from "./googlecloudvisionv1p1beta1gcsdestination";
/**
 * The desired output location and metadata.
**/
export declare class GoogleCloudVisionV1p1beta1OutputConfig extends SpeakeasyBase {
    batchSize?: number;
    gcsDestination?: GoogleCloudVisionV1p1beta1GcsDestination;
}
