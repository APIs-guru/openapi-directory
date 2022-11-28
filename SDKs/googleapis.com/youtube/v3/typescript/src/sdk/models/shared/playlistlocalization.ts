import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlaylistLocalization
/** 
 * Playlist localization setting
**/
export class PlaylistLocalization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
