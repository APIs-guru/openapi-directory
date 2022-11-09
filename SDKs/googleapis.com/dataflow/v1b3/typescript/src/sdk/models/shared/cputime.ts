import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CpuTime
/** 
 * Modeled after information exposed by /proc/stat.
**/
export class CpuTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=rate" })
  rate?: number;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=totalMs" })
  totalMs?: string;
}
