import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum {
    Default = "DEFAULT"
,    Private = "PRIVATE"
}


export class ManagedZoneForwardingConfigNameServerTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=forwardingPath" })
  forwardingPath?: ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum;

  @Metadata({ data: "json, name=ipv4Address" })
  ipv4Address?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
