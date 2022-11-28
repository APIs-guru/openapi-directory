import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
/**
 * A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.
**/
export declare class GoogleCloudDocumentaiV1beta2DocumentPageLine extends SpeakeasyBase {
    detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;
}
