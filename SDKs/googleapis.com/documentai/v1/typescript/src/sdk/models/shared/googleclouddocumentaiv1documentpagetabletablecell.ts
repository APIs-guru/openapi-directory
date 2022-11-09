import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";


// GoogleCloudDocumentaiV1DocumentPageTableTableCell
/** 
 * A cell representation inside the table.
**/
export class GoogleCloudDocumentaiV1DocumentPageTableTableCell extends SpeakeasyBase {
  @Metadata({ data: "json, name=colSpan" })
  colSpan?: number;

  @Metadata({ data: "json, name=detectedLanguages", elemType: shared.GoogleCloudDocumentaiV1DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];

  @Metadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout;

  @Metadata({ data: "json, name=rowSpan" })
  rowSpan?: number;
}
