import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak } from "./googleclouddocumentaiv1documentpagetokendetectedbreak";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
/**
 * A detected token.
**/
export declare class GoogleCloudDocumentaiV1DocumentPageToken extends SpeakeasyBase {
    detectedBreak?: GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak;
    detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];
    layout?: GoogleCloudDocumentaiV1DocumentPageLayout;
    provenance?: GoogleCloudDocumentaiV1DocumentProvenance;
}
