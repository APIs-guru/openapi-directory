import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1GcsSource } from "./googlecloudvisionv1p2beta1gcssource";
/**
 * The desired input location and metadata.
**/
export declare class GoogleCloudVisionV1p2beta1InputConfig extends SpeakeasyBase {
    content?: string;
    gcsSource?: GoogleCloudVisionV1p2beta1GcsSource;
    mimeType?: string;
}
