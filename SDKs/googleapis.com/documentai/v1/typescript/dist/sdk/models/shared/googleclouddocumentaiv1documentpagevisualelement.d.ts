import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
/**
 * Detected non-text visual elements e.g. checkbox, signature etc. on the page.
**/
export declare class GoogleCloudDocumentaiV1DocumentPageVisualElement extends SpeakeasyBase {
    detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];
    layout?: GoogleCloudDocumentaiV1DocumentPageLayout;
    type?: string;
}
