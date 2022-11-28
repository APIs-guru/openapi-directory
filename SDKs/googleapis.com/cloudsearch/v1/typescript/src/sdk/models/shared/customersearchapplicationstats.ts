import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";



// CustomerSearchApplicationStats
/** 
 * Search application stats for a customer for the given date.
**/
export class CustomerSearchApplicationStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;
}
