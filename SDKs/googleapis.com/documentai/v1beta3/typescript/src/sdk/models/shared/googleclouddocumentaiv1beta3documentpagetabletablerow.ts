import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell } from "./googleclouddocumentaiv1beta3documentpagetabletablecell";



// GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow
/** 
 * A row of table cells.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cells", elemType: GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell })
  cells?: GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell[];
}
