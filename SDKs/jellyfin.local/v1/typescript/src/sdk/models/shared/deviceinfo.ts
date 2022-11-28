import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientCapabilities } from "./clientcapabilities";



export class DeviceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppName" })
  appName?: string;

  @SpeakeasyMetadata({ data: "json, name=AppVersion" })
  appVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Capabilities" })
  capabilities?: ClientCapabilities;

  @SpeakeasyMetadata({ data: "json, name=DateLastActivity" })
  dateLastActivity?: Date;

  @SpeakeasyMetadata({ data: "json, name=IconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUserId" })
  lastUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUserName" })
  lastUserName?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
