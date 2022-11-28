import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplicatingStep
/** 
 * ReplicatingStep contains specific step details.
**/
export class ReplicatingStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastThirtyMinutesAverageBytesPerSecond" })
  lastThirtyMinutesAverageBytesPerSecond?: string;

  @SpeakeasyMetadata({ data: "json, name=lastTwoMinutesAverageBytesPerSecond" })
  lastTwoMinutesAverageBytesPerSecond?: string;

  @SpeakeasyMetadata({ data: "json, name=replicatedBytes" })
  replicatedBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=totalBytes" })
  totalBytes?: string;
}
