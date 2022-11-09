import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CodecProfile } from "./codecprofile";
import { ContainerProfile } from "./containerprofile";
import { DirectPlayProfile } from "./directplayprofile";
import { DeviceIdentification } from "./deviceidentification";
import { ResponseProfile } from "./responseprofile";
import { SubtitleProfile } from "./subtitleprofile";
import { TranscodingProfile } from "./transcodingprofile";
import { XmlAttribute } from "./xmlattribute";


// DeviceProfile
/** 
 * Defines the MediaBrowser.Model.Dlna.DeviceProfile.
**/
export class DeviceProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlbumArtPn" })
  albumArtPn?: string;

  @Metadata({ data: "json, name=CodecProfiles", elemType: shared.CodecProfile })
  codecProfiles?: CodecProfile[];

  @Metadata({ data: "json, name=ContainerProfiles", elemType: shared.ContainerProfile })
  containerProfiles?: ContainerProfile[];

  @Metadata({ data: "json, name=DirectPlayProfiles", elemType: shared.DirectPlayProfile })
  directPlayProfiles?: DirectPlayProfile[];

  @Metadata({ data: "json, name=EnableAlbumArtInDidl" })
  enableAlbumArtInDidl?: boolean;

  @Metadata({ data: "json, name=EnableMSMediaReceiverRegistrar" })
  enableMsMediaReceiverRegistrar?: boolean;

  @Metadata({ data: "json, name=EnableSingleAlbumArtLimit" })
  enableSingleAlbumArtLimit?: boolean;

  @Metadata({ data: "json, name=EnableSingleSubtitleLimit" })
  enableSingleSubtitleLimit?: boolean;

  @Metadata({ data: "json, name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Identification" })
  identification?: DeviceIdentification;

  @Metadata({ data: "json, name=IgnoreTranscodeByteRangeRequests" })
  ignoreTranscodeByteRangeRequests?: boolean;

  @Metadata({ data: "json, name=Manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=ManufacturerUrl" })
  manufacturerUrl?: string;

  @Metadata({ data: "json, name=MaxAlbumArtHeight" })
  maxAlbumArtHeight?: number;

  @Metadata({ data: "json, name=MaxAlbumArtWidth" })
  maxAlbumArtWidth?: number;

  @Metadata({ data: "json, name=MaxIconHeight" })
  maxIconHeight?: number;

  @Metadata({ data: "json, name=MaxIconWidth" })
  maxIconWidth?: number;

  @Metadata({ data: "json, name=MaxStaticBitrate" })
  maxStaticBitrate?: number;

  @Metadata({ data: "json, name=MaxStaticMusicBitrate" })
  maxStaticMusicBitrate?: number;

  @Metadata({ data: "json, name=MaxStreamingBitrate" })
  maxStreamingBitrate?: number;

  @Metadata({ data: "json, name=ModelDescription" })
  modelDescription?: string;

  @Metadata({ data: "json, name=ModelName" })
  modelName?: string;

  @Metadata({ data: "json, name=ModelNumber" })
  modelNumber?: string;

  @Metadata({ data: "json, name=ModelUrl" })
  modelUrl?: string;

  @Metadata({ data: "json, name=MusicStreamingTranscodingBitrate" })
  musicStreamingTranscodingBitrate?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ProtocolInfo" })
  protocolInfo?: string;

  @Metadata({ data: "json, name=RequiresPlainFolders" })
  requiresPlainFolders?: boolean;

  @Metadata({ data: "json, name=RequiresPlainVideoItems" })
  requiresPlainVideoItems?: boolean;

  @Metadata({ data: "json, name=ResponseProfiles", elemType: shared.ResponseProfile })
  responseProfiles?: ResponseProfile[];

  @Metadata({ data: "json, name=SerialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=SonyAggregationFlags" })
  sonyAggregationFlags?: string;

  @Metadata({ data: "json, name=SubtitleProfiles", elemType: shared.SubtitleProfile })
  subtitleProfiles?: SubtitleProfile[];

  @Metadata({ data: "json, name=SupportedMediaTypes" })
  supportedMediaTypes?: string;

  @Metadata({ data: "json, name=TimelineOffsetSeconds" })
  timelineOffsetSeconds?: number;

  @Metadata({ data: "json, name=TranscodingProfiles", elemType: shared.TranscodingProfile })
  transcodingProfiles?: TranscodingProfile[];

  @Metadata({ data: "json, name=UserId" })
  userId?: string;

  @Metadata({ data: "json, name=XmlRootAttributes", elemType: shared.XmlAttribute })
  xmlRootAttributes?: XmlAttribute[];
}
