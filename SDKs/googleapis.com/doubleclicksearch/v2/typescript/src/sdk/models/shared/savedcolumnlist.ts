import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SavedColumn } from "./savedcolumn";



// SavedColumnList
/** 
 * A list of saved columns. Advertisers create saved columns to report on Floodlight activities, Google Analytics goals, or custom KPIs. To request reports with saved columns, you'll need the saved column names that are available from this list.
**/
export class SavedColumnList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: SavedColumn })
  items?: SavedColumn[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
