import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageTableTableRow } from "./googleclouddocumentaiv1documentpagetabletablerow";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";



// GoogleCloudDocumentaiV1DocumentPageTable
/** 
 * A table representation similar to HTML table structure.
**/
export class GoogleCloudDocumentaiV1DocumentPageTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bodyRows", elemType: GoogleCloudDocumentaiV1DocumentPageTableTableRow })
  bodyRows?: GoogleCloudDocumentaiV1DocumentPageTableTableRow[];

  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage })
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];

  @SpeakeasyMetadata({ data: "json, name=headerRows", elemType: GoogleCloudDocumentaiV1DocumentPageTableTableRow })
  headerRows?: GoogleCloudDocumentaiV1DocumentPageTableTableRow[];

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout;

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance;
}
