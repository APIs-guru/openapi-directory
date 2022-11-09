import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoadSnapshotRequest
/** 
 * Request to load a snapshot into a Cloud Composer environment.
**/
export class LoadSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=skipPypiPackagesInstallation" })
  skipPypiPackagesInstallation?: boolean;

  @Metadata({ data: "json, name=snapshotPath" })
  snapshotPath?: string;
}
