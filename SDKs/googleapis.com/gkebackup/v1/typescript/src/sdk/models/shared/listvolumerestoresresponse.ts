import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VolumeRestore } from "./volumerestore";


// ListVolumeRestoresResponse
/** 
 * Response message for ListVolumeRestores.
**/
export class ListVolumeRestoresResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=volumeRestores", elemType: shared.VolumeRestore })
  volumeRestores?: VolumeRestore[];
}
