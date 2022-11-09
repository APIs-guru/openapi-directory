import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";
import { Date } from "./date";


// CollectionPeriod
/** 
 * The collection period is a date range which includes the `first` and `last` day.
**/
export class CollectionPeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstDate" })
  firstDate?: Date;

  @Metadata({ data: "json, name=lastDate" })
  lastDate?: Date;
}
