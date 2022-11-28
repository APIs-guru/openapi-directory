import { SpeakeasyBase } from "../../../internal/utils";
import { InstallationInfo } from "./installationinfo";
import { FFmpegLocationEnum } from "./ffmpeglocationenum";
import { ArchitectureEnum } from "./architectureenum";
/**
 * Class SystemInfo.
**/
export declare class SystemInfo extends SpeakeasyBase {
    cachePath?: string;
    canLaunchWebBrowser?: boolean;
    canSelfRestart?: boolean;
    completedInstallations?: InstallationInfo[];
    encoderLocation?: FFmpegLocationEnum;
    hasPendingRestart?: boolean;
    hasUpdateAvailable?: boolean;
    id?: string;
    internalMetadataPath?: string;
    isShuttingDown?: boolean;
    itemsByNamePath?: string;
    localAddress?: string;
    logPath?: string;
    operatingSystem?: string;
    operatingSystemDisplayName?: string;
    packageName?: string;
    productName?: string;
    programDataPath?: string;
    serverName?: string;
    startupWizardCompleted?: boolean;
    supportsLibraryMonitor?: boolean;
    systemArchitecture?: ArchitectureEnum;
    transcodingTempPath?: string;
    version?: string;
    webPath?: string;
    webSocketPortNumber?: number;
}
