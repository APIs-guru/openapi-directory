import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerFeatures } from "./containerfeatures";


export enum ContainerUsageContextEnum {
    UsageContextUnspecified = "usageContextUnspecified",
    Web = "web",
    Android = "android",
    Ios = "ios",
    AndroidSdk5 = "androidSdk5",
    IosSdk5 = "iosSdk5",
    Amp = "amp",
    Server = "server"
}


// Container
/** 
 * Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions.
**/
export class Container extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string[];

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: ContainerFeatures;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=publicId" })
  publicId?: string;

  @SpeakeasyMetadata({ data: "json, name=tagIds" })
  tagIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=taggingServerUrls" })
  taggingServerUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=usageContext" })
  usageContext?: ContainerUsageContextEnum[];
}
