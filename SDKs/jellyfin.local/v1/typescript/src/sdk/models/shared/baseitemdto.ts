import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DayOfWeekEnum } from "./dayofweekenum";
import { NameGuidPair } from "./nameguidpair";
import { NameGuidPair } from "./nameguidpair";
import { ProgramAudioEnum } from "./programaudioenum";
import { ChannelTypeEnum } from "./channeltypeenum";
import { ChapterInfo } from "./chapterinfo";
import { BaseItemDto } from "./baseitemdto";
import { ExternalUrl } from "./externalurl";
import { NameGuidPair } from "./nameguidpair";
import { ImageOrientationEnum } from "./imageorientationenum";
import { IsoTypeEnum } from "./isotypeenum";
import { LocationTypeEnum } from "./locationtypeenum";
import { MetadataFieldEnum } from "./metadatafieldenum";
import { MediaSourceInfo } from "./mediasourceinfo";
import { MediaStream } from "./mediastream";
import { BaseItemPerson } from "./baseitemperson";
import { PlayAccessEnum } from "./playaccessenum";
import { MediaUrl } from "./mediaurl";
import { NameGuidPair } from "./nameguidpair";
import { UserItemDataDto } from "./useritemdatadto";
import { Video3DFormatEnum } from "./video3dformatenum";
import { VideoTypeEnum } from "./videotypeenum";


// BaseItemDtoImageBlurHashes
/** 
 * Gets or sets the blurhashes for the image tags.
 * Maps image type to dictionary mapping image tag to blurhash value.
**/
export class BaseItemDtoImageBlurHashes extends SpeakeasyBase {
  @Metadata({ data: "json, name=Art" })
  art?: Map<string, string>;

  @Metadata({ data: "json, name=Backdrop" })
  backdrop?: Map<string, string>;

  @Metadata({ data: "json, name=Banner" })
  banner?: Map<string, string>;

  @Metadata({ data: "json, name=Box" })
  box?: Map<string, string>;

  @Metadata({ data: "json, name=BoxRear" })
  boxRear?: Map<string, string>;

  @Metadata({ data: "json, name=Chapter" })
  chapter?: Map<string, string>;

  @Metadata({ data: "json, name=Disc" })
  disc?: Map<string, string>;

  @Metadata({ data: "json, name=Logo" })
  logo?: Map<string, string>;

  @Metadata({ data: "json, name=Menu" })
  menu?: Map<string, string>;

  @Metadata({ data: "json, name=Primary" })
  primary?: Map<string, string>;

  @Metadata({ data: "json, name=Profile" })
  profile?: Map<string, string>;

  @Metadata({ data: "json, name=Screenshot" })
  screenshot?: Map<string, string>;

  @Metadata({ data: "json, name=Thumb" })
  thumb?: Map<string, string>;
}


// BaseItemDto
/** 
 * This is strictly used as a data transfer object from the api layer.
 * This holds information about a BaseItem in a format that is convenient for the client.
**/
export class BaseItemDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=AirDays" })
  airDays?: DayOfWeekEnum[];

  @Metadata({ data: "json, name=AirTime" })
  airTime?: string;

  @Metadata({ data: "json, name=AirsAfterSeasonNumber" })
  airsAfterSeasonNumber?: number;

  @Metadata({ data: "json, name=AirsBeforeEpisodeNumber" })
  airsBeforeEpisodeNumber?: number;

  @Metadata({ data: "json, name=AirsBeforeSeasonNumber" })
  airsBeforeSeasonNumber?: number;

  @Metadata({ data: "json, name=Album" })
  album?: string;

  @Metadata({ data: "json, name=AlbumArtist" })
  albumArtist?: string;

  @Metadata({ data: "json, name=AlbumArtists", elemType: shared.NameGuidPair })
  albumArtists?: NameGuidPair[];

  @Metadata({ data: "json, name=AlbumCount" })
  albumCount?: number;

  @Metadata({ data: "json, name=AlbumId" })
  albumId?: string;

  @Metadata({ data: "json, name=AlbumPrimaryImageTag" })
  albumPrimaryImageTag?: string;

  @Metadata({ data: "json, name=Altitude" })
  altitude?: number;

  @Metadata({ data: "json, name=Aperture" })
  aperture?: number;

  @Metadata({ data: "json, name=ArtistCount" })
  artistCount?: number;

  @Metadata({ data: "json, name=ArtistItems", elemType: shared.NameGuidPair })
  artistItems?: NameGuidPair[];

  @Metadata({ data: "json, name=Artists" })
  artists?: string[];

  @Metadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @Metadata({ data: "json, name=Audio" })
  audio?: ProgramAudioEnum;

  @Metadata({ data: "json, name=BackdropImageTags" })
  backdropImageTags?: string[];

  @Metadata({ data: "json, name=CameraMake" })
  cameraMake?: string;

  @Metadata({ data: "json, name=CameraModel" })
  cameraModel?: string;

  @Metadata({ data: "json, name=CanDelete" })
  canDelete?: boolean;

  @Metadata({ data: "json, name=CanDownload" })
  canDownload?: boolean;

  @Metadata({ data: "json, name=ChannelId" })
  channelId?: string;

  @Metadata({ data: "json, name=ChannelName" })
  channelName?: string;

  @Metadata({ data: "json, name=ChannelNumber" })
  channelNumber?: string;

  @Metadata({ data: "json, name=ChannelPrimaryImageTag" })
  channelPrimaryImageTag?: string;

  @Metadata({ data: "json, name=ChannelType" })
  channelType?: ChannelTypeEnum;

  @Metadata({ data: "json, name=Chapters", elemType: shared.ChapterInfo })
  chapters?: ChapterInfo[];

  @Metadata({ data: "json, name=ChildCount" })
  childCount?: number;

  @Metadata({ data: "json, name=CollectionType" })
  collectionType?: string;

  @Metadata({ data: "json, name=CommunityRating" })
  communityRating?: number;

  @Metadata({ data: "json, name=CompletionPercentage" })
  completionPercentage?: number;

  @Metadata({ data: "json, name=Container" })
  container?: string;

  @Metadata({ data: "json, name=CriticRating" })
  criticRating?: number;

  @Metadata({ data: "json, name=CumulativeRunTimeTicks" })
  cumulativeRunTimeTicks?: number;

  @Metadata({ data: "json, name=CurrentProgram" })
  currentProgram?: BaseItemDto;

  @Metadata({ data: "json, name=CustomRating" })
  customRating?: string;

  @Metadata({ data: "json, name=DateCreated" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=DateLastMediaAdded" })
  dateLastMediaAdded?: Date;

  @Metadata({ data: "json, name=DisplayOrder" })
  displayOrder?: string;

  @Metadata({ data: "json, name=DisplayPreferencesId" })
  displayPreferencesId?: string;

  @Metadata({ data: "json, name=EnableMediaSourceDisplay" })
  enableMediaSourceDisplay?: boolean;

  @Metadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=EpisodeCount" })
  episodeCount?: number;

  @Metadata({ data: "json, name=EpisodeTitle" })
  episodeTitle?: string;

  @Metadata({ data: "json, name=Etag" })
  etag?: string;

  @Metadata({ data: "json, name=ExposureTime" })
  exposureTime?: number;

  @Metadata({ data: "json, name=ExternalUrls", elemType: shared.ExternalUrl })
  externalUrls?: ExternalUrl[];

  @Metadata({ data: "json, name=ExtraType" })
  extraType?: string;

  @Metadata({ data: "json, name=FocalLength" })
  focalLength?: number;

  @Metadata({ data: "json, name=ForcedSortName" })
  forcedSortName?: string;

  @Metadata({ data: "json, name=GenreItems", elemType: shared.NameGuidPair })
  genreItems?: NameGuidPair[];

  @Metadata({ data: "json, name=Genres" })
  genres?: string[];

  @Metadata({ data: "json, name=HasSubtitles" })
  hasSubtitles?: boolean;

  @Metadata({ data: "json, name=Height" })
  height?: number;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=ImageBlurHashes" })
  imageBlurHashes?: BaseItemDtoImageBlurHashes;

  @Metadata({ data: "json, name=ImageOrientation" })
  imageOrientation?: ImageOrientationEnum;

  @Metadata({ data: "json, name=ImageTags" })
  imageTags?: Map<string, string>;

  @Metadata({ data: "json, name=IndexNumber" })
  indexNumber?: number;

  @Metadata({ data: "json, name=IndexNumberEnd" })
  indexNumberEnd?: number;

  @Metadata({ data: "json, name=IsFolder" })
  isFolder?: boolean;

  @Metadata({ data: "json, name=IsHD" })
  isHd?: boolean;

  @Metadata({ data: "json, name=IsKids" })
  isKids?: boolean;

  @Metadata({ data: "json, name=IsLive" })
  isLive?: boolean;

  @Metadata({ data: "json, name=IsMovie" })
  isMovie?: boolean;

  @Metadata({ data: "json, name=IsNews" })
  isNews?: boolean;

  @Metadata({ data: "json, name=IsPlaceHolder" })
  isPlaceHolder?: boolean;

  @Metadata({ data: "json, name=IsPremiere" })
  isPremiere?: boolean;

  @Metadata({ data: "json, name=IsRepeat" })
  isRepeat?: boolean;

  @Metadata({ data: "json, name=IsSeries" })
  isSeries?: boolean;

  @Metadata({ data: "json, name=IsSports" })
  isSports?: boolean;

  @Metadata({ data: "json, name=IsoSpeedRating" })
  isoSpeedRating?: number;

  @Metadata({ data: "json, name=IsoType" })
  isoType?: IsoTypeEnum;

  @Metadata({ data: "json, name=Latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=LocalTrailerCount" })
  localTrailerCount?: number;

  @Metadata({ data: "json, name=LocationType" })
  locationType?: LocationTypeEnum;

  @Metadata({ data: "json, name=LockData" })
  lockData?: boolean;

  @Metadata({ data: "json, name=LockedFields" })
  lockedFields?: MetadataFieldEnum[];

  @Metadata({ data: "json, name=Longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=MediaSourceCount" })
  mediaSourceCount?: number;

  @Metadata({ data: "json, name=MediaSources", elemType: shared.MediaSourceInfo })
  mediaSources?: MediaSourceInfo[];

  @Metadata({ data: "json, name=MediaStreams", elemType: shared.MediaStream })
  mediaStreams?: MediaStream[];

  @Metadata({ data: "json, name=MediaType" })
  mediaType?: string;

  @Metadata({ data: "json, name=MovieCount" })
  movieCount?: number;

  @Metadata({ data: "json, name=MusicVideoCount" })
  musicVideoCount?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Number" })
  number?: string;

  @Metadata({ data: "json, name=OfficialRating" })
  officialRating?: string;

  @Metadata({ data: "json, name=OriginalTitle" })
  originalTitle?: string;

  @Metadata({ data: "json, name=Overview" })
  overview?: string;

  @Metadata({ data: "json, name=ParentArtImageTag" })
  parentArtImageTag?: string;

  @Metadata({ data: "json, name=ParentArtItemId" })
  parentArtItemId?: string;

  @Metadata({ data: "json, name=ParentBackdropImageTags" })
  parentBackdropImageTags?: string[];

  @Metadata({ data: "json, name=ParentBackdropItemId" })
  parentBackdropItemId?: string;

  @Metadata({ data: "json, name=ParentId" })
  parentId?: string;

  @Metadata({ data: "json, name=ParentIndexNumber" })
  parentIndexNumber?: number;

  @Metadata({ data: "json, name=ParentLogoImageTag" })
  parentLogoImageTag?: string;

  @Metadata({ data: "json, name=ParentLogoItemId" })
  parentLogoItemId?: string;

  @Metadata({ data: "json, name=ParentPrimaryImageItemId" })
  parentPrimaryImageItemId?: string;

  @Metadata({ data: "json, name=ParentPrimaryImageTag" })
  parentPrimaryImageTag?: string;

  @Metadata({ data: "json, name=ParentThumbImageTag" })
  parentThumbImageTag?: string;

  @Metadata({ data: "json, name=ParentThumbItemId" })
  parentThumbItemId?: string;

  @Metadata({ data: "json, name=PartCount" })
  partCount?: number;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=People", elemType: shared.BaseItemPerson })
  people?: BaseItemPerson[];

  @Metadata({ data: "json, name=PlayAccess" })
  playAccess?: PlayAccessEnum;

  @Metadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;

  @Metadata({ data: "json, name=PreferredMetadataCountryCode" })
  preferredMetadataCountryCode?: string;

  @Metadata({ data: "json, name=PreferredMetadataLanguage" })
  preferredMetadataLanguage?: string;

  @Metadata({ data: "json, name=PremiereDate" })
  premiereDate?: Date;

  @Metadata({ data: "json, name=PrimaryImageAspectRatio" })
  primaryImageAspectRatio?: number;

  @Metadata({ data: "json, name=ProductionLocations" })
  productionLocations?: string[];

  @Metadata({ data: "json, name=ProductionYear" })
  productionYear?: number;

  @Metadata({ data: "json, name=ProgramCount" })
  programCount?: number;

  @Metadata({ data: "json, name=ProgramId" })
  programId?: string;

  @Metadata({ data: "json, name=ProviderIds" })
  providerIds?: Map<string, string>;

  @Metadata({ data: "json, name=RecursiveItemCount" })
  recursiveItemCount?: number;

  @Metadata({ data: "json, name=RemoteTrailers", elemType: shared.MediaUrl })
  remoteTrailers?: MediaUrl[];

  @Metadata({ data: "json, name=RunTimeTicks" })
  runTimeTicks?: number;

  @Metadata({ data: "json, name=ScreenshotImageTags" })
  screenshotImageTags?: string[];

  @Metadata({ data: "json, name=SeasonId" })
  seasonId?: string;

  @Metadata({ data: "json, name=SeasonName" })
  seasonName?: string;

  @Metadata({ data: "json, name=SeriesCount" })
  seriesCount?: number;

  @Metadata({ data: "json, name=SeriesId" })
  seriesId?: string;

  @Metadata({ data: "json, name=SeriesName" })
  seriesName?: string;

  @Metadata({ data: "json, name=SeriesPrimaryImageTag" })
  seriesPrimaryImageTag?: string;

  @Metadata({ data: "json, name=SeriesStudio" })
  seriesStudio?: string;

  @Metadata({ data: "json, name=SeriesThumbImageTag" })
  seriesThumbImageTag?: string;

  @Metadata({ data: "json, name=SeriesTimerId" })
  seriesTimerId?: string;

  @Metadata({ data: "json, name=ServerId" })
  serverId?: string;

  @Metadata({ data: "json, name=ShutterSpeed" })
  shutterSpeed?: number;

  @Metadata({ data: "json, name=Software" })
  software?: string;

  @Metadata({ data: "json, name=SongCount" })
  songCount?: number;

  @Metadata({ data: "json, name=SortName" })
  sortName?: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @Metadata({ data: "json, name=SpecialFeatureCount" })
  specialFeatureCount?: number;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=Studios", elemType: shared.NameGuidPair })
  studios?: NameGuidPair[];

  @Metadata({ data: "json, name=SupportsSync" })
  supportsSync?: boolean;

  @Metadata({ data: "json, name=Taglines" })
  taglines?: string[];

  @Metadata({ data: "json, name=Tags" })
  tags?: string[];

  @Metadata({ data: "json, name=TimerId" })
  timerId?: string;

  @Metadata({ data: "json, name=TrailerCount" })
  trailerCount?: number;

  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=UserData" })
  userData?: UserItemDataDto;

  @Metadata({ data: "json, name=Video3DFormat" })
  video3DFormat?: Video3DFormatEnum;

  @Metadata({ data: "json, name=VideoType" })
  videoType?: VideoTypeEnum;

  @Metadata({ data: "json, name=Width" })
  width?: number;
}
