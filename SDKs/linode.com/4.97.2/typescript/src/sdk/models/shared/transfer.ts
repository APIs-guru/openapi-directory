import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Transfer
/** 
 * An object representing your network utilization for the current month, in Gigabytes.
 * 
**/
export class Transfer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billable" })
  billable?: number;

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: number;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used?: number;
}
