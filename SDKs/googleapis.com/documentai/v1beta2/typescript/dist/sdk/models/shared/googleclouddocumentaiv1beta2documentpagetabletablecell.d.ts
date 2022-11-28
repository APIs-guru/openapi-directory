import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
/**
 * A cell representation inside the table.
**/
export declare class GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell extends SpeakeasyBase {
    colSpan?: number;
    detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    rowSpan?: number;
}
