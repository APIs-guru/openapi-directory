import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Row
/** 
 * A row of altitude points in the elevation grid, ordered from west to east.
**/
export class Row extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=altitudeDiffs" })
  altitudeDiffs?: number[];
}
