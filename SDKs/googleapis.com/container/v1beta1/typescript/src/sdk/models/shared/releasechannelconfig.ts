import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailableVersion } from "./availableversion";


export enum ReleaseChannelConfigChannelEnum {
    Unspecified = "UNSPECIFIED",
    Rapid = "RAPID",
    Regular = "REGULAR",
    Stable = "STABLE"
}


// ReleaseChannelConfig
/** 
 * ReleaseChannelConfig exposes configuration for a release channel.
**/
export class ReleaseChannelConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableVersions", elemType: AvailableVersion })
  availableVersions?: AvailableVersion[];

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: ReleaseChannelConfigChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultVersion" })
  defaultVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=validVersions" })
  validVersions?: string[];
}
