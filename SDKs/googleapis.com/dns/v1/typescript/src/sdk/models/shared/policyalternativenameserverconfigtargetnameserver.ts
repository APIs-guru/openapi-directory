import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum {
    Default = "default"
,    Private = "private"
}


export class PolicyAlternativeNameServerConfigTargetNameServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=forwardingPath" })
  forwardingPath?: PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum;

  @Metadata({ data: "json, name=ipv4Address" })
  ipv4Address?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
