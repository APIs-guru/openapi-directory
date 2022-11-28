import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
/**
 * A collection of lines that a human would perceive as a paragraph.
**/
export declare class GoogleCloudDocumentaiV1DocumentPageParagraph extends SpeakeasyBase {
    detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];
    layout?: GoogleCloudDocumentaiV1DocumentPageLayout;
    provenance?: GoogleCloudDocumentaiV1DocumentProvenance;
}
