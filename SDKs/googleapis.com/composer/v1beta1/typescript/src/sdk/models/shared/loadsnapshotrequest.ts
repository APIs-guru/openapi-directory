import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoadSnapshotRequest
/** 
 * Request to load a snapshot into a Cloud Composer environment.
**/
export class LoadSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=skipAirflowOverridesSetting" })
  skipAirflowOverridesSetting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skipEnvironmentVariablesSetting" })
  skipEnvironmentVariablesSetting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skipGcsDataCopying" })
  skipGcsDataCopying?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skipPypiPackagesInstallation" })
  skipPypiPackagesInstallation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=snapshotPath" })
  snapshotPath?: string;
}
