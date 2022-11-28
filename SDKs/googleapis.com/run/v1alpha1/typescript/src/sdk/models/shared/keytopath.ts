import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyToPath
/** 
 * Maps a string key to a path within a volume.
**/
export class KeyToPath extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}
