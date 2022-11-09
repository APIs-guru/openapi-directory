import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManagedZonePeeringConfigTargetNetwork } from "./managedzonepeeringconfigtargetnetwork";


export class ManagedZonePeeringConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=targetNetwork" })
  targetNetwork?: ManagedZonePeeringConfigTargetNetwork;
}
