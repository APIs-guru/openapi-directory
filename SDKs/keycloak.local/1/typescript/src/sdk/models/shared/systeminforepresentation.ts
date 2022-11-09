import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SystemInfoRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileEncoding" })
  fileEncoding?: string;

  @Metadata({ data: "json, name=javaHome" })
  javaHome?: string;

  @Metadata({ data: "json, name=javaRuntime" })
  javaRuntime?: string;

  @Metadata({ data: "json, name=javaVendor" })
  javaVendor?: string;

  @Metadata({ data: "json, name=javaVersion" })
  javaVersion?: string;

  @Metadata({ data: "json, name=javaVm" })
  javaVm?: string;

  @Metadata({ data: "json, name=javaVmVersion" })
  javaVmVersion?: string;

  @Metadata({ data: "json, name=osArchitecture" })
  osArchitecture?: string;

  @Metadata({ data: "json, name=osName" })
  osName?: string;

  @Metadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @Metadata({ data: "json, name=serverTime" })
  serverTime?: string;

  @Metadata({ data: "json, name=uptime" })
  uptime?: string;

  @Metadata({ data: "json, name=uptimeMillis" })
  uptimeMillis?: number;

  @Metadata({ data: "json, name=userDir" })
  userDir?: string;

  @Metadata({ data: "json, name=userLocale" })
  userLocale?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;

  @Metadata({ data: "json, name=userTimezone" })
  userTimezone?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
