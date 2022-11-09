import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthenticationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=AppName" })
  appName?: string;

  @Metadata({ data: "json, name=AppVersion" })
  appVersion?: string;

  @Metadata({ data: "json, name=DateCreated" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=DateLastActivity" })
  dateLastActivity?: Date;

  @Metadata({ data: "json, name=DateRevoked" })
  dateRevoked?: Date;

  @Metadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=DeviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=IsActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=UserId" })
  userId?: string;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;
}
