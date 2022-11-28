import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";



// GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell
/** 
 * A cell representation inside the table.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colSpan" })
  colSpan?: number;

  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=rowSpan" })
  rowSpan?: number;
}
