import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow } from "./googleclouddocumentaiv1beta3documentpagetabletablerow";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow } from "./googleclouddocumentaiv1beta3documentpagetabletablerow";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";


// GoogleCloudDocumentaiV1beta3DocumentPageTable
/** 
 * A table representation similar to HTML table structure.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=bodyRows", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow })
  bodyRows?: GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow[];

  @Metadata({ data: "json, name=detectedLanguages", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];

  @Metadata({ data: "json, name=headerRows", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow })
  headerRows?: GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow[];

  @Metadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
}
