import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerFeatures } from "./containerfeatures";
export declare enum ContainerUsageContextEnum {
    UsageContextUnspecified = "usageContextUnspecified",
    Web = "web",
    Android = "android",
    Ios = "ios",
    AndroidSdk5 = "androidSdk5",
    IosSdk5 = "iosSdk5",
    Amp = "amp",
    Server = "server"
}
/**
 * Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions.
**/
export declare class Container extends SpeakeasyBase {
    accountId?: string;
    containerId?: string;
    domainName?: string[];
    features?: ContainerFeatures;
    fingerprint?: string;
    name?: string;
    notes?: string;
    path?: string;
    publicId?: string;
    tagIds?: string[];
    tagManagerUrl?: string;
    taggingServerUrls?: string[];
    usageContext?: ContainerUsageContextEnum[];
}
