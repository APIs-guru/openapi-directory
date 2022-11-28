import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";



// GoogleCloudDocumentaiV1DocumentPageLine
/** 
 * A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.
**/
export class GoogleCloudDocumentaiV1DocumentPageLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance;
}
