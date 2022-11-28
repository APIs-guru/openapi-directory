import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// GoogleCloudDocumentaiV1beta3DocumentPage
/** 
 * A page in a Document.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocks", elemType: GoogleCloudDocumentaiV1beta3DocumentPageBlock })
  blocks?: GoogleCloudDocumentaiV1beta3DocumentPageBlock[];

  @SpeakeasyMetadata({ data: "json, name=detectedBarcodes", elemType: GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode })
  detectedBarcodes?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode[];

  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: GoogleCloudDocumentaiV1beta3DocumentPageDimension;

  @SpeakeasyMetadata({ data: "json, name=formFields", elemType: GoogleCloudDocumentaiV1beta3DocumentPageFormField })
  formFields?: GoogleCloudDocumentaiV1beta3DocumentPageFormField[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GoogleCloudDocumentaiV1beta3DocumentPageImage;

  @SpeakeasyMetadata({ data: "json, name=imageQualityScores" })
  imageQualityScores?: GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=lines", elemType: GoogleCloudDocumentaiV1beta3DocumentPageLine })
  lines?: GoogleCloudDocumentaiV1beta3DocumentPageLine[];

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=paragraphs", elemType: GoogleCloudDocumentaiV1beta3DocumentPageParagraph })
  paragraphs?: GoogleCloudDocumentaiV1beta3DocumentPageParagraph[];

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance;

  @SpeakeasyMetadata({ data: "json, name=symbols", elemType: GoogleCloudDocumentaiV1beta3DocumentPageSymbol })
  symbols?: GoogleCloudDocumentaiV1beta3DocumentPageSymbol[];

  @SpeakeasyMetadata({ data: "json, name=tables", elemType: GoogleCloudDocumentaiV1beta3DocumentPageTable })
  tables?: GoogleCloudDocumentaiV1beta3DocumentPageTable[];

  @SpeakeasyMetadata({ data: "json, name=tokens", elemType: GoogleCloudDocumentaiV1beta3DocumentPageToken })
  tokens?: GoogleCloudDocumentaiV1beta3DocumentPageToken[];

  @SpeakeasyMetadata({ data: "json, name=transforms", elemType: GoogleCloudDocumentaiV1beta3DocumentPageMatrix })
  transforms?: GoogleCloudDocumentaiV1beta3DocumentPageMatrix[];

  @SpeakeasyMetadata({ data: "json, name=visualElements", elemType: GoogleCloudDocumentaiV1beta3DocumentPageVisualElement })
  visualElements?: GoogleCloudDocumentaiV1beta3DocumentPageVisualElement[];
}
