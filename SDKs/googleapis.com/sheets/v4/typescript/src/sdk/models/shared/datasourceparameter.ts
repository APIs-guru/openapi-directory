import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridRange } from "./gridrange";


// DataSourceParameter
/** 
 * A parameter in a data source's query. The parameter allows the user to pass in values from the spreadsheet into a query.
**/
export class DataSourceParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=namedRangeId" })
  namedRangeId?: string;

  @Metadata({ data: "json, name=range" })
  range?: GridRange;
}
