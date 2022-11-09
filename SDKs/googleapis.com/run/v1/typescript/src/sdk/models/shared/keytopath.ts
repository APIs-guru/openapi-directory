import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyToPath
/** 
 * Maps a string key to a path within a volume.
**/
export class KeyToPath extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=mode" })
  mode?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
