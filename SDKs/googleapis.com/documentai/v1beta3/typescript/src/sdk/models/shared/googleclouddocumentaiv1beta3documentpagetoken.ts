import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak } from "./googleclouddocumentaiv1beta3documentpagetokendetectedbreak";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";



// GoogleCloudDocumentaiV1beta3DocumentPageToken
/** 
 * A detected token.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedBreak" })
  detectedBreak?: GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak;

  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance;
}
