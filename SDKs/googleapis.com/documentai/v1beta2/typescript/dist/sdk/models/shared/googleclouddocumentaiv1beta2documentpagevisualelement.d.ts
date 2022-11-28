import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
/**
 * Detected non-text visual elements e.g. checkbox, signature etc. on the page.
**/
export declare class GoogleCloudDocumentaiV1beta2DocumentPageVisualElement extends SpeakeasyBase {
    detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    type?: string;
}
