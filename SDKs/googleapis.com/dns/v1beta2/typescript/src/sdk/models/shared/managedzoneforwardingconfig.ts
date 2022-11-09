import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ManagedZoneForwardingConfigNameServerTarget } from "./managedzoneforwardingconfignameservertarget";


export class ManagedZoneForwardingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=targetNameServers", elemType: shared.ManagedZoneForwardingConfigNameServerTarget })
  targetNameServers?: ManagedZoneForwardingConfigNameServerTarget[];
}
