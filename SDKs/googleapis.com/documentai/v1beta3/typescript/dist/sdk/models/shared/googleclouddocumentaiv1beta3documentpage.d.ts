import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageBlock } from "./googleclouddocumentaiv1beta3documentpageblock";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode } from "./googleclouddocumentaiv1beta3documentpagedetectedbarcode";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageDimension } from "./googleclouddocumentaiv1beta3documentpagedimension";
import { GoogleCloudDocumentaiV1beta3DocumentPageFormField } from "./googleclouddocumentaiv1beta3documentpageformfield";
import { GoogleCloudDocumentaiV1beta3DocumentPageImage } from "./googleclouddocumentaiv1beta3documentpageimage";
import { GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores } from "./googleclouddocumentaiv1beta3documentpageimagequalityscores";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";
import { GoogleCloudDocumentaiV1beta3DocumentPageLine } from "./googleclouddocumentaiv1beta3documentpageline";
import { GoogleCloudDocumentaiV1beta3DocumentPageParagraph } from "./googleclouddocumentaiv1beta3documentpageparagraph";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";
import { GoogleCloudDocumentaiV1beta3DocumentPageSymbol } from "./googleclouddocumentaiv1beta3documentpagesymbol";
import { GoogleCloudDocumentaiV1beta3DocumentPageTable } from "./googleclouddocumentaiv1beta3documentpagetable";
import { GoogleCloudDocumentaiV1beta3DocumentPageToken } from "./googleclouddocumentaiv1beta3documentpagetoken";
import { GoogleCloudDocumentaiV1beta3DocumentPageMatrix } from "./googleclouddocumentaiv1beta3documentpagematrix";
import { GoogleCloudDocumentaiV1beta3DocumentPageVisualElement } from "./googleclouddocumentaiv1beta3documentpagevisualelement";
/**
 * A page in a Document.
**/
export declare class GoogleCloudDocumentaiV1beta3DocumentPage extends SpeakeasyBase {
    blocks?: GoogleCloudDocumentaiV1beta3DocumentPageBlock[];
    detectedBarcodes?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode[];
    detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    dimension?: GoogleCloudDocumentaiV1beta3DocumentPageDimension;
    formFields?: GoogleCloudDocumentaiV1beta3DocumentPageFormField[];
    image?: GoogleCloudDocumentaiV1beta3DocumentPageImage;
    imageQualityScores?: GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores;
    layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    lines?: GoogleCloudDocumentaiV1beta3DocumentPageLine[];
    pageNumber?: number;
    paragraphs?: GoogleCloudDocumentaiV1beta3DocumentPageParagraph[];
    provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance;
    symbols?: GoogleCloudDocumentaiV1beta3DocumentPageSymbol[];
    tables?: GoogleCloudDocumentaiV1beta3DocumentPageTable[];
    tokens?: GoogleCloudDocumentaiV1beta3DocumentPageToken[];
    transforms?: GoogleCloudDocumentaiV1beta3DocumentPageMatrix[];
    visualElements?: GoogleCloudDocumentaiV1beta3DocumentPageVisualElement[];
}
