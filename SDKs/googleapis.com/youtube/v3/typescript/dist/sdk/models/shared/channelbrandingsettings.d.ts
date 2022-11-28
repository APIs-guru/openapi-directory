import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelSettings } from "./channelsettings";
import { PropertyValue } from "./propertyvalue";
import { ImageSettings } from "./imagesettings";
import { WatchSettings } from "./watchsettings";
/**
 * Branding properties of a YouTube channel.
**/
export declare class ChannelBrandingSettings extends SpeakeasyBase {
    channel?: ChannelSettings;
    hints?: PropertyValue[];
    image?: ImageSettings;
    watch?: WatchSettings;
}
