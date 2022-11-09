import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Parameter } from "./parameter";

export enum TagConsentSettingConsentStatusEnum {
    NotSet = "notSet"
,    NotNeeded = "notNeeded"
,    Needed = "needed"
}


export class TagConsentSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentStatus" })
  consentStatus?: TagConsentSettingConsentStatusEnum;

  @Metadata({ data: "json, name=consentType" })
  consentType?: Parameter;
}
