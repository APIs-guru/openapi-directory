import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrafficRule
/** 
 * Network emulation parameters.
**/
export class TrafficRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidth" })
  bandwidth?: number;

  @Metadata({ data: "json, name=burst" })
  burst?: number;

  @Metadata({ data: "json, name=delay" })
  delay?: string;

  @Metadata({ data: "json, name=packetDuplicationRatio" })
  packetDuplicationRatio?: number;

  @Metadata({ data: "json, name=packetLossRatio" })
  packetLossRatio?: number;
}
