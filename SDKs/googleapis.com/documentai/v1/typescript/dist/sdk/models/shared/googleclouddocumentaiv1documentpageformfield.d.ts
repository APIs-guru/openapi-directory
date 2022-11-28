import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
/**
 * A form field detected on the page.
**/
export declare class GoogleCloudDocumentaiV1DocumentPageFormField extends SpeakeasyBase {
    correctedKeyText?: string;
    correctedValueText?: string;
    fieldName?: GoogleCloudDocumentaiV1DocumentPageLayout;
    fieldValue?: GoogleCloudDocumentaiV1DocumentPageLayout;
    nameDetectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];
    provenance?: GoogleCloudDocumentaiV1DocumentProvenance;
    valueDetectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];
    valueType?: string;
}
