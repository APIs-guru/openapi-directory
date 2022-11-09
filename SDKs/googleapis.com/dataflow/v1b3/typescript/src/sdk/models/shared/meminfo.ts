import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MemInfo
/** 
 * Information about the memory usage of a worker or a container within a worker.
**/
export class MemInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentLimitBytes" })
  currentLimitBytes?: string;

  @Metadata({ data: "json, name=currentOoms" })
  currentOoms?: string;

  @Metadata({ data: "json, name=currentRssBytes" })
  currentRssBytes?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=totalGbMs" })
  totalGbMs?: string;
}
