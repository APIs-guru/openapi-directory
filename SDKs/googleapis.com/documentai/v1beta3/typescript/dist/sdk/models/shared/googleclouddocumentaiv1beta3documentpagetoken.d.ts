import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak } from "./googleclouddocumentaiv1beta3documentpagetokendetectedbreak";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";
/**
 * A detected token.
**/
export declare class GoogleCloudDocumentaiV1beta3DocumentPageToken extends SpeakeasyBase {
    detectedBreak?: GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak;
    detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance;
}
