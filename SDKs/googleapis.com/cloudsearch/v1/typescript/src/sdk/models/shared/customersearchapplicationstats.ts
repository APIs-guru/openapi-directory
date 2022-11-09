import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";


// CustomerSearchApplicationStats
/** 
 * Search application stats for a customer for the given date.
**/
export class CustomerSearchApplicationStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=date" })
  date?: Date;
}
