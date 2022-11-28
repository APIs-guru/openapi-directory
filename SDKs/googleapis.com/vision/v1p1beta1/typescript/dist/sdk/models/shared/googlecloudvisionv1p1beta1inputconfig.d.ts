import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1GcsSource } from "./googlecloudvisionv1p1beta1gcssource";
/**
 * The desired input location and metadata.
**/
export declare class GoogleCloudVisionV1p1beta1InputConfig extends SpeakeasyBase {
    content?: string;
    gcsSource?: GoogleCloudVisionV1p1beta1GcsSource;
    mimeType?: string;
}
