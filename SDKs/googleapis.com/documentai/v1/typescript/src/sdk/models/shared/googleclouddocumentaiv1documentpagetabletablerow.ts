import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageTableTableCell } from "./googleclouddocumentaiv1documentpagetabletablecell";



// GoogleCloudDocumentaiV1DocumentPageTableTableRow
/** 
 * A row of table cells.
**/
export class GoogleCloudDocumentaiV1DocumentPageTableTableRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cells", elemType: GoogleCloudDocumentaiV1DocumentPageTableTableCell })
  cells?: GoogleCloudDocumentaiV1DocumentPageTableTableCell[];
}
