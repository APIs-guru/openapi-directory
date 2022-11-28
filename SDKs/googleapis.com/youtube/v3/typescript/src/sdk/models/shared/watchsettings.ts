import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WatchSettings
/** 
 * Branding properties for the watch. All deprecated.
**/
export class WatchSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=featuredPlaylistId" })
  featuredPlaylistId?: string;

  @SpeakeasyMetadata({ data: "json, name=textColor" })
  textColor?: string;
}
