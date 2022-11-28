import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
import { GoogleCloudDocumentaiV1beta2DocumentTextAnchor } from "./googleclouddocumentaiv1beta2documenttextanchor";
/**
 * This message is used for text changes aka. OCR corrections.
**/
export declare class GoogleCloudDocumentaiV1beta2DocumentTextChange extends SpeakeasyBase {
    changedText?: string;
    provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance[];
    textAnchor?: GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
}
