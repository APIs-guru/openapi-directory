import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChannelSettings } from "./channelsettings";
import { PropertyValue } from "./propertyvalue";
import { ImageSettings } from "./imagesettings";
import { WatchSettings } from "./watchsettings";


// ChannelBrandingSettings
/** 
 * Branding properties of a YouTube channel.
**/
export class ChannelBrandingSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: ChannelSettings;

  @Metadata({ data: "json, name=hints", elemType: shared.PropertyValue })
  hints?: PropertyValue[];

  @Metadata({ data: "json, name=image" })
  image?: ImageSettings;

  @Metadata({ data: "json, name=watch" })
  watch?: WatchSettings;
}
