import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelSettings } from "./channelsettings";
import { PropertyValue } from "./propertyvalue";
import { ImageSettings } from "./imagesettings";
import { WatchSettings } from "./watchsettings";



// ChannelBrandingSettings
/** 
 * Branding properties of a YouTube channel.
**/
export class ChannelBrandingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: ChannelSettings;

  @SpeakeasyMetadata({ data: "json, name=hints", elemType: PropertyValue })
  hints?: PropertyValue[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ImageSettings;

  @SpeakeasyMetadata({ data: "json, name=watch" })
  watch?: WatchSettings;
}
