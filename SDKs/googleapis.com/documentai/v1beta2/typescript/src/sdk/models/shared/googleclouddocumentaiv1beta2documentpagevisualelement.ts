import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";


// GoogleCloudDocumentaiV1beta2DocumentPageVisualElement
/** 
 * Detected non-text visual elements e.g. checkbox, signature etc. on the page.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageVisualElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectedLanguages", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];

  @Metadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
