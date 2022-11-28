import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";



// GoogleCloudDocumentaiV1DocumentPageTableTableCell
/** 
 * A cell representation inside the table.
**/
export class GoogleCloudDocumentaiV1DocumentPageTableTableCell extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colSpan" })
  colSpan?: number;

  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=rowSpan" })
  rowSpan?: number;
}
