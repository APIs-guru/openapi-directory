import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";
/**
 * A cell representation inside the table.
**/
export declare class GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell extends SpeakeasyBase {
    colSpan?: number;
    detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    rowSpan?: number;
}
