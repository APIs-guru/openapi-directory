import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoogleCloudRecaptchaenterpriseV1Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=expectedAction" })
  expectedAction?: string;

  @Metadata({ data: "json, name=hashedAccountId" })
  hashedAccountId?: string;

  @Metadata({ data: "json, name=siteKey" })
  siteKey?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=userAgent" })
  userAgent?: string;

  @Metadata({ data: "json, name=userIpAddress" })
  userIpAddress?: string;
}
