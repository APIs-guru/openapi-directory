import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";


// GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell
/** 
 * A cell representation inside the table.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell extends SpeakeasyBase {
  @Metadata({ data: "json, name=colSpan" })
  colSpan?: number;

  @Metadata({ data: "json, name=detectedLanguages", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];

  @Metadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;

  @Metadata({ data: "json, name=rowSpan" })
  rowSpan?: number;
}
