import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterOptions } from "./filteroptions";
import { Source } from "./source";



// DataSourceRestriction
/** 
 * Restriction on Datasource.
**/
export class DataSourceRestriction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterOptions", elemType: FilterOptions })
  filterOptions?: FilterOptions[];

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;
}
