import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedZoneForwardingConfigNameServerTarget } from "./managedzoneforwardingconfignameservertarget";



export class ManagedZoneForwardingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=targetNameServers", elemType: ManagedZoneForwardingConfigNameServerTarget })
  targetNameServers?: ManagedZoneForwardingConfigNameServerTarget[];
}
