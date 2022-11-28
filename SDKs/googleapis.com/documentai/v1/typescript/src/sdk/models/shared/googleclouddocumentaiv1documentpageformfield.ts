import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";



// GoogleCloudDocumentaiV1DocumentPageFormField
/** 
 * A form field detected on the page.
**/
export class GoogleCloudDocumentaiV1DocumentPageFormField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=correctedKeyText" })
  correctedKeyText?: string;

  @SpeakeasyMetadata({ data: "json, name=correctedValueText" })
  correctedValueText?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldName" })
  fieldName?: GoogleCloudDocumentaiV1DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=fieldValue" })
  fieldValue?: GoogleCloudDocumentaiV1DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=nameDetectedLanguages", elemType: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage })
  nameDetectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance;

  @SpeakeasyMetadata({ data: "json, name=valueDetectedLanguages", elemType: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage })
  valueDetectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=valueType" })
  valueType?: string;
}
