import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudRecaptchaenterpriseV1Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expectedAction" })
  expectedAction?: string;

  @SpeakeasyMetadata({ data: "json, name=hashedAccountId" })
  hashedAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=siteKey" })
  siteKey?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=userAgent" })
  userAgent?: string;

  @SpeakeasyMetadata({ data: "json, name=userIpAddress" })
  userIpAddress?: string;
}
