import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1DocumentPageTableTableRow } from "./googleclouddocumentaiv1documentpagetabletablerow";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageTableTableRow } from "./googleclouddocumentaiv1documentpagetabletablerow";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";


// GoogleCloudDocumentaiV1DocumentPageTable
/** 
 * A table representation similar to HTML table structure.
**/
export class GoogleCloudDocumentaiV1DocumentPageTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=bodyRows", elemType: shared.GoogleCloudDocumentaiV1DocumentPageTableTableRow })
  bodyRows?: GoogleCloudDocumentaiV1DocumentPageTableTableRow[];

  @Metadata({ data: "json, name=detectedLanguages", elemType: shared.GoogleCloudDocumentaiV1DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];

  @Metadata({ data: "json, name=headerRows", elemType: shared.GoogleCloudDocumentaiV1DocumentPageTableTableRow })
  headerRows?: GoogleCloudDocumentaiV1DocumentPageTableTableRow[];

  @Metadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout;
}
