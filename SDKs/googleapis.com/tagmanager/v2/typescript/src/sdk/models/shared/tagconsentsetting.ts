import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";


export enum TagConsentSettingConsentStatusEnum {
    NotSet = "notSet",
    NotNeeded = "notNeeded",
    Needed = "needed"
}


export class TagConsentSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentStatus" })
  consentStatus?: TagConsentSettingConsentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=consentType" })
  consentType?: Parameter;
}
