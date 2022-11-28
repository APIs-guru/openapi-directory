import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MemInfo
/** 
 * Information about the memory usage of a worker or a container within a worker.
**/
export class MemInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentLimitBytes" })
  currentLimitBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=currentOoms" })
  currentOoms?: string;

  @SpeakeasyMetadata({ data: "json, name=currentRssBytes" })
  currentRssBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=totalGbMs" })
  totalGbMs?: string;
}
