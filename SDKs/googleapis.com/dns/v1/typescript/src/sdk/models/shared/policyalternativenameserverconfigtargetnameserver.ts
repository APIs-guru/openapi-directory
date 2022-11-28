import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum {
    Default = "default",
    Private = "private"
}


export class PolicyAlternativeNameServerConfigTargetNameServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=forwardingPath" })
  forwardingPath?: PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum;

  @SpeakeasyMetadata({ data: "json, name=ipv4Address" })
  ipv4Address?: string;

  @SpeakeasyMetadata({ data: "json, name=ipv6Address" })
  ipv6Address?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
