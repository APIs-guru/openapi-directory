import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell } from "./googleclouddocumentaiv1beta3documentpagetabletablecell";


// GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow
/** 
 * A row of table cells.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=cells", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell })
  cells?: GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell[];
}
