import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum {
    InvalidReasonUnspecified = "INVALID_REASON_UNSPECIFIED",
    UnknownInvalidReason = "UNKNOWN_INVALID_REASON",
    Malformed = "MALFORMED",
    Expired = "EXPIRED",
    Dupe = "DUPE",
    Missing = "MISSING",
    BrowserError = "BROWSER_ERROR"
}


export class GoogleCloudRecaptchaenterpriseV1TokenProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=androidPackageName" })
  androidPackageName?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=invalidReason" })
  invalidReason?: GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=iosBundleId" })
  iosBundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid?: boolean;
}
