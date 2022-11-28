import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";



// DataSourceParameter
/** 
 * A parameter in a data source's query. The parameter allows the user to pass in values from the spreadsheet into a query.
**/
export class DataSourceParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=namedRangeId" })
  namedRangeId?: string;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GridRange;
}
