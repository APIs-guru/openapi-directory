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
import { PlaylistItem } from "./playlistitem";
import { PlaylistVisibilityFieldEnum } from "./playlistvisibilityfieldenum";
export var PlaylistResponseTypeEnum;
(function (PlaylistResponseTypeEnum) {
    PlaylistResponseTypeEnum["EpisodeList"] = "episode_list";
    PlaylistResponseTypeEnum["PodcastList"] = "podcast_list";
})(PlaylistResponseTypeEnum || (PlaylistResponseTypeEnum = {}));
var PlaylistResponse = /** @class */ (function (_super) {
    __extends(PlaylistResponse, _super);
    function PlaylistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PlaylistResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PlaylistResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], PlaylistResponse.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: PlaylistItem }),
        __metadata("design:type", Array)
    ], PlaylistResponse.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_timestamp_ms" }),
        __metadata("design:type", Number)
    ], PlaylistResponse.prototype, "lastTimestampMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listennotes_url" }),
        __metadata("design:type", String)
    ], PlaylistResponse.prototype, "listennotesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PlaylistResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnail" }),
        __metadata("design:type", String)
    ], PlaylistResponse.prototype, "thumbnail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PlaylistResponse.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PlaylistResponse.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], PlaylistResponse.prototype, "visibility", void 0);
    return PlaylistResponse;
}(SpeakeasyBase));
export { PlaylistResponse };
