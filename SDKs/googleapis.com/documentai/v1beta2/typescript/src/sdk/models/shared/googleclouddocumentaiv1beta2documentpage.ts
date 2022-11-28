import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// GoogleCloudDocumentaiV1beta2DocumentPage
/** 
 * A page in a Document.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocks", elemType: GoogleCloudDocumentaiV1beta2DocumentPageBlock })
  blocks?: GoogleCloudDocumentaiV1beta2DocumentPageBlock[];

  @SpeakeasyMetadata({ data: "json, name=detectedBarcodes", elemType: GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode })
  detectedBarcodes?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode[];

  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: GoogleCloudDocumentaiV1beta2DocumentPageDimension;

  @SpeakeasyMetadata({ data: "json, name=formFields", elemType: GoogleCloudDocumentaiV1beta2DocumentPageFormField })
  formFields?: GoogleCloudDocumentaiV1beta2DocumentPageFormField[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GoogleCloudDocumentaiV1beta2DocumentPageImage;

  @SpeakeasyMetadata({ data: "json, name=imageQualityScores" })
  imageQualityScores?: GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=lines", elemType: GoogleCloudDocumentaiV1beta2DocumentPageLine })
  lines?: GoogleCloudDocumentaiV1beta2DocumentPageLine[];

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=paragraphs", elemType: GoogleCloudDocumentaiV1beta2DocumentPageParagraph })
  paragraphs?: GoogleCloudDocumentaiV1beta2DocumentPageParagraph[];

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;

  @SpeakeasyMetadata({ data: "json, name=symbols", elemType: GoogleCloudDocumentaiV1beta2DocumentPageSymbol })
  symbols?: GoogleCloudDocumentaiV1beta2DocumentPageSymbol[];

  @SpeakeasyMetadata({ data: "json, name=tables", elemType: GoogleCloudDocumentaiV1beta2DocumentPageTable })
  tables?: GoogleCloudDocumentaiV1beta2DocumentPageTable[];

  @SpeakeasyMetadata({ data: "json, name=tokens", elemType: GoogleCloudDocumentaiV1beta2DocumentPageToken })
  tokens?: GoogleCloudDocumentaiV1beta2DocumentPageToken[];

  @SpeakeasyMetadata({ data: "json, name=transforms", elemType: GoogleCloudDocumentaiV1beta2DocumentPageMatrix })
  transforms?: GoogleCloudDocumentaiV1beta2DocumentPageMatrix[];

  @SpeakeasyMetadata({ data: "json, name=visualElements", elemType: GoogleCloudDocumentaiV1beta2DocumentPageVisualElement })
  visualElements?: GoogleCloudDocumentaiV1beta2DocumentPageVisualElement[];
}
