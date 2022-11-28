import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";



// GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell
/** 
 * A cell representation inside the table.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colSpan" })
  colSpan?: number;

  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=rowSpan" })
  rowSpan?: number;
}
