import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// PinTableHeaderRowsRequest
/** 
 * Updates the number of pinned table header rows in a table.
**/
export class PinTableHeaderRowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pinnedHeaderRowsCount" })
  pinnedHeaderRowsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=tableStartLocation" })
  tableStartLocation?: Location;
}
