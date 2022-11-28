import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SystemInfoRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileEncoding" })
  fileEncoding?: string;

  @SpeakeasyMetadata({ data: "json, name=javaHome" })
  javaHome?: string;

  @SpeakeasyMetadata({ data: "json, name=javaRuntime" })
  javaRuntime?: string;

  @SpeakeasyMetadata({ data: "json, name=javaVendor" })
  javaVendor?: string;

  @SpeakeasyMetadata({ data: "json, name=javaVersion" })
  javaVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=javaVm" })
  javaVm?: string;

  @SpeakeasyMetadata({ data: "json, name=javaVmVersion" })
  javaVmVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=osArchitecture" })
  osArchitecture?: string;

  @SpeakeasyMetadata({ data: "json, name=osName" })
  osName?: string;

  @SpeakeasyMetadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=serverTime" })
  serverTime?: string;

  @SpeakeasyMetadata({ data: "json, name=uptime" })
  uptime?: string;

  @SpeakeasyMetadata({ data: "json, name=uptimeMillis" })
  uptimeMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=userDir" })
  userDir?: string;

  @SpeakeasyMetadata({ data: "json, name=userLocale" })
  userLocale?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;

  @SpeakeasyMetadata({ data: "json, name=userTimezone" })
  userTimezone?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
