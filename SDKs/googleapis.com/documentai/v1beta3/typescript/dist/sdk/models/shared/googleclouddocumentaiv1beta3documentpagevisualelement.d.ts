import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";
/**
 * Detected non-text visual elements e.g. checkbox, signature etc. on the page.
**/
export declare class GoogleCloudDocumentaiV1beta3DocumentPageVisualElement extends SpeakeasyBase {
    detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    type?: string;
}
