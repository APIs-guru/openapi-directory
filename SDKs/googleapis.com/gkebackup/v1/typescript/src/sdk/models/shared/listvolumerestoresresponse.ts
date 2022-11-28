import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeRestore } from "./volumerestore";



// ListVolumeRestoresResponse
/** 
 * Response message for ListVolumeRestores.
**/
export class ListVolumeRestoresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeRestores", elemType: VolumeRestore })
  volumeRestores?: VolumeRestore[];
}
