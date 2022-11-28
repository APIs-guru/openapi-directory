import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CpuTime
/** 
 * Modeled after information exposed by /proc/stat.
**/
export class CpuTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=totalMs" })
  totalMs?: string;
}
