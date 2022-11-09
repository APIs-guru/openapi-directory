import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";


// GoogleCloudDocumentaiV1DocumentPageFormField
/** 
 * A form field detected on the page.
**/
export class GoogleCloudDocumentaiV1DocumentPageFormField extends SpeakeasyBase {
  @Metadata({ data: "json, name=correctedKeyText" })
  correctedKeyText?: string;

  @Metadata({ data: "json, name=correctedValueText" })
  correctedValueText?: string;

  @Metadata({ data: "json, name=fieldName" })
  fieldName?: GoogleCloudDocumentaiV1DocumentPageLayout;

  @Metadata({ data: "json, name=fieldValue" })
  fieldValue?: GoogleCloudDocumentaiV1DocumentPageLayout;

  @Metadata({ data: "json, name=nameDetectedLanguages", elemType: shared.GoogleCloudDocumentaiV1DocumentPageDetectedLanguage })
  nameDetectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];

  @Metadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance;

  @Metadata({ data: "json, name=valueDetectedLanguages", elemType: shared.GoogleCloudDocumentaiV1DocumentPageDetectedLanguage })
  valueDetectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];

  @Metadata({ data: "json, name=valueType" })
  valueType?: string;
}
