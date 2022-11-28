import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";



// TableRange
/** 
 * A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with location = (0, 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ]
**/
export class TableRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnSpan" })
  columnSpan?: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: TableCellLocation;

  @SpeakeasyMetadata({ data: "json, name=rowSpan" })
  rowSpan?: number;
}
