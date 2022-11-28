import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";
/**
 * A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
**/
export declare class GoogleCloudDocumentaiV1beta3DocumentPageBlock extends SpeakeasyBase {
    detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance;
}
