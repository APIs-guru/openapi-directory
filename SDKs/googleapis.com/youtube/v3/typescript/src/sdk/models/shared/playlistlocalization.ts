import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlaylistLocalization
/** 
 * Playlist localization setting
**/
export class PlaylistLocalization extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
