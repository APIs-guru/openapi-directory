import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";
/**
 * A form field detected on the page.
**/
export declare class GoogleCloudDocumentaiV1beta3DocumentPageFormField extends SpeakeasyBase {
    correctedKeyText?: string;
    correctedValueText?: string;
    fieldName?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    fieldValue?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    nameDetectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance;
    valueDetectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    valueType?: string;
}
