import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell } from "./googleclouddocumentaiv1beta2documentpagetabletablecell";



// GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow
/** 
 * A row of table cells.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cells", elemType: GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell })
  cells?: GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell[];
}
