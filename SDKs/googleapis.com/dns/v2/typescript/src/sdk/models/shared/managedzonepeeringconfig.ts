import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedZonePeeringConfigTargetNetwork } from "./managedzonepeeringconfigtargetnetwork";



export class ManagedZonePeeringConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=targetNetwork" })
  targetNetwork?: ManagedZonePeeringConfigTargetNetwork;
}
