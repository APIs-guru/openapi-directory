import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageBlock } from "./googleclouddocumentaiv1documentpageblock";
import { GoogleCloudDocumentaiV1DocumentPageDetectedBarcode } from "./googleclouddocumentaiv1documentpagedetectedbarcode";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageDimension } from "./googleclouddocumentaiv1documentpagedimension";
import { GoogleCloudDocumentaiV1DocumentPageFormField } from "./googleclouddocumentaiv1documentpageformfield";
import { GoogleCloudDocumentaiV1DocumentPageImage } from "./googleclouddocumentaiv1documentpageimage";
import { GoogleCloudDocumentaiV1DocumentPageImageQualityScores } from "./googleclouddocumentaiv1documentpageimagequalityscores";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
import { GoogleCloudDocumentaiV1DocumentPageLine } from "./googleclouddocumentaiv1documentpageline";
import { GoogleCloudDocumentaiV1DocumentPageParagraph } from "./googleclouddocumentaiv1documentpageparagraph";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
import { GoogleCloudDocumentaiV1DocumentPageSymbol } from "./googleclouddocumentaiv1documentpagesymbol";
import { GoogleCloudDocumentaiV1DocumentPageTable } from "./googleclouddocumentaiv1documentpagetable";
import { GoogleCloudDocumentaiV1DocumentPageToken } from "./googleclouddocumentaiv1documentpagetoken";
import { GoogleCloudDocumentaiV1DocumentPageMatrix } from "./googleclouddocumentaiv1documentpagematrix";
import { GoogleCloudDocumentaiV1DocumentPageVisualElement } from "./googleclouddocumentaiv1documentpagevisualelement";
/**
 * A page in a Document.
**/
export declare class GoogleCloudDocumentaiV1DocumentPage extends SpeakeasyBase {
    blocks?: GoogleCloudDocumentaiV1DocumentPageBlock[];
    detectedBarcodes?: GoogleCloudDocumentaiV1DocumentPageDetectedBarcode[];
    detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];
    dimension?: GoogleCloudDocumentaiV1DocumentPageDimension;
    formFields?: GoogleCloudDocumentaiV1DocumentPageFormField[];
    image?: GoogleCloudDocumentaiV1DocumentPageImage;
    imageQualityScores?: GoogleCloudDocumentaiV1DocumentPageImageQualityScores;
    layout?: GoogleCloudDocumentaiV1DocumentPageLayout;
    lines?: GoogleCloudDocumentaiV1DocumentPageLine[];
    pageNumber?: number;
    paragraphs?: GoogleCloudDocumentaiV1DocumentPageParagraph[];
    provenance?: GoogleCloudDocumentaiV1DocumentProvenance;
    symbols?: GoogleCloudDocumentaiV1DocumentPageSymbol[];
    tables?: GoogleCloudDocumentaiV1DocumentPageTable[];
    tokens?: GoogleCloudDocumentaiV1DocumentPageToken[];
    transforms?: GoogleCloudDocumentaiV1DocumentPageMatrix[];
    visualElements?: GoogleCloudDocumentaiV1DocumentPageVisualElement[];
}
