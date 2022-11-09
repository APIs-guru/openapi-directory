import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=blocks", elemType: shared.GoogleCloudDocumentaiV1DocumentPageBlock })
  blocks?: GoogleCloudDocumentaiV1DocumentPageBlock[];

  @Metadata({ data: "json, name=detectedBarcodes", elemType: shared.GoogleCloudDocumentaiV1DocumentPageDetectedBarcode })
  detectedBarcodes?: GoogleCloudDocumentaiV1DocumentPageDetectedBarcode[];

  @Metadata({ data: "json, name=detectedLanguages", elemType: shared.GoogleCloudDocumentaiV1DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];

  @Metadata({ data: "json, name=dimension" })
  dimension?: GoogleCloudDocumentaiV1DocumentPageDimension;

  @Metadata({ data: "json, name=formFields", elemType: shared.GoogleCloudDocumentaiV1DocumentPageFormField })
  formFields?: GoogleCloudDocumentaiV1DocumentPageFormField[];

  @Metadata({ data: "json, name=image" })
  image?: GoogleCloudDocumentaiV1DocumentPageImage;

  @Metadata({ data: "json, name=imageQualityScores" })
  imageQualityScores?: GoogleCloudDocumentaiV1DocumentPageImageQualityScores;

  @Metadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout;

  @Metadata({ data: "json, name=lines", elemType: shared.GoogleCloudDocumentaiV1DocumentPageLine })
  lines?: GoogleCloudDocumentaiV1DocumentPageLine[];

  @Metadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @Metadata({ data: "json, name=paragraphs", elemType: shared.GoogleCloudDocumentaiV1DocumentPageParagraph })
  paragraphs?: GoogleCloudDocumentaiV1DocumentPageParagraph[];

  @Metadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance;

  @Metadata({ data: "json, name=symbols", elemType: shared.GoogleCloudDocumentaiV1DocumentPageSymbol })
  symbols?: GoogleCloudDocumentaiV1DocumentPageSymbol[];

  @Metadata({ data: "json, name=tables", elemType: shared.GoogleCloudDocumentaiV1DocumentPageTable })
  tables?: GoogleCloudDocumentaiV1DocumentPageTable[];

  @Metadata({ data: "json, name=tokens", elemType: shared.GoogleCloudDocumentaiV1DocumentPageToken })
  tokens?: GoogleCloudDocumentaiV1DocumentPageToken[];

  @Metadata({ data: "json, name=transforms", elemType: shared.GoogleCloudDocumentaiV1DocumentPageMatrix })
  transforms?: GoogleCloudDocumentaiV1DocumentPageMatrix[];

  @Metadata({ data: "json, name=visualElements", elemType: shared.GoogleCloudDocumentaiV1DocumentPageVisualElement })
  visualElements?: GoogleCloudDocumentaiV1DocumentPageVisualElement[];
}
