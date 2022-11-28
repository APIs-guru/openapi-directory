import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DayOfWeekEnum } from "./dayofweekenum";
import { NameGuidPair } from "./nameguidpair";
import { ProgramAudioEnum } from "./programaudioenum";
import { ChannelTypeEnum } from "./channeltypeenum";
import { ChapterInfo } from "./chapterinfo";
import { ExternalUrl } from "./externalurl";
import { ImageOrientationEnum } from "./imageorientationenum";
import { IsoTypeEnum } from "./isotypeenum";
import { LocationTypeEnum } from "./locationtypeenum";
import { MetadataFieldEnum } from "./metadatafieldenum";
import { MediaSourceInfo } from "./mediasourceinfo";
import { MediaStream } from "./mediastream";
import { BaseItemPerson } from "./baseitemperson";
import { PlayAccessEnum } from "./playaccessenum";
import { MediaUrl } from "./mediaurl";
import { UserItemDataDto } from "./useritemdatadto";
import { Video3DFormatEnum } from "./video3dformatenum";
import { VideoTypeEnum } from "./videotypeenum";
import { MediaSourceInfoInput } from "./mediasourceinfo";
import { MediaStreamInput } from "./mediastream";



// BaseItemDtoImageBlurHashes
/** 
 * Gets or sets the blurhashes for the image tags.
 * Maps image type to dictionary mapping image tag to blurhash value.
**/
export class BaseItemDtoImageBlurHashes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Art" })
  art?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Backdrop" })
  backdrop?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Banner" })
  banner?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Box" })
  box?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=BoxRear" })
  boxRear?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Chapter" })
  chapter?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Disc" })
  disc?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Logo" })
  logo?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Menu" })
  menu?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Primary" })
  primary?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Profile" })
  profile?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Screenshot" })
  screenshot?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Thumb" })
  thumb?: Map<string, string>;
}


// BaseItemDto
/** 
 * This is strictly used as a data transfer object from the api layer.
 * This holds information about a BaseItem in a format that is convenient for the client.
**/
export class BaseItemDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AirDays" })
  airDays?: DayOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=AirTime" })
  airTime?: string;

  @SpeakeasyMetadata({ data: "json, name=AirsAfterSeasonNumber" })
  airsAfterSeasonNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=AirsBeforeEpisodeNumber" })
  airsBeforeEpisodeNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=AirsBeforeSeasonNumber" })
  airsBeforeSeasonNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=Album" })
  album?: string;

  @SpeakeasyMetadata({ data: "json, name=AlbumArtist" })
  albumArtist?: string;

  @SpeakeasyMetadata({ data: "json, name=AlbumArtists", elemType: NameGuidPair })
  albumArtists?: NameGuidPair[];

  @SpeakeasyMetadata({ data: "json, name=AlbumCount" })
  albumCount?: number;

  @SpeakeasyMetadata({ data: "json, name=AlbumId" })
  albumId?: string;

  @SpeakeasyMetadata({ data: "json, name=AlbumPrimaryImageTag" })
  albumPrimaryImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=Altitude" })
  altitude?: number;

  @SpeakeasyMetadata({ data: "json, name=Aperture" })
  aperture?: number;

  @SpeakeasyMetadata({ data: "json, name=ArtistCount" })
  artistCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ArtistItems", elemType: NameGuidPair })
  artistItems?: NameGuidPair[];

  @SpeakeasyMetadata({ data: "json, name=Artists" })
  artists?: string[];

  @SpeakeasyMetadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @SpeakeasyMetadata({ data: "json, name=Audio" })
  audio?: ProgramAudioEnum;

  @SpeakeasyMetadata({ data: "json, name=BackdropImageTags" })
  backdropImageTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=CameraMake" })
  cameraMake?: string;

  @SpeakeasyMetadata({ data: "json, name=CameraModel" })
  cameraModel?: string;

  @SpeakeasyMetadata({ data: "json, name=CanDelete" })
  canDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CanDownload" })
  canDownload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ChannelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelName" })
  channelName?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelNumber" })
  channelNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelPrimaryImageTag" })
  channelPrimaryImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelType" })
  channelType?: ChannelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Chapters", elemType: ChapterInfo })
  chapters?: ChapterInfo[];

  @SpeakeasyMetadata({ data: "json, name=ChildCount" })
  childCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CollectionType" })
  collectionType?: string;

  @SpeakeasyMetadata({ data: "json, name=CommunityRating" })
  communityRating?: number;

  @SpeakeasyMetadata({ data: "json, name=CompletionPercentage" })
  completionPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=Container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=CriticRating" })
  criticRating?: number;

  @SpeakeasyMetadata({ data: "json, name=CumulativeRunTimeTicks" })
  cumulativeRunTimeTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrentProgram" })
  currentProgram?: BaseItemDto;

  @SpeakeasyMetadata({ data: "json, name=CustomRating" })
  customRating?: string;

  @SpeakeasyMetadata({ data: "json, name=DateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=DateLastMediaAdded" })
  dateLastMediaAdded?: Date;

  @SpeakeasyMetadata({ data: "json, name=DisplayOrder" })
  displayOrder?: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayPreferencesId" })
  displayPreferencesId?: string;

  @SpeakeasyMetadata({ data: "json, name=EnableMediaSourceDisplay" })
  enableMediaSourceDisplay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=EpisodeCount" })
  episodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=EpisodeTitle" })
  episodeTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=Etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=ExposureTime" })
  exposureTime?: number;

  @SpeakeasyMetadata({ data: "json, name=ExternalUrls", elemType: ExternalUrl })
  externalUrls?: ExternalUrl[];

  @SpeakeasyMetadata({ data: "json, name=ExtraType" })
  extraType?: string;

  @SpeakeasyMetadata({ data: "json, name=FocalLength" })
  focalLength?: number;

  @SpeakeasyMetadata({ data: "json, name=ForcedSortName" })
  forcedSortName?: string;

  @SpeakeasyMetadata({ data: "json, name=GenreItems", elemType: NameGuidPair })
  genreItems?: NameGuidPair[];

  @SpeakeasyMetadata({ data: "json, name=Genres" })
  genres?: string[];

  @SpeakeasyMetadata({ data: "json, name=HasSubtitles" })
  hasSubtitles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageBlurHashes" })
  imageBlurHashes?: BaseItemDtoImageBlurHashes;

  @SpeakeasyMetadata({ data: "json, name=ImageOrientation" })
  imageOrientation?: ImageOrientationEnum;

  @SpeakeasyMetadata({ data: "json, name=ImageTags" })
  imageTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=IndexNumber" })
  indexNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=IndexNumberEnd" })
  indexNumberEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=IsFolder" })
  isFolder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsHD" })
  isHd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsKids" })
  isKids?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsLive" })
  isLive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsMovie" })
  isMovie?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsNews" })
  isNews?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsPlaceHolder" })
  isPlaceHolder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsPremiere" })
  isPremiere?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsRepeat" })
  isRepeat?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsSeries" })
  isSeries?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsSports" })
  isSports?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsoSpeedRating" })
  isoSpeedRating?: number;

  @SpeakeasyMetadata({ data: "json, name=IsoType" })
  isoType?: IsoTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=LocalTrailerCount" })
  localTrailerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=LocationType" })
  locationType?: LocationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LockData" })
  lockData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LockedFields" })
  lockedFields?: MetadataFieldEnum[];

  @SpeakeasyMetadata({ data: "json, name=Longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=MediaSourceCount" })
  mediaSourceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=MediaSources", elemType: MediaSourceInfo })
  mediaSources?: MediaSourceInfo[];

  @SpeakeasyMetadata({ data: "json, name=MediaStreams", elemType: MediaStream })
  mediaStreams?: MediaStream[];

  @SpeakeasyMetadata({ data: "json, name=MediaType" })
  mediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=MovieCount" })
  movieCount?: number;

  @SpeakeasyMetadata({ data: "json, name=MusicVideoCount" })
  musicVideoCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=OfficialRating" })
  officialRating?: string;

  @SpeakeasyMetadata({ data: "json, name=OriginalTitle" })
  originalTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=Overview" })
  overview?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentArtImageTag" })
  parentArtImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentArtItemId" })
  parentArtItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentBackdropImageTags" })
  parentBackdropImageTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=ParentBackdropItemId" })
  parentBackdropItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentIndexNumber" })
  parentIndexNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=ParentLogoImageTag" })
  parentLogoImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentLogoItemId" })
  parentLogoItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentPrimaryImageItemId" })
  parentPrimaryImageItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentPrimaryImageTag" })
  parentPrimaryImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentThumbImageTag" })
  parentThumbImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentThumbItemId" })
  parentThumbItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=PartCount" })
  partCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=People", elemType: BaseItemPerson })
  people?: BaseItemPerson[];

  @SpeakeasyMetadata({ data: "json, name=PlayAccess" })
  playAccess?: PlayAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredMetadataCountryCode" })
  preferredMetadataCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredMetadataLanguage" })
  preferredMetadataLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=PremiereDate" })
  premiereDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=PrimaryImageAspectRatio" })
  primaryImageAspectRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=ProductionLocations" })
  productionLocations?: string[];

  @SpeakeasyMetadata({ data: "json, name=ProductionYear" })
  productionYear?: number;

  @SpeakeasyMetadata({ data: "json, name=ProgramCount" })
  programCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ProgramId" })
  programId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderIds" })
  providerIds?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=RecursiveItemCount" })
  recursiveItemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=RemoteTrailers", elemType: MediaUrl })
  remoteTrailers?: MediaUrl[];

  @SpeakeasyMetadata({ data: "json, name=RunTimeTicks" })
  runTimeTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=ScreenshotImageTags" })
  screenshotImageTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=SeasonId" })
  seasonId?: string;

  @SpeakeasyMetadata({ data: "json, name=SeasonName" })
  seasonName?: string;

  @SpeakeasyMetadata({ data: "json, name=SeriesCount" })
  seriesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=SeriesId" })
  seriesId?: string;

  @SpeakeasyMetadata({ data: "json, name=SeriesName" })
  seriesName?: string;

  @SpeakeasyMetadata({ data: "json, name=SeriesPrimaryImageTag" })
  seriesPrimaryImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=SeriesStudio" })
  seriesStudio?: string;

  @SpeakeasyMetadata({ data: "json, name=SeriesThumbImageTag" })
  seriesThumbImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=SeriesTimerId" })
  seriesTimerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId?: string;

  @SpeakeasyMetadata({ data: "json, name=ShutterSpeed" })
  shutterSpeed?: number;

  @SpeakeasyMetadata({ data: "json, name=Software" })
  software?: string;

  @SpeakeasyMetadata({ data: "json, name=SongCount" })
  songCount?: number;

  @SpeakeasyMetadata({ data: "json, name=SortName" })
  sortName?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=SpecialFeatureCount" })
  specialFeatureCount?: number;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=Studios", elemType: NameGuidPair })
  studios?: NameGuidPair[];

  @SpeakeasyMetadata({ data: "json, name=SupportsSync" })
  supportsSync?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Taglines" })
  taglines?: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=TimerId" })
  timerId?: string;

  @SpeakeasyMetadata({ data: "json, name=TrailerCount" })
  trailerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=UserData" })
  userData?: UserItemDataDto;

  @SpeakeasyMetadata({ data: "json, name=Video3DFormat" })
  video3DFormat?: Video3DFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=VideoType" })
  videoType?: VideoTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Width" })
  width?: number;
}


// BaseItemDtoInput
/** 
 * This is strictly used as a data transfer object from the api layer.
 * This holds information about a BaseItem in a format that is convenient for the client.
**/
export class BaseItemDtoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AirDays" })
  airDays?: DayOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=AirTime" })
  airTime?: string;

  @SpeakeasyMetadata({ data: "json, name=AirsAfterSeasonNumber" })
  airsAfterSeasonNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=AirsBeforeEpisodeNumber" })
  airsBeforeEpisodeNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=AirsBeforeSeasonNumber" })
  airsBeforeSeasonNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=Album" })
  album?: string;

  @SpeakeasyMetadata({ data: "json, name=AlbumArtist" })
  albumArtist?: string;

  @SpeakeasyMetadata({ data: "json, name=AlbumArtists", elemType: NameGuidPair })
  albumArtists?: NameGuidPair[];

  @SpeakeasyMetadata({ data: "json, name=AlbumCount" })
  albumCount?: number;

  @SpeakeasyMetadata({ data: "json, name=AlbumId" })
  albumId?: string;

  @SpeakeasyMetadata({ data: "json, name=AlbumPrimaryImageTag" })
  albumPrimaryImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=Altitude" })
  altitude?: number;

  @SpeakeasyMetadata({ data: "json, name=Aperture" })
  aperture?: number;

  @SpeakeasyMetadata({ data: "json, name=ArtistCount" })
  artistCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ArtistItems", elemType: NameGuidPair })
  artistItems?: NameGuidPair[];

  @SpeakeasyMetadata({ data: "json, name=Artists" })
  artists?: string[];

  @SpeakeasyMetadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @SpeakeasyMetadata({ data: "json, name=Audio" })
  audio?: ProgramAudioEnum;

  @SpeakeasyMetadata({ data: "json, name=BackdropImageTags" })
  backdropImageTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=CameraMake" })
  cameraMake?: string;

  @SpeakeasyMetadata({ data: "json, name=CameraModel" })
  cameraModel?: string;

  @SpeakeasyMetadata({ data: "json, name=CanDelete" })
  canDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CanDownload" })
  canDownload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ChannelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelName" })
  channelName?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelNumber" })
  channelNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelPrimaryImageTag" })
  channelPrimaryImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelType" })
  channelType?: ChannelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Chapters", elemType: ChapterInfo })
  chapters?: ChapterInfo[];

  @SpeakeasyMetadata({ data: "json, name=ChildCount" })
  childCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CollectionType" })
  collectionType?: string;

  @SpeakeasyMetadata({ data: "json, name=CommunityRating" })
  communityRating?: number;

  @SpeakeasyMetadata({ data: "json, name=CompletionPercentage" })
  completionPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=Container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=CriticRating" })
  criticRating?: number;

  @SpeakeasyMetadata({ data: "json, name=CumulativeRunTimeTicks" })
  cumulativeRunTimeTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrentProgram" })
  currentProgram?: BaseItemDto;

  @SpeakeasyMetadata({ data: "json, name=CustomRating" })
  customRating?: string;

  @SpeakeasyMetadata({ data: "json, name=DateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=DateLastMediaAdded" })
  dateLastMediaAdded?: Date;

  @SpeakeasyMetadata({ data: "json, name=DisplayOrder" })
  displayOrder?: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayPreferencesId" })
  displayPreferencesId?: string;

  @SpeakeasyMetadata({ data: "json, name=EnableMediaSourceDisplay" })
  enableMediaSourceDisplay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=EpisodeCount" })
  episodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=EpisodeTitle" })
  episodeTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=Etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=ExposureTime" })
  exposureTime?: number;

  @SpeakeasyMetadata({ data: "json, name=ExternalUrls", elemType: ExternalUrl })
  externalUrls?: ExternalUrl[];

  @SpeakeasyMetadata({ data: "json, name=ExtraType" })
  extraType?: string;

  @SpeakeasyMetadata({ data: "json, name=FocalLength" })
  focalLength?: number;

  @SpeakeasyMetadata({ data: "json, name=ForcedSortName" })
  forcedSortName?: string;

  @SpeakeasyMetadata({ data: "json, name=GenreItems", elemType: NameGuidPair })
  genreItems?: NameGuidPair[];

  @SpeakeasyMetadata({ data: "json, name=Genres" })
  genres?: string[];

  @SpeakeasyMetadata({ data: "json, name=HasSubtitles" })
  hasSubtitles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageBlurHashes" })
  imageBlurHashes?: BaseItemDtoImageBlurHashes;

  @SpeakeasyMetadata({ data: "json, name=ImageOrientation" })
  imageOrientation?: ImageOrientationEnum;

  @SpeakeasyMetadata({ data: "json, name=ImageTags" })
  imageTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=IndexNumber" })
  indexNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=IndexNumberEnd" })
  indexNumberEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=IsFolder" })
  isFolder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsHD" })
  isHd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsKids" })
  isKids?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsLive" })
  isLive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsMovie" })
  isMovie?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsNews" })
  isNews?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsPlaceHolder" })
  isPlaceHolder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsPremiere" })
  isPremiere?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsRepeat" })
  isRepeat?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsSeries" })
  isSeries?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsSports" })
  isSports?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsoSpeedRating" })
  isoSpeedRating?: number;

  @SpeakeasyMetadata({ data: "json, name=IsoType" })
  isoType?: IsoTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=LocalTrailerCount" })
  localTrailerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=LocationType" })
  locationType?: LocationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LockData" })
  lockData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LockedFields" })
  lockedFields?: MetadataFieldEnum[];

  @SpeakeasyMetadata({ data: "json, name=Longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=MediaSourceCount" })
  mediaSourceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=MediaSources", elemType: MediaSourceInfoInput })
  mediaSources?: MediaSourceInfoInput[];

  @SpeakeasyMetadata({ data: "json, name=MediaStreams", elemType: MediaStreamInput })
  mediaStreams?: MediaStreamInput[];

  @SpeakeasyMetadata({ data: "json, name=MediaType" })
  mediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=MovieCount" })
  movieCount?: number;

  @SpeakeasyMetadata({ data: "json, name=MusicVideoCount" })
  musicVideoCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=OfficialRating" })
  officialRating?: string;

  @SpeakeasyMetadata({ data: "json, name=OriginalTitle" })
  originalTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=Overview" })
  overview?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentArtImageTag" })
  parentArtImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentArtItemId" })
  parentArtItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentBackdropImageTags" })
  parentBackdropImageTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=ParentBackdropItemId" })
  parentBackdropItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentIndexNumber" })
  parentIndexNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=ParentLogoImageTag" })
  parentLogoImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentLogoItemId" })
  parentLogoItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentPrimaryImageItemId" })
  parentPrimaryImageItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentPrimaryImageTag" })
  parentPrimaryImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentThumbImageTag" })
  parentThumbImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentThumbItemId" })
  parentThumbItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=PartCount" })
  partCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=People", elemType: BaseItemPerson })
  people?: BaseItemPerson[];

  @SpeakeasyMetadata({ data: "json, name=PlayAccess" })
  playAccess?: PlayAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredMetadataCountryCode" })
  preferredMetadataCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredMetadataLanguage" })
  preferredMetadataLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=PremiereDate" })
  premiereDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=PrimaryImageAspectRatio" })
  primaryImageAspectRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=ProductionLocations" })
  productionLocations?: string[];

  @SpeakeasyMetadata({ data: "json, name=ProductionYear" })
  productionYear?: number;

  @SpeakeasyMetadata({ data: "json, name=ProgramCount" })
  programCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ProgramId" })
  programId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderIds" })
  providerIds?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=RecursiveItemCount" })
  recursiveItemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=RemoteTrailers", elemType: MediaUrl })
  remoteTrailers?: MediaUrl[];

  @SpeakeasyMetadata({ data: "json, name=RunTimeTicks" })
  runTimeTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=ScreenshotImageTags" })
  screenshotImageTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=SeasonId" })
  seasonId?: string;

  @SpeakeasyMetadata({ data: "json, name=SeasonName" })
  seasonName?: string;

  @SpeakeasyMetadata({ data: "json, name=SeriesCount" })
  seriesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=SeriesId" })
  seriesId?: string;

  @SpeakeasyMetadata({ data: "json, name=SeriesName" })
  seriesName?: string;

  @SpeakeasyMetadata({ data: "json, name=SeriesPrimaryImageTag" })
  seriesPrimaryImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=SeriesStudio" })
  seriesStudio?: string;

  @SpeakeasyMetadata({ data: "json, name=SeriesThumbImageTag" })
  seriesThumbImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=SeriesTimerId" })
  seriesTimerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId?: string;

  @SpeakeasyMetadata({ data: "json, name=ShutterSpeed" })
  shutterSpeed?: number;

  @SpeakeasyMetadata({ data: "json, name=Software" })
  software?: string;

  @SpeakeasyMetadata({ data: "json, name=SongCount" })
  songCount?: number;

  @SpeakeasyMetadata({ data: "json, name=SortName" })
  sortName?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=SpecialFeatureCount" })
  specialFeatureCount?: number;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=Studios", elemType: NameGuidPair })
  studios?: NameGuidPair[];

  @SpeakeasyMetadata({ data: "json, name=SupportsSync" })
  supportsSync?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Taglines" })
  taglines?: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=TimerId" })
  timerId?: string;

  @SpeakeasyMetadata({ data: "json, name=TrailerCount" })
  trailerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=UserData" })
  userData?: UserItemDataDto;

  @SpeakeasyMetadata({ data: "json, name=Video3DFormat" })
  video3DFormat?: Video3DFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=VideoType" })
  videoType?: VideoTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Width" })
  width?: number;
}
