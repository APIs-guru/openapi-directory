import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeBackup } from "./volumebackup";
/**
 * Response message for ListVolumeBackups.
**/
export declare class ListVolumeBackupsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    volumeBackups?: VolumeBackup[];
}
