import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2GcsDestination } from "./googleclouddocumentaiv1beta2gcsdestination";
/**
 * The desired output location and metadata.
**/
export declare class GoogleCloudDocumentaiV1beta2OutputConfig extends SpeakeasyBase {
    gcsDestination?: GoogleCloudDocumentaiV1beta2GcsDestination;
    pagesPerShard?: number;
}
