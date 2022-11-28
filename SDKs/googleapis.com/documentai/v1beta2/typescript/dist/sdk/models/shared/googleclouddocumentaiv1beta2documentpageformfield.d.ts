import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
/**
 * A form field detected on the page.
**/
export declare class GoogleCloudDocumentaiV1beta2DocumentPageFormField extends SpeakeasyBase {
    correctedKeyText?: string;
    correctedValueText?: string;
    fieldName?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    fieldValue?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    nameDetectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;
    valueDetectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    valueType?: string;
}
