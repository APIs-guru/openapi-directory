import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageBlock } from "./googleclouddocumentaiv1beta2documentpageblock";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode } from "./googleclouddocumentaiv1beta2documentpagedetectedbarcode";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentPageDimension } from "./googleclouddocumentaiv1beta2documentpagedimension";
import { GoogleCloudDocumentaiV1beta2DocumentPageFormField } from "./googleclouddocumentaiv1beta2documentpageformfield";
import { GoogleCloudDocumentaiV1beta2DocumentPageImage } from "./googleclouddocumentaiv1beta2documentpageimage";
import { GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores } from "./googleclouddocumentaiv1beta2documentpageimagequalityscores";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
import { GoogleCloudDocumentaiV1beta2DocumentPageLine } from "./googleclouddocumentaiv1beta2documentpageline";
import { GoogleCloudDocumentaiV1beta2DocumentPageParagraph } from "./googleclouddocumentaiv1beta2documentpageparagraph";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
import { GoogleCloudDocumentaiV1beta2DocumentPageSymbol } from "./googleclouddocumentaiv1beta2documentpagesymbol";
import { GoogleCloudDocumentaiV1beta2DocumentPageTable } from "./googleclouddocumentaiv1beta2documentpagetable";
import { GoogleCloudDocumentaiV1beta2DocumentPageToken } from "./googleclouddocumentaiv1beta2documentpagetoken";
import { GoogleCloudDocumentaiV1beta2DocumentPageMatrix } from "./googleclouddocumentaiv1beta2documentpagematrix";
import { GoogleCloudDocumentaiV1beta2DocumentPageVisualElement } from "./googleclouddocumentaiv1beta2documentpagevisualelement";
/**
 * A page in a Document.
**/
export declare class GoogleCloudDocumentaiV1beta2DocumentPage extends SpeakeasyBase {
    blocks?: GoogleCloudDocumentaiV1beta2DocumentPageBlock[];
    detectedBarcodes?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode[];
    detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    dimension?: GoogleCloudDocumentaiV1beta2DocumentPageDimension;
    formFields?: GoogleCloudDocumentaiV1beta2DocumentPageFormField[];
    image?: GoogleCloudDocumentaiV1beta2DocumentPageImage;
    imageQualityScores?: GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores;
    layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    lines?: GoogleCloudDocumentaiV1beta2DocumentPageLine[];
    pageNumber?: number;
    paragraphs?: GoogleCloudDocumentaiV1beta2DocumentPageParagraph[];
    provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;
    symbols?: GoogleCloudDocumentaiV1beta2DocumentPageSymbol[];
    tables?: GoogleCloudDocumentaiV1beta2DocumentPageTable[];
    tokens?: GoogleCloudDocumentaiV1beta2DocumentPageToken[];
    transforms?: GoogleCloudDocumentaiV1beta2DocumentPageMatrix[];
    visualElements?: GoogleCloudDocumentaiV1beta2DocumentPageVisualElement[];
}
