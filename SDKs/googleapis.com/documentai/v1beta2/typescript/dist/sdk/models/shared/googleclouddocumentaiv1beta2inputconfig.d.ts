import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2GcsSource } from "./googleclouddocumentaiv1beta2gcssource";
/**
 * The desired input location and metadata.
**/
export declare class GoogleCloudDocumentaiV1beta2InputConfig extends SpeakeasyBase {
    contents?: string;
    gcsSource?: GoogleCloudDocumentaiV1beta2GcsSource;
    mimeType?: string;
}
