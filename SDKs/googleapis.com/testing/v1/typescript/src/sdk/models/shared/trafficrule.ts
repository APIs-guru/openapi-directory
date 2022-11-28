import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrafficRule
/** 
 * Network emulation parameters.
**/
export class TrafficRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidth" })
  bandwidth?: number;

  @SpeakeasyMetadata({ data: "json, name=burst" })
  burst?: number;

  @SpeakeasyMetadata({ data: "json, name=delay" })
  delay?: string;

  @SpeakeasyMetadata({ data: "json, name=packetDuplicationRatio" })
  packetDuplicationRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=packetLossRatio" })
  packetLossRatio?: number;
}
