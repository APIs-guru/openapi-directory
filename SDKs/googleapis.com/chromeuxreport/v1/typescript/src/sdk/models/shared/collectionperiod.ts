import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";



// CollectionPeriod
/** 
 * The collection period is a date range which includes the `first` and `last` day.
**/
export class CollectionPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstDate" })
  firstDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastDate" })
  lastDate?: Date;
}
