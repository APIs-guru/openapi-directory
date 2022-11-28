import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak } from "./googleclouddocumentaiv1documentpagetokendetectedbreak";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";



// GoogleCloudDocumentaiV1DocumentPageToken
/** 
 * A detected token.
**/
export class GoogleCloudDocumentaiV1DocumentPageToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedBreak" })
  detectedBreak?: GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak;

  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance;
}
