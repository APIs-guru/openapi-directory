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
var GetMusicArtistRemoteSearchResultsRequests = /** @class */ (function (_super) {
    __extends(GetMusicArtistRemoteSearchResultsRequests, _super);
    function GetMusicArtistRemoteSearchResultsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ArtistInfoRemoteSearchQuery)
    ], GetMusicArtistRemoteSearchResultsRequests.prototype, "artistInfoRemoteSearchQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ArtistInfoRemoteSearchQuery)
    ], GetMusicArtistRemoteSearchResultsRequests.prototype, "artistInfoRemoteSearchQuery1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ArtistInfoRemoteSearchQuery)
    ], GetMusicArtistRemoteSearchResultsRequests.prototype, "artistInfoRemoteSearchQuery2", void 0);
    return GetMusicArtistRemoteSearchResultsRequests;
}(SpeakeasyBase));
export { GetMusicArtistRemoteSearchResultsRequests };
var GetMusicArtistRemoteSearchResultsSecurity = /** @class */ (function (_super) {
    __extends(GetMusicArtistRemoteSearchResultsSecurity, _super);
    function GetMusicArtistRemoteSearchResultsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetMusicArtistRemoteSearchResultsSecurity.prototype, "customAuthentication", void 0);
    return GetMusicArtistRemoteSearchResultsSecurity;
}(SpeakeasyBase));
export { GetMusicArtistRemoteSearchResultsSecurity };
var GetMusicArtistRemoteSearchResultsRequest = /** @class */ (function (_super) {
    __extends(GetMusicArtistRemoteSearchResultsRequest, _super);
    function GetMusicArtistRemoteSearchResultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMusicArtistRemoteSearchResultsRequests)
    ], GetMusicArtistRemoteSearchResultsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMusicArtistRemoteSearchResultsSecurity)
    ], GetMusicArtistRemoteSearchResultsRequest.prototype, "security", void 0);
    return GetMusicArtistRemoteSearchResultsRequest;
}(SpeakeasyBase));
export { GetMusicArtistRemoteSearchResultsRequest };
var GetMusicArtistRemoteSearchResultsResponse = /** @class */ (function (_super) {
    __extends(GetMusicArtistRemoteSearchResultsResponse, _super);
    function GetMusicArtistRemoteSearchResultsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMusicArtistRemoteSearchResultsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.RemoteSearchResult }),
        __metadata("design:type", Array)
    ], GetMusicArtistRemoteSearchResultsResponse.prototype, "remoteSearchResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMusicArtistRemoteSearchResultsResponse.prototype, "statusCode", void 0);
    return GetMusicArtistRemoteSearchResultsResponse;
}(SpeakeasyBase));
export { GetMusicArtistRemoteSearchResultsResponse };
