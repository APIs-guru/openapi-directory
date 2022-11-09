import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Row
/** 
 * A row of altitude points in the elevation grid, ordered from west to east.
**/
export class Row extends SpeakeasyBase {
  @Metadata({ data: "json, name=altitudeDiffs" })
  altitudeDiffs?: number[];
}
