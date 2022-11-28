import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
/**
 * A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
**/
export declare class GoogleCloudDocumentaiV1beta2DocumentPageBlock extends SpeakeasyBase {
    detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;
}
