import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";


// PinTableHeaderRowsRequest
/** 
 * Updates the number of pinned table header rows in a table.
**/
export class PinTableHeaderRowsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pinnedHeaderRowsCount" })
  pinnedHeaderRowsCount?: number;

  @Metadata({ data: "json, name=tableStartLocation" })
  tableStartLocation?: Location;
}
