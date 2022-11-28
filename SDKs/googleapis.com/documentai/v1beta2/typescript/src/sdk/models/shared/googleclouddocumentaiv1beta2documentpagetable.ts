import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow } from "./googleclouddocumentaiv1beta2documentpagetabletablerow";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";



// GoogleCloudDocumentaiV1beta2DocumentPageTable
/** 
 * A table representation similar to HTML table structure.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bodyRows", elemType: GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow })
  bodyRows?: GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow[];

  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=headerRows", elemType: GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow })
  headerRows?: GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow[];

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;
}
