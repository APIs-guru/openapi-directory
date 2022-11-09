import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum {
    InvalidReasonUnspecified = "INVALID_REASON_UNSPECIFIED"
,    UnknownInvalidReason = "UNKNOWN_INVALID_REASON"
,    Malformed = "MALFORMED"
,    Expired = "EXPIRED"
,    Dupe = "DUPE"
,    Missing = "MISSING"
,    BrowserError = "BROWSER_ERROR"
}


export class GoogleCloudRecaptchaenterpriseV1TokenProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=invalidReason" })
  invalidReason?: GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum;

  @Metadata({ data: "json, name=valid" })
  valid?: boolean;
}
