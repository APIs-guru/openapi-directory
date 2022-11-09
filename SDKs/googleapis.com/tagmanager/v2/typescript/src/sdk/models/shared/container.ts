import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ContainerUsageContextEnum {
    UsageContextUnspecified = "usageContextUnspecified"
,    Web = "web"
,    Android = "android"
,    Ios = "ios"
,    AndroidSdk5 = "androidSdk5"
,    IosSdk5 = "iosSdk5"
,    Amp = "amp"
,    Server = "server"
}


// Container
/** 
 * Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions.
**/
export class Container extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=domainName" })
  domainName?: string[];

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=publicId" })
  publicId?: string;

  @Metadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;

  @Metadata({ data: "json, name=usageContext" })
  usageContext?: ContainerUsageContextEnum[];
}
