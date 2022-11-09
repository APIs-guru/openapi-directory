import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";


// GoogleCloudDocumentaiV1DocumentPageVisualElement
/** 
 * Detected non-text visual elements e.g. checkbox, signature etc. on the page.
**/
export class GoogleCloudDocumentaiV1DocumentPageVisualElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectedLanguages", elemType: shared.GoogleCloudDocumentaiV1DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];

  @Metadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
