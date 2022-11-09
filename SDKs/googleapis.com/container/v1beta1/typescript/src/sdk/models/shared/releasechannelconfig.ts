import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AvailableVersion } from "./availableversion";

export enum ReleaseChannelConfigChannelEnum {
    Unspecified = "UNSPECIFIED"
,    Rapid = "RAPID"
,    Regular = "REGULAR"
,    Stable = "STABLE"
}


// ReleaseChannelConfig
/** 
 * ReleaseChannelConfig exposes configuration for a release channel.
**/
export class ReleaseChannelConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableVersions", elemType: shared.AvailableVersion })
  availableVersions?: AvailableVersion[];

  @Metadata({ data: "json, name=channel" })
  channel?: ReleaseChannelConfigChannelEnum;

  @Metadata({ data: "json, name=defaultVersion" })
  defaultVersion?: string;

  @Metadata({ data: "json, name=validVersions" })
  validVersions?: string[];
}
