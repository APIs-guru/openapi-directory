import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=AlbumArtPn" })
  albumArtPn?: string;

  @SpeakeasyMetadata({ data: "json, name=CodecProfiles", elemType: CodecProfile })
  codecProfiles?: CodecProfile[];

  @SpeakeasyMetadata({ data: "json, name=ContainerProfiles", elemType: ContainerProfile })
  containerProfiles?: ContainerProfile[];

  @SpeakeasyMetadata({ data: "json, name=DirectPlayProfiles", elemType: DirectPlayProfile })
  directPlayProfiles?: DirectPlayProfile[];

  @SpeakeasyMetadata({ data: "json, name=EnableAlbumArtInDidl" })
  enableAlbumArtInDidl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableMSMediaReceiverRegistrar" })
  enableMsMediaReceiverRegistrar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableSingleAlbumArtLimit" })
  enableSingleAlbumArtLimit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableSingleSubtitleLimit" })
  enableSingleSubtitleLimit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: DeviceIdentification;

  @SpeakeasyMetadata({ data: "json, name=IgnoreTranscodeByteRangeRequests" })
  ignoreTranscodeByteRangeRequests?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=ManufacturerUrl" })
  manufacturerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxAlbumArtHeight" })
  maxAlbumArtHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxAlbumArtWidth" })
  maxAlbumArtWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxIconHeight" })
  maxIconHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxIconWidth" })
  maxIconWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxStaticBitrate" })
  maxStaticBitrate?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxStaticMusicBitrate" })
  maxStaticMusicBitrate?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxStreamingBitrate" })
  maxStreamingBitrate?: number;

  @SpeakeasyMetadata({ data: "json, name=ModelDescription" })
  modelDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelNumber" })
  modelNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelUrl" })
  modelUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=MusicStreamingTranscodingBitrate" })
  musicStreamingTranscodingBitrate?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ProtocolInfo" })
  protocolInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=RequiresPlainFolders" })
  requiresPlainFolders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RequiresPlainVideoItems" })
  requiresPlainVideoItems?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ResponseProfiles", elemType: ResponseProfile })
  responseProfiles?: ResponseProfile[];

  @SpeakeasyMetadata({ data: "json, name=SerialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=SonyAggregationFlags" })
  sonyAggregationFlags?: string;

  @SpeakeasyMetadata({ data: "json, name=SubtitleProfiles", elemType: SubtitleProfile })
  subtitleProfiles?: SubtitleProfile[];

  @SpeakeasyMetadata({ data: "json, name=SupportedMediaTypes" })
  supportedMediaTypes?: string;

  @SpeakeasyMetadata({ data: "json, name=TimelineOffsetSeconds" })
  timelineOffsetSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=TranscodingProfiles", elemType: TranscodingProfile })
  transcodingProfiles?: TranscodingProfile[];

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=XmlRootAttributes", elemType: XmlAttribute })
  xmlRootAttributes?: XmlAttribute[];
}
