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
import { PlaylistContentDetails } from "./playlistcontentdetails";
import { PlaylistLocalization } from "./playlistlocalization";
import { PlaylistPlayer } from "./playlistplayer";
import { PlaylistSnippet } from "./playlistsnippet";
import { PlaylistStatus } from "./playliststatus";
// Playlist
/**
 * A *playlist* resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private. YouTube also uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods.
**/
var Playlist = /** @class */ (function (_super) {
    __extends(Playlist, _super);
    function Playlist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentDetails" }),
        __metadata("design:type", PlaylistContentDetails)
    ], Playlist.prototype, "contentDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Playlist.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Playlist.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Playlist.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localizations", elemType: PlaylistLocalization }),
        __metadata("design:type", Map)
    ], Playlist.prototype, "localizations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=player" }),
        __metadata("design:type", PlaylistPlayer)
    ], Playlist.prototype, "player", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snippet" }),
        __metadata("design:type", PlaylistSnippet)
    ], Playlist.prototype, "snippet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", PlaylistStatus)
    ], Playlist.prototype, "status", void 0);
    return Playlist;
}(SpeakeasyBase));
export { Playlist };
