import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow } from "./googleclouddocumentaiv1beta3documentpagetabletablerow";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";



// GoogleCloudDocumentaiV1beta3DocumentPageTable
/** 
 * A table representation similar to HTML table structure.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bodyRows", elemType: GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow })
  bodyRows?: GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow[];

  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=headerRows", elemType: GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow })
  headerRows?: GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow[];

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance;
}
