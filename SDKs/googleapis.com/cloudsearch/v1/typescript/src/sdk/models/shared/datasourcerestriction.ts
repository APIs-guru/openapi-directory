import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilterOptions } from "./filteroptions";
import { Source } from "./source";


// DataSourceRestriction
/** 
 * Restriction on Datasource.
**/
export class DataSourceRestriction extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterOptions", elemType: shared.FilterOptions })
  filterOptions?: FilterOptions[];

  @Metadata({ data: "json, name=source" })
  source?: Source;
}
