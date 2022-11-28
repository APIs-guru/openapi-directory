import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstallationInfo } from "./installationinfo";
import { FFmpegLocationEnum } from "./ffmpeglocationenum";
import { ArchitectureEnum } from "./architectureenum";



// SystemInfo
/** 
 * Class SystemInfo.
**/
export class SystemInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CachePath" })
  cachePath?: string;

  @SpeakeasyMetadata({ data: "json, name=CanLaunchWebBrowser" })
  canLaunchWebBrowser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CanSelfRestart" })
  canSelfRestart?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CompletedInstallations", elemType: InstallationInfo })
  completedInstallations?: InstallationInfo[];

  @SpeakeasyMetadata({ data: "json, name=EncoderLocation" })
  encoderLocation?: FFmpegLocationEnum;

  @SpeakeasyMetadata({ data: "json, name=HasPendingRestart" })
  hasPendingRestart?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasUpdateAvailable" })
  hasUpdateAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=InternalMetadataPath" })
  internalMetadataPath?: string;

  @SpeakeasyMetadata({ data: "json, name=IsShuttingDown" })
  isShuttingDown?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ItemsByNamePath" })
  itemsByNamePath?: string;

  @SpeakeasyMetadata({ data: "json, name=LocalAddress" })
  localAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=LogPath" })
  logPath?: string;

  @SpeakeasyMetadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: string;

  @SpeakeasyMetadata({ data: "json, name=OperatingSystemDisplayName" })
  operatingSystemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=PackageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProgramDataPath" })
  programDataPath?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;

  @SpeakeasyMetadata({ data: "json, name=StartupWizardCompleted" })
  startupWizardCompleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SupportsLibraryMonitor" })
  supportsLibraryMonitor?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SystemArchitecture" })
  systemArchitecture?: ArchitectureEnum;

  @SpeakeasyMetadata({ data: "json, name=TranscodingTempPath" })
  transcodingTempPath?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=WebPath" })
  webPath?: string;

  @SpeakeasyMetadata({ data: "json, name=WebSocketPortNumber" })
  webSocketPortNumber?: number;
}
