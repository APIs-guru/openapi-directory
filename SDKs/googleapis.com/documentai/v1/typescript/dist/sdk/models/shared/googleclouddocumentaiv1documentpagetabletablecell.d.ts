import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
/**
 * A cell representation inside the table.
**/
export declare class GoogleCloudDocumentaiV1DocumentPageTableTableCell extends SpeakeasyBase {
    colSpan?: number;
    detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];
    layout?: GoogleCloudDocumentaiV1DocumentPageLayout;
    rowSpan?: number;
}
