import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";


// GoogleCloudDocumentaiV1beta2DocumentPageFormField
/** 
 * A form field detected on the page.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageFormField extends SpeakeasyBase {
  @Metadata({ data: "json, name=correctedKeyText" })
  correctedKeyText?: string;

  @Metadata({ data: "json, name=correctedValueText" })
  correctedValueText?: string;

  @Metadata({ data: "json, name=fieldName" })
  fieldName?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

  @Metadata({ data: "json, name=fieldValue" })
  fieldValue?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

  @Metadata({ data: "json, name=nameDetectedLanguages", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage })
  nameDetectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];

  @Metadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;

  @Metadata({ data: "json, name=valueDetectedLanguages", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage })
  valueDetectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];

  @Metadata({ data: "json, name=valueType" })
  valueType?: string;
}
