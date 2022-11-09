import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstallationInfo } from "./installationinfo";
import { FFmpegLocationEnum } from "./ffmpeglocationenum";
import { ArchitectureEnum } from "./architectureenum";


// SystemInfo
/** 
 * Class SystemInfo.
**/
export class SystemInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=CachePath" })
  cachePath?: string;

  @Metadata({ data: "json, name=CanLaunchWebBrowser" })
  canLaunchWebBrowser?: boolean;

  @Metadata({ data: "json, name=CanSelfRestart" })
  canSelfRestart?: boolean;

  @Metadata({ data: "json, name=CompletedInstallations", elemType: shared.InstallationInfo })
  completedInstallations?: InstallationInfo[];

  @Metadata({ data: "json, name=EncoderLocation" })
  encoderLocation?: FFmpegLocationEnum;

  @Metadata({ data: "json, name=HasPendingRestart" })
  hasPendingRestart?: boolean;

  @Metadata({ data: "json, name=HasUpdateAvailable" })
  hasUpdateAvailable?: boolean;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=InternalMetadataPath" })
  internalMetadataPath?: string;

  @Metadata({ data: "json, name=IsShuttingDown" })
  isShuttingDown?: boolean;

  @Metadata({ data: "json, name=ItemsByNamePath" })
  itemsByNamePath?: string;

  @Metadata({ data: "json, name=LocalAddress" })
  localAddress?: string;

  @Metadata({ data: "json, name=LogPath" })
  logPath?: string;

  @Metadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: string;

  @Metadata({ data: "json, name=OperatingSystemDisplayName" })
  operatingSystemDisplayName?: string;

  @Metadata({ data: "json, name=PackageName" })
  packageName?: string;

  @Metadata({ data: "json, name=ProductName" })
  productName?: string;

  @Metadata({ data: "json, name=ProgramDataPath" })
  programDataPath?: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;

  @Metadata({ data: "json, name=StartupWizardCompleted" })
  startupWizardCompleted?: boolean;

  @Metadata({ data: "json, name=SupportsLibraryMonitor" })
  supportsLibraryMonitor?: boolean;

  @Metadata({ data: "json, name=SystemArchitecture" })
  systemArchitecture?: ArchitectureEnum;

  @Metadata({ data: "json, name=TranscodingTempPath" })
  transcodingTempPath?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;

  @Metadata({ data: "json, name=WebPath" })
  webPath?: string;

  @Metadata({ data: "json, name=WebSocketPortNumber" })
  webSocketPortNumber?: number;
}
