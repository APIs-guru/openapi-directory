import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplicatingStep
/** 
 * ReplicatingStep contains specific step details.
**/
export class ReplicatingStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastThirtyMinutesAverageBytesPerSecond" })
  lastThirtyMinutesAverageBytesPerSecond?: string;

  @Metadata({ data: "json, name=lastTwoMinutesAverageBytesPerSecond" })
  lastTwoMinutesAverageBytesPerSecond?: string;

  @Metadata({ data: "json, name=replicatedBytes" })
  replicatedBytes?: string;

  @Metadata({ data: "json, name=totalBytes" })
  totalBytes?: string;
}
