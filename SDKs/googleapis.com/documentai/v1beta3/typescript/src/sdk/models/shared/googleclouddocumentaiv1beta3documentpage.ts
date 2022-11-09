import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=blocks", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageBlock })
  blocks?: GoogleCloudDocumentaiV1beta3DocumentPageBlock[];

  @Metadata({ data: "json, name=detectedBarcodes", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode })
  detectedBarcodes?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode[];

  @Metadata({ data: "json, name=detectedLanguages", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];

  @Metadata({ data: "json, name=dimension" })
  dimension?: GoogleCloudDocumentaiV1beta3DocumentPageDimension;

  @Metadata({ data: "json, name=formFields", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageFormField })
  formFields?: GoogleCloudDocumentaiV1beta3DocumentPageFormField[];

  @Metadata({ data: "json, name=image" })
  image?: GoogleCloudDocumentaiV1beta3DocumentPageImage;

  @Metadata({ data: "json, name=imageQualityScores" })
  imageQualityScores?: GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores;

  @Metadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;

  @Metadata({ data: "json, name=lines", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageLine })
  lines?: GoogleCloudDocumentaiV1beta3DocumentPageLine[];

  @Metadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @Metadata({ data: "json, name=paragraphs", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageParagraph })
  paragraphs?: GoogleCloudDocumentaiV1beta3DocumentPageParagraph[];

  @Metadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance;

  @Metadata({ data: "json, name=symbols", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageSymbol })
  symbols?: GoogleCloudDocumentaiV1beta3DocumentPageSymbol[];

  @Metadata({ data: "json, name=tables", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageTable })
  tables?: GoogleCloudDocumentaiV1beta3DocumentPageTable[];

  @Metadata({ data: "json, name=tokens", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageToken })
  tokens?: GoogleCloudDocumentaiV1beta3DocumentPageToken[];

  @Metadata({ data: "json, name=transforms", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageMatrix })
  transforms?: GoogleCloudDocumentaiV1beta3DocumentPageMatrix[];

  @Metadata({ data: "json, name=visualElements", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageVisualElement })
  visualElements?: GoogleCloudDocumentaiV1beta3DocumentPageVisualElement[];
}
