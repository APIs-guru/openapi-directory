import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleChromeManagementV1CpuInfoArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED"
,    X64 = "X64"
}


// GoogleChromeManagementV1CpuInfo
/** 
 * CPU specifications for the device * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1CpuInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture?: GoogleChromeManagementV1CpuInfoArchitectureEnum;

  @Metadata({ data: "json, name=keylockerConfigured" })
  keylockerConfigured?: boolean;

  @Metadata({ data: "json, name=keylockerSupported" })
  keylockerSupported?: boolean;

  @Metadata({ data: "json, name=maxClockSpeed" })
  maxClockSpeed?: number;

  @Metadata({ data: "json, name=model" })
  model?: string;
}
