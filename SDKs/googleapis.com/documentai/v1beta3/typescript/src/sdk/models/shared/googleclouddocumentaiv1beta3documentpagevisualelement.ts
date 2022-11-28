import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";



// GoogleCloudDocumentaiV1beta3DocumentPageVisualElement
/** 
 * Detected non-text visual elements e.g. checkbox, signature etc. on the page.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageVisualElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
