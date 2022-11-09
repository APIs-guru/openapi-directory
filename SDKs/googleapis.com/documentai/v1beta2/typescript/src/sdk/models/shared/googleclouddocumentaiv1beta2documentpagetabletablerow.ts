import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell } from "./googleclouddocumentaiv1beta2documentpagetabletablecell";


// GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow
/** 
 * A row of table cells.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=cells", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell })
  cells?: GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell[];
}
