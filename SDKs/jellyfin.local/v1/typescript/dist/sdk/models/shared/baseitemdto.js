var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NameGuidPair } from "./nameguidpair";
import { ProgramAudioEnum } from "./programaudioenum";
import { ChannelTypeEnum } from "./channeltypeenum";
import { ChapterInfo } from "./chapterinfo";
import { ExternalUrl } from "./externalurl";
import { ImageOrientationEnum } from "./imageorientationenum";
import { IsoTypeEnum } from "./isotypeenum";
import { LocationTypeEnum } from "./locationtypeenum";
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
var BaseItemDtoImageBlurHashes = /** @class */ (function (_super) {
    __extends(BaseItemDtoImageBlurHashes, _super);
    function BaseItemDtoImageBlurHashes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Art" }),
        __metadata("design:type", Map)
    ], BaseItemDtoImageBlurHashes.prototype, "art", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Backdrop" }),
        __metadata("design:type", Map)
    ], BaseItemDtoImageBlurHashes.prototype, "backdrop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Banner" }),
        __metadata("design:type", Map)
    ], BaseItemDtoImageBlurHashes.prototype, "banner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Box" }),
        __metadata("design:type", Map)
    ], BaseItemDtoImageBlurHashes.prototype, "box", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BoxRear" }),
        __metadata("design:type", Map)
    ], BaseItemDtoImageBlurHashes.prototype, "boxRear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Chapter" }),
        __metadata("design:type", Map)
    ], BaseItemDtoImageBlurHashes.prototype, "chapter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Disc" }),
        __metadata("design:type", Map)
    ], BaseItemDtoImageBlurHashes.prototype, "disc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Logo" }),
        __metadata("design:type", Map)
    ], BaseItemDtoImageBlurHashes.prototype, "logo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Menu" }),
        __metadata("design:type", Map)
    ], BaseItemDtoImageBlurHashes.prototype, "menu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Primary" }),
        __metadata("design:type", Map)
    ], BaseItemDtoImageBlurHashes.prototype, "primary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Profile" }),
        __metadata("design:type", Map)
    ], BaseItemDtoImageBlurHashes.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Screenshot" }),
        __metadata("design:type", Map)
    ], BaseItemDtoImageBlurHashes.prototype, "screenshot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Thumb" }),
        __metadata("design:type", Map)
    ], BaseItemDtoImageBlurHashes.prototype, "thumb", void 0);
    return BaseItemDtoImageBlurHashes;
}(SpeakeasyBase));
export { BaseItemDtoImageBlurHashes };
// BaseItemDto
/**
 * This is strictly used as a data transfer object from the api layer.
 * This holds information about a BaseItem in a format that is convenient for the client.
**/
var BaseItemDto = /** @class */ (function (_super) {
    __extends(BaseItemDto, _super);
    function BaseItemDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AirDays" }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "airDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AirTime" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "airTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AirsAfterSeasonNumber" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "airsAfterSeasonNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AirsBeforeEpisodeNumber" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "airsBeforeEpisodeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AirsBeforeSeasonNumber" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "airsBeforeSeasonNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Album" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "album", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumArtist" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "albumArtist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumArtists", elemType: NameGuidPair }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "albumArtists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumCount" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "albumCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumId" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "albumId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumPrimaryImageTag" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "albumPrimaryImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Altitude" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "altitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Aperture" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "aperture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArtistCount" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "artistCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArtistItems", elemType: NameGuidPair }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "artistItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Artists" }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "artists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AspectRatio" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "aspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Audio" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "audio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BackdropImageTags" }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "backdropImageTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CameraMake" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "cameraMake", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CameraModel" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "cameraModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CanDelete" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "canDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CanDownload" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "canDownload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelId" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelName" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "channelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelNumber" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "channelNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelPrimaryImageTag" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "channelPrimaryImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelType" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "channelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Chapters", elemType: ChapterInfo }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "chapters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChildCount" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "childCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CollectionType" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "collectionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CommunityRating" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "communityRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionPercentage" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "completionPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Container" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CriticRating" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "criticRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CumulativeRunTimeTicks" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "cumulativeRunTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentProgram" }),
        __metadata("design:type", BaseItemDto)
    ], BaseItemDto.prototype, "currentProgram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomRating" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "customRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateCreated" }),
        __metadata("design:type", Date)
    ], BaseItemDto.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateLastMediaAdded" }),
        __metadata("design:type", Date)
    ], BaseItemDto.prototype, "dateLastMediaAdded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayOrder" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "displayOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayPreferencesId" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "displayPreferencesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableMediaSourceDisplay" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "enableMediaSourceDisplay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate" }),
        __metadata("design:type", Date)
    ], BaseItemDto.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EpisodeCount" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "episodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EpisodeTitle" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "episodeTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Etag" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExposureTime" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "exposureTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalUrls", elemType: ExternalUrl }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "externalUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtraType" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "extraType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FocalLength" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "focalLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ForcedSortName" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "forcedSortName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GenreItems", elemType: NameGuidPair }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "genreItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Genres" }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "genres", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasSubtitles" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "hasSubtitles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Height" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageBlurHashes" }),
        __metadata("design:type", BaseItemDtoImageBlurHashes)
    ], BaseItemDto.prototype, "imageBlurHashes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageOrientation" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "imageOrientation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageTags" }),
        __metadata("design:type", Map)
    ], BaseItemDto.prototype, "imageTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexNumber" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "indexNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexNumberEnd" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "indexNumberEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsFolder" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "isFolder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsHD" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "isHd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsKids" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "isKids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsLive" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "isLive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsMovie" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "isMovie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsNews" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "isNews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPlaceHolder" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "isPlaceHolder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPremiere" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "isPremiere", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsRepeat" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "isRepeat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsSeries" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "isSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsSports" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "isSports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsoSpeedRating" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "isoSpeedRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsoType" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "isoType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Latitude" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalTrailerCount" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "localTrailerCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocationType" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "locationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LockData" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "lockData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LockedFields" }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "lockedFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Longitude" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaSourceCount" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "mediaSourceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaSources", elemType: MediaSourceInfo }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "mediaSources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaStreams", elemType: MediaStream }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "mediaStreams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaType" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "mediaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MovieCount" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "movieCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MusicVideoCount" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "musicVideoCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Number" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OfficialRating" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "officialRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OriginalTitle" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "originalTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Overview" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "overview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentArtImageTag" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "parentArtImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentArtItemId" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "parentArtItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentBackdropImageTags" }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "parentBackdropImageTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentBackdropItemId" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "parentBackdropItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentId" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentIndexNumber" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "parentIndexNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentLogoImageTag" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "parentLogoImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentLogoItemId" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "parentLogoItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentPrimaryImageItemId" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "parentPrimaryImageItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentPrimaryImageTag" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "parentPrimaryImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentThumbImageTag" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "parentThumbImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentThumbItemId" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "parentThumbItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PartCount" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "partCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Path" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=People", elemType: BaseItemPerson }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "people", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlayAccess" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "playAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlaylistItemId" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "playlistItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreferredMetadataCountryCode" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "preferredMetadataCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreferredMetadataLanguage" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "preferredMetadataLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PremiereDate" }),
        __metadata("design:type", Date)
    ], BaseItemDto.prototype, "premiereDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryImageAspectRatio" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "primaryImageAspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductionLocations" }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "productionLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductionYear" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "productionYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProgramCount" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "programCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProgramId" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "programId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProviderIds" }),
        __metadata("design:type", Map)
    ], BaseItemDto.prototype, "providerIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecursiveItemCount" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "recursiveItemCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoteTrailers", elemType: MediaUrl }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "remoteTrailers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RunTimeTicks" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "runTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScreenshotImageTags" }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "screenshotImageTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeasonId" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "seasonId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeasonName" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "seasonName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesCount" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "seriesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesId" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "seriesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesName" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "seriesName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesPrimaryImageTag" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "seriesPrimaryImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesStudio" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "seriesStudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesThumbImageTag" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "seriesThumbImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesTimerId" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "seriesTimerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerId" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "serverId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShutterSpeed" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "shutterSpeed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Software" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "software", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SongCount" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "songCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortName" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "sortName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceType" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "sourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SpecialFeatureCount" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "specialFeatureCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", Date)
    ], BaseItemDto.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Studios", elemType: NameGuidPair }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "studios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsSync" }),
        __metadata("design:type", Boolean)
    ], BaseItemDto.prototype, "supportsSync", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Taglines" }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "taglines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Array)
    ], BaseItemDto.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimerId" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "timerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrailerCount" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "trailerCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserData" }),
        __metadata("design:type", UserItemDataDto)
    ], BaseItemDto.prototype, "userData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Video3DFormat" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "video3DFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VideoType" }),
        __metadata("design:type", String)
    ], BaseItemDto.prototype, "videoType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Width" }),
        __metadata("design:type", Number)
    ], BaseItemDto.prototype, "width", void 0);
    return BaseItemDto;
}(SpeakeasyBase));
export { BaseItemDto };
// BaseItemDtoInput
/**
 * This is strictly used as a data transfer object from the api layer.
 * This holds information about a BaseItem in a format that is convenient for the client.
**/
var BaseItemDtoInput = /** @class */ (function (_super) {
    __extends(BaseItemDtoInput, _super);
    function BaseItemDtoInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AirDays" }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "airDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AirTime" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "airTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AirsAfterSeasonNumber" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "airsAfterSeasonNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AirsBeforeEpisodeNumber" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "airsBeforeEpisodeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AirsBeforeSeasonNumber" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "airsBeforeSeasonNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Album" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "album", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumArtist" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "albumArtist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumArtists", elemType: NameGuidPair }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "albumArtists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumCount" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "albumCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumId" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "albumId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumPrimaryImageTag" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "albumPrimaryImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Altitude" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "altitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Aperture" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "aperture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArtistCount" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "artistCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArtistItems", elemType: NameGuidPair }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "artistItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Artists" }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "artists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AspectRatio" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "aspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Audio" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "audio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BackdropImageTags" }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "backdropImageTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CameraMake" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "cameraMake", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CameraModel" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "cameraModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CanDelete" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "canDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CanDownload" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "canDownload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelId" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelName" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "channelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelNumber" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "channelNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelPrimaryImageTag" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "channelPrimaryImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelType" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "channelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Chapters", elemType: ChapterInfo }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "chapters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChildCount" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "childCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CollectionType" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "collectionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CommunityRating" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "communityRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionPercentage" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "completionPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Container" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CriticRating" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "criticRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CumulativeRunTimeTicks" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "cumulativeRunTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentProgram" }),
        __metadata("design:type", BaseItemDto)
    ], BaseItemDtoInput.prototype, "currentProgram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomRating" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "customRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateCreated" }),
        __metadata("design:type", Date)
    ], BaseItemDtoInput.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateLastMediaAdded" }),
        __metadata("design:type", Date)
    ], BaseItemDtoInput.prototype, "dateLastMediaAdded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayOrder" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "displayOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayPreferencesId" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "displayPreferencesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableMediaSourceDisplay" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "enableMediaSourceDisplay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate" }),
        __metadata("design:type", Date)
    ], BaseItemDtoInput.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EpisodeCount" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "episodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EpisodeTitle" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "episodeTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Etag" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExposureTime" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "exposureTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalUrls", elemType: ExternalUrl }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "externalUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtraType" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "extraType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FocalLength" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "focalLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ForcedSortName" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "forcedSortName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GenreItems", elemType: NameGuidPair }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "genreItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Genres" }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "genres", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasSubtitles" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "hasSubtitles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Height" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageBlurHashes" }),
        __metadata("design:type", BaseItemDtoImageBlurHashes)
    ], BaseItemDtoInput.prototype, "imageBlurHashes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageOrientation" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "imageOrientation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageTags" }),
        __metadata("design:type", Map)
    ], BaseItemDtoInput.prototype, "imageTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexNumber" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "indexNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexNumberEnd" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "indexNumberEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsFolder" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "isFolder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsHD" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "isHd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsKids" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "isKids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsLive" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "isLive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsMovie" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "isMovie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsNews" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "isNews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPlaceHolder" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "isPlaceHolder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPremiere" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "isPremiere", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsRepeat" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "isRepeat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsSeries" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "isSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsSports" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "isSports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsoSpeedRating" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "isoSpeedRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsoType" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "isoType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Latitude" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalTrailerCount" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "localTrailerCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocationType" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "locationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LockData" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "lockData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LockedFields" }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "lockedFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Longitude" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaSourceCount" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "mediaSourceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaSources", elemType: MediaSourceInfoInput }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "mediaSources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaStreams", elemType: MediaStreamInput }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "mediaStreams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaType" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "mediaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MovieCount" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "movieCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MusicVideoCount" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "musicVideoCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Number" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OfficialRating" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "officialRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OriginalTitle" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "originalTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Overview" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "overview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentArtImageTag" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "parentArtImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentArtItemId" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "parentArtItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentBackdropImageTags" }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "parentBackdropImageTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentBackdropItemId" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "parentBackdropItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentId" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentIndexNumber" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "parentIndexNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentLogoImageTag" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "parentLogoImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentLogoItemId" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "parentLogoItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentPrimaryImageItemId" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "parentPrimaryImageItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentPrimaryImageTag" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "parentPrimaryImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentThumbImageTag" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "parentThumbImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentThumbItemId" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "parentThumbItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PartCount" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "partCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Path" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=People", elemType: BaseItemPerson }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "people", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlayAccess" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "playAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlaylistItemId" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "playlistItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreferredMetadataCountryCode" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "preferredMetadataCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreferredMetadataLanguage" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "preferredMetadataLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PremiereDate" }),
        __metadata("design:type", Date)
    ], BaseItemDtoInput.prototype, "premiereDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryImageAspectRatio" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "primaryImageAspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductionLocations" }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "productionLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductionYear" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "productionYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProgramCount" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "programCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProgramId" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "programId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProviderIds" }),
        __metadata("design:type", Map)
    ], BaseItemDtoInput.prototype, "providerIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecursiveItemCount" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "recursiveItemCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoteTrailers", elemType: MediaUrl }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "remoteTrailers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RunTimeTicks" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "runTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScreenshotImageTags" }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "screenshotImageTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeasonId" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "seasonId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeasonName" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "seasonName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesCount" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "seriesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesId" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "seriesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesName" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "seriesName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesPrimaryImageTag" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "seriesPrimaryImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesStudio" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "seriesStudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesThumbImageTag" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "seriesThumbImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesTimerId" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "seriesTimerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerId" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "serverId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShutterSpeed" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "shutterSpeed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Software" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "software", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SongCount" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "songCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortName" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "sortName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceType" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "sourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SpecialFeatureCount" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "specialFeatureCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", Date)
    ], BaseItemDtoInput.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Studios", elemType: NameGuidPair }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "studios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsSync" }),
        __metadata("design:type", Boolean)
    ], BaseItemDtoInput.prototype, "supportsSync", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Taglines" }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "taglines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Array)
    ], BaseItemDtoInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimerId" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "timerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrailerCount" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "trailerCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserData" }),
        __metadata("design:type", UserItemDataDto)
    ], BaseItemDtoInput.prototype, "userData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Video3DFormat" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "video3DFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VideoType" }),
        __metadata("design:type", String)
    ], BaseItemDtoInput.prototype, "videoType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Width" }),
        __metadata("design:type", Number)
    ], BaseItemDtoInput.prototype, "width", void 0);
    return BaseItemDtoInput;
}(SpeakeasyBase));
export { BaseItemDtoInput };
