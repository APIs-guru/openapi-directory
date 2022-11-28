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
import * as shared from "../shared";
var GetPlaylistByIdPathParams = /** @class */ (function (_super) {
    __extends(GetPlaylistByIdPathParams, _super);
    function GetPlaylistByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetPlaylistByIdPathParams.prototype, "id", void 0);
    return GetPlaylistByIdPathParams;
}(SpeakeasyBase));
export { GetPlaylistByIdPathParams };
export var GetPlaylistByIdSortEnum;
(function (GetPlaylistByIdSortEnum) {
    GetPlaylistByIdSortEnum["RecentAddedFirst"] = "recent_added_first";
    GetPlaylistByIdSortEnum["OldestAddedFirst"] = "oldest_added_first";
    GetPlaylistByIdSortEnum["RecentPublishedFirst"] = "recent_published_first";
    GetPlaylistByIdSortEnum["OldestPublishedFirst"] = "oldest_published_first";
})(GetPlaylistByIdSortEnum || (GetPlaylistByIdSortEnum = {}));
export var GetPlaylistByIdTypeEnum;
(function (GetPlaylistByIdTypeEnum) {
    GetPlaylistByIdTypeEnum["EpisodeList"] = "episode_list";
    GetPlaylistByIdTypeEnum["PodcastList"] = "podcast_list";
})(GetPlaylistByIdTypeEnum || (GetPlaylistByIdTypeEnum = {}));
var GetPlaylistByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetPlaylistByIdQueryParams, _super);
    function GetPlaylistByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_timestamp_ms" }),
        __metadata("design:type", Number)
    ], GetPlaylistByIdQueryParams.prototype, "lastTimestampMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPlaylistByIdQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetPlaylistByIdQueryParams.prototype, "type", void 0);
    return GetPlaylistByIdQueryParams;
}(SpeakeasyBase));
export { GetPlaylistByIdQueryParams };
var GetPlaylistByIdHeaders = /** @class */ (function (_super) {
    __extends(GetPlaylistByIdHeaders, _super);
    function GetPlaylistByIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" }),
        __metadata("design:type", String)
    ], GetPlaylistByIdHeaders.prototype, "xListenApiKey", void 0);
    return GetPlaylistByIdHeaders;
}(SpeakeasyBase));
export { GetPlaylistByIdHeaders };
var GetPlaylistByIdRequest = /** @class */ (function (_super) {
    __extends(GetPlaylistByIdRequest, _super);
    function GetPlaylistByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlaylistByIdPathParams)
    ], GetPlaylistByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlaylistByIdQueryParams)
    ], GetPlaylistByIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlaylistByIdHeaders)
    ], GetPlaylistByIdRequest.prototype, "headers", void 0);
    return GetPlaylistByIdRequest;
}(SpeakeasyBase));
export { GetPlaylistByIdRequest };
var GetPlaylistByIdResponse = /** @class */ (function (_super) {
    __extends(GetPlaylistByIdResponse, _super);
    function GetPlaylistByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPlaylistByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetPlaylistByIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlaylistResponse)
    ], GetPlaylistByIdResponse.prototype, "playlistResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPlaylistByIdResponse.prototype, "statusCode", void 0);
    return GetPlaylistByIdResponse;
}(SpeakeasyBase));
export { GetPlaylistByIdResponse };
