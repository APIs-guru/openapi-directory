import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak } from "./googleclouddocumentaiv1beta2documentpagetokendetectedbreak";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
/**
 * A detected token.
**/
export declare class GoogleCloudDocumentaiV1beta2DocumentPageToken extends SpeakeasyBase {
    detectedBreak?: GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak;
    detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;
}
