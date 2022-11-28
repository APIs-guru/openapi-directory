import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow } from "./googleclouddocumentaiv1beta2documentpagetabletablerow";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
/**
 * A table representation similar to HTML table structure.
**/
export declare class GoogleCloudDocumentaiV1beta2DocumentPageTable extends SpeakeasyBase {
    bodyRows?: GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow[];
    detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    headerRows?: GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow[];
    layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;
}
