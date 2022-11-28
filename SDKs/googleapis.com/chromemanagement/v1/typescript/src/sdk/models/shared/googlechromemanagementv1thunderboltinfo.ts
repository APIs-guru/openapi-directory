import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleChromeManagementV1ThunderboltInfoSecurityLevelEnum {
    ThunderboltSecurityLevelUnspecified = "THUNDERBOLT_SECURITY_LEVEL_UNSPECIFIED",
    ThunderboltSecurityNoneLevel = "THUNDERBOLT_SECURITY_NONE_LEVEL",
    ThunderboltSecurityUserLevel = "THUNDERBOLT_SECURITY_USER_LEVEL",
    ThunderboltSecuritySecureLevel = "THUNDERBOLT_SECURITY_SECURE_LEVEL",
    ThunderboltSecurityDpOnlyLevel = "THUNDERBOLT_SECURITY_DP_ONLY_LEVEL",
    ThunderboltSecurityUsbOnlyLevel = "THUNDERBOLT_SECURITY_USB_ONLY_LEVEL",
    ThunderboltSecurityNoPcieLevel = "THUNDERBOLT_SECURITY_NO_PCIE_LEVEL"
}


// GoogleChromeManagementV1ThunderboltInfo
/** 
 * Thunderbolt bus info. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceSecurityStatus](https://chromeenterprise.google/policies/#ReportDeviceSecurityStatus) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: No * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1ThunderboltInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=securityLevel" })
  securityLevel?: GoogleChromeManagementV1ThunderboltInfoSecurityLevelEnum;
}
