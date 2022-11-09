import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WatchSettings
/** 
 * Branding properties for the watch. All deprecated.
**/
export class WatchSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundColor" })
  backgroundColor?: string;

  @Metadata({ data: "json, name=featuredPlaylistId" })
  featuredPlaylistId?: string;

  @Metadata({ data: "json, name=textColor" })
  textColor?: string;
}
