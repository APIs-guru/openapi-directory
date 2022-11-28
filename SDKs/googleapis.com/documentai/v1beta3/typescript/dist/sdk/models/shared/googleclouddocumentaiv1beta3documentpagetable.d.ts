import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow } from "./googleclouddocumentaiv1beta3documentpagetabletablerow";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";
/**
 * A table representation similar to HTML table structure.
**/
export declare class GoogleCloudDocumentaiV1beta3DocumentPageTable extends SpeakeasyBase {
    bodyRows?: GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow[];
    detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    headerRows?: GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow[];
    layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance;
}
