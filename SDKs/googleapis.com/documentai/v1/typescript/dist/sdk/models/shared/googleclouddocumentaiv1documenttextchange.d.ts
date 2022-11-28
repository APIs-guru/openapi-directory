import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
import { GoogleCloudDocumentaiV1DocumentTextAnchor } from "./googleclouddocumentaiv1documenttextanchor";
/**
 * This message is used for text changes aka. OCR corrections.
**/
export declare class GoogleCloudDocumentaiV1DocumentTextChange extends SpeakeasyBase {
    changedText?: string;
    provenance?: GoogleCloudDocumentaiV1DocumentProvenance[];
    textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor;
}
