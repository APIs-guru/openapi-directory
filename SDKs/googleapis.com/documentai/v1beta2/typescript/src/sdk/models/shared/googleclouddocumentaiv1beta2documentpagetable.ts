import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow } from "./googleclouddocumentaiv1beta2documentpagetabletablerow";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow } from "./googleclouddocumentaiv1beta2documentpagetabletablerow";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";


// GoogleCloudDocumentaiV1beta2DocumentPageTable
/** 
 * A table representation similar to HTML table structure.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=bodyRows", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow })
  bodyRows?: GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow[];

  @Metadata({ data: "json, name=detectedLanguages", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];

  @Metadata({ data: "json, name=headerRows", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow })
  headerRows?: GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow[];

  @Metadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
}
