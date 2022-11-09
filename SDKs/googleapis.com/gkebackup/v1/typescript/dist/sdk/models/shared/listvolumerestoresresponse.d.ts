import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VolumeRestore } from "./volumerestore";
/**
 * Response message for ListVolumeRestores.
**/
export declare class ListVolumeRestoresResponse extends SpeakeasyBase {
    nextPageToken?: string;
    volumeRestores?: VolumeRestore[];
}
