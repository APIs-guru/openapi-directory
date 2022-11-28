import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";



// GoogleCloudDocumentaiV1beta2DocumentPageFormField
/** 
 * A form field detected on the page.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageFormField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=correctedKeyText" })
  correctedKeyText?: string;

  @SpeakeasyMetadata({ data: "json, name=correctedValueText" })
  correctedValueText?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldName" })
  fieldName?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=fieldValue" })
  fieldValue?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=nameDetectedLanguages", elemType: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage })
  nameDetectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;

  @SpeakeasyMetadata({ data: "json, name=valueDetectedLanguages", elemType: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage })
  valueDetectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=valueType" })
  valueType?: string;
}
