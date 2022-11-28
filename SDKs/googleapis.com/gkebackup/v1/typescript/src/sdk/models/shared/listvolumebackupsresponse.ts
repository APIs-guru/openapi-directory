import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeBackup } from "./volumebackup";



// ListVolumeBackupsResponse
/** 
 * Response message for ListVolumeBackups.
**/
export class ListVolumeBackupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeBackups", elemType: VolumeBackup })
  volumeBackups?: VolumeBackup[];
}
