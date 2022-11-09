import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Transfer
/** 
 * An object representing your network utilization for the current month, in Gigabytes.
 * 
**/
export class Transfer extends SpeakeasyBase {
  @Metadata({ data: "json, name=billable" })
  billable?: number;

  @Metadata({ data: "json, name=quota" })
  quota?: number;

  @Metadata({ data: "json, name=used" })
  used?: number;
}
