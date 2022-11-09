import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1DocumentPageTableTableCell } from "./googleclouddocumentaiv1documentpagetabletablecell";


// GoogleCloudDocumentaiV1DocumentPageTableTableRow
/** 
 * A row of table cells.
**/
export class GoogleCloudDocumentaiV1DocumentPageTableTableRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=cells", elemType: shared.GoogleCloudDocumentaiV1DocumentPageTableTableCell })
  cells?: GoogleCloudDocumentaiV1DocumentPageTableTableCell[];
}
