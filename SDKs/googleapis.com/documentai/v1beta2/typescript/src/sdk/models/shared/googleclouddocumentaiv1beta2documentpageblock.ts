import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";



// GoogleCloudDocumentaiV1beta2DocumentPageBlock
/** 
 * A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;
}
