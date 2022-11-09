import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReleaseChannelChannelEnum {
    Unspecified = "UNSPECIFIED"
,    Rapid = "RAPID"
,    Regular = "REGULAR"
,    Stable = "STABLE"
}


// ReleaseChannel
/** 
 * ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled.
**/
export class ReleaseChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: ReleaseChannelChannelEnum;
}
