import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageTableTableRow } from "./googleclouddocumentaiv1documentpagetabletablerow";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
/**
 * A table representation similar to HTML table structure.
**/
export declare class GoogleCloudDocumentaiV1DocumentPageTable extends SpeakeasyBase {
    bodyRows?: GoogleCloudDocumentaiV1DocumentPageTableTableRow[];
    detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];
    headerRows?: GoogleCloudDocumentaiV1DocumentPageTableTableRow[];
    layout?: GoogleCloudDocumentaiV1DocumentPageLayout;
    provenance?: GoogleCloudDocumentaiV1DocumentProvenance;
}
