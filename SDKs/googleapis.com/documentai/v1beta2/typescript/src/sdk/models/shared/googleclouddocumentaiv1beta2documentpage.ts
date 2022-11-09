import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=blocks", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageBlock })
  blocks?: GoogleCloudDocumentaiV1beta2DocumentPageBlock[];

  @Metadata({ data: "json, name=detectedBarcodes", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode })
  detectedBarcodes?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode[];

  @Metadata({ data: "json, name=detectedLanguages", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];

  @Metadata({ data: "json, name=dimension" })
  dimension?: GoogleCloudDocumentaiV1beta2DocumentPageDimension;

  @Metadata({ data: "json, name=formFields", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageFormField })
  formFields?: GoogleCloudDocumentaiV1beta2DocumentPageFormField[];

  @Metadata({ data: "json, name=image" })
  image?: GoogleCloudDocumentaiV1beta2DocumentPageImage;

  @Metadata({ data: "json, name=imageQualityScores" })
  imageQualityScores?: GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores;

  @Metadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

  @Metadata({ data: "json, name=lines", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageLine })
  lines?: GoogleCloudDocumentaiV1beta2DocumentPageLine[];

  @Metadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @Metadata({ data: "json, name=paragraphs", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageParagraph })
  paragraphs?: GoogleCloudDocumentaiV1beta2DocumentPageParagraph[];

  @Metadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;

  @Metadata({ data: "json, name=symbols", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageSymbol })
  symbols?: GoogleCloudDocumentaiV1beta2DocumentPageSymbol[];

  @Metadata({ data: "json, name=tables", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageTable })
  tables?: GoogleCloudDocumentaiV1beta2DocumentPageTable[];

  @Metadata({ data: "json, name=tokens", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageToken })
  tokens?: GoogleCloudDocumentaiV1beta2DocumentPageToken[];

  @Metadata({ data: "json, name=transforms", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageMatrix })
  transforms?: GoogleCloudDocumentaiV1beta2DocumentPageMatrix[];

  @Metadata({ data: "json, name=visualElements", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageVisualElement })
  visualElements?: GoogleCloudDocumentaiV1beta2DocumentPageVisualElement[];
}
