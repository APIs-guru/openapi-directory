import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak } from "./googleclouddocumentaiv1beta2documentpagetokendetectedbreak";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";


// GoogleCloudDocumentaiV1beta2DocumentPageToken
/** 
 * A detected token.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectedBreak" })
  detectedBreak?: GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak;

  @Metadata({ data: "json, name=detectedLanguages", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];

  @Metadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

  @Metadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;
}
