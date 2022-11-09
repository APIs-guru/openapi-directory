import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VolumeBackup } from "./volumebackup";


// ListVolumeBackupsResponse
/** 
 * Response message for ListVolumeBackups.
**/
export class ListVolumeBackupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=volumeBackups", elemType: shared.VolumeBackup })
  volumeBackups?: VolumeBackup[];
}
