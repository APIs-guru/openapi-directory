import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientCapabilities } from "./clientcapabilities";


export class DeviceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppName" })
  appName?: string;

  @Metadata({ data: "json, name=AppVersion" })
  appVersion?: string;

  @Metadata({ data: "json, name=Capabilities" })
  capabilities?: ClientCapabilities;

  @Metadata({ data: "json, name=DateLastActivity" })
  dateLastActivity?: Date;

  @Metadata({ data: "json, name=IconUrl" })
  iconUrl?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=LastUserId" })
  lastUserId?: string;

  @Metadata({ data: "json, name=LastUserName" })
  lastUserName?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
