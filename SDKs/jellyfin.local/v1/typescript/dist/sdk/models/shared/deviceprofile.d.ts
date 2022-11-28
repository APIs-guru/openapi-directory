import { SpeakeasyBase } from "../../../internal/utils";
import { CodecProfile } from "./codecprofile";
import { ContainerProfile } from "./containerprofile";
import { DirectPlayProfile } from "./directplayprofile";
import { DeviceIdentification } from "./deviceidentification";
import { ResponseProfile } from "./responseprofile";
import { SubtitleProfile } from "./subtitleprofile";
import { TranscodingProfile } from "./transcodingprofile";
import { XmlAttribute } from "./xmlattribute";
/**
 * Defines the MediaBrowser.Model.Dlna.DeviceProfile.
**/
export declare class DeviceProfile extends SpeakeasyBase {
    albumArtPn?: string;
    codecProfiles?: CodecProfile[];
    containerProfiles?: ContainerProfile[];
    directPlayProfiles?: DirectPlayProfile[];
    enableAlbumArtInDidl?: boolean;
    enableMsMediaReceiverRegistrar?: boolean;
    enableSingleAlbumArtLimit?: boolean;
    enableSingleSubtitleLimit?: boolean;
    friendlyName?: string;
    id?: string;
    identification?: DeviceIdentification;
    ignoreTranscodeByteRangeRequests?: boolean;
    manufacturer?: string;
    manufacturerUrl?: string;
    maxAlbumArtHeight?: number;
    maxAlbumArtWidth?: number;
    maxIconHeight?: number;
    maxIconWidth?: number;
    maxStaticBitrate?: number;
    maxStaticMusicBitrate?: number;
    maxStreamingBitrate?: number;
    modelDescription?: string;
    modelName?: string;
    modelNumber?: string;
    modelUrl?: string;
    musicStreamingTranscodingBitrate?: number;
    name?: string;
    protocolInfo?: string;
    requiresPlainFolders?: boolean;
    requiresPlainVideoItems?: boolean;
    responseProfiles?: ResponseProfile[];
    serialNumber?: string;
    sonyAggregationFlags?: string;
    subtitleProfiles?: SubtitleProfile[];
    supportedMediaTypes?: string;
    timelineOffsetSeconds?: number;
    transcodingProfiles?: TranscodingProfile[];
    userId?: string;
    xmlRootAttributes?: XmlAttribute[];
}
