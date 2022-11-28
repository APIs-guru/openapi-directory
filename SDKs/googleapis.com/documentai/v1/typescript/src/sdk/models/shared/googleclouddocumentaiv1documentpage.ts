import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// GoogleCloudDocumentaiV1DocumentPage
/** 
 * A page in a Document.
**/
export class GoogleCloudDocumentaiV1DocumentPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocks", elemType: GoogleCloudDocumentaiV1DocumentPageBlock })
  blocks?: GoogleCloudDocumentaiV1DocumentPageBlock[];

  @SpeakeasyMetadata({ data: "json, name=detectedBarcodes", elemType: GoogleCloudDocumentaiV1DocumentPageDetectedBarcode })
  detectedBarcodes?: GoogleCloudDocumentaiV1DocumentPageDetectedBarcode[];

  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: GoogleCloudDocumentaiV1DocumentPageDimension;

  @SpeakeasyMetadata({ data: "json, name=formFields", elemType: GoogleCloudDocumentaiV1DocumentPageFormField })
  formFields?: GoogleCloudDocumentaiV1DocumentPageFormField[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GoogleCloudDocumentaiV1DocumentPageImage;

  @SpeakeasyMetadata({ data: "json, name=imageQualityScores" })
  imageQualityScores?: GoogleCloudDocumentaiV1DocumentPageImageQualityScores;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=lines", elemType: GoogleCloudDocumentaiV1DocumentPageLine })
  lines?: GoogleCloudDocumentaiV1DocumentPageLine[];

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=paragraphs", elemType: GoogleCloudDocumentaiV1DocumentPageParagraph })
  paragraphs?: GoogleCloudDocumentaiV1DocumentPageParagraph[];

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance;

  @SpeakeasyMetadata({ data: "json, name=symbols", elemType: GoogleCloudDocumentaiV1DocumentPageSymbol })
  symbols?: GoogleCloudDocumentaiV1DocumentPageSymbol[];

  @SpeakeasyMetadata({ data: "json, name=tables", elemType: GoogleCloudDocumentaiV1DocumentPageTable })
  tables?: GoogleCloudDocumentaiV1DocumentPageTable[];

  @SpeakeasyMetadata({ data: "json, name=tokens", elemType: GoogleCloudDocumentaiV1DocumentPageToken })
  tokens?: GoogleCloudDocumentaiV1DocumentPageToken[];

  @SpeakeasyMetadata({ data: "json, name=transforms", elemType: GoogleCloudDocumentaiV1DocumentPageMatrix })
  transforms?: GoogleCloudDocumentaiV1DocumentPageMatrix[];

  @SpeakeasyMetadata({ data: "json, name=visualElements", elemType: GoogleCloudDocumentaiV1DocumentPageVisualElement })
  visualElements?: GoogleCloudDocumentaiV1DocumentPageVisualElement[];
}
