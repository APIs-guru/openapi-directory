import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
/**
 * A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
**/
export declare class GoogleCloudDocumentaiV1DocumentPageBlock extends SpeakeasyBase {
    detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];
    layout?: GoogleCloudDocumentaiV1DocumentPageLayout;
    provenance?: GoogleCloudDocumentaiV1DocumentProvenance;
}
