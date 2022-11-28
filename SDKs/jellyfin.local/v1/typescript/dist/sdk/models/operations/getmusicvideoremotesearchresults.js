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
var GetMusicVideoRemoteSearchResultsRequests = /** @class */ (function (_super) {
    __extends(GetMusicVideoRemoteSearchResultsRequests, _super);
    function GetMusicVideoRemoteSearchResultsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.MusicVideoInfoRemoteSearchQuery)
    ], GetMusicVideoRemoteSearchResultsRequests.prototype, "musicVideoInfoRemoteSearchQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MusicVideoInfoRemoteSearchQuery)
    ], GetMusicVideoRemoteSearchResultsRequests.prototype, "musicVideoInfoRemoteSearchQuery1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.MusicVideoInfoRemoteSearchQuery)
    ], GetMusicVideoRemoteSearchResultsRequests.prototype, "musicVideoInfoRemoteSearchQuery2", void 0);
    return GetMusicVideoRemoteSearchResultsRequests;
}(SpeakeasyBase));
export { GetMusicVideoRemoteSearchResultsRequests };
var GetMusicVideoRemoteSearchResultsSecurity = /** @class */ (function (_super) {
    __extends(GetMusicVideoRemoteSearchResultsSecurity, _super);
    function GetMusicVideoRemoteSearchResultsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetMusicVideoRemoteSearchResultsSecurity.prototype, "customAuthentication", void 0);
    return GetMusicVideoRemoteSearchResultsSecurity;
}(SpeakeasyBase));
export { GetMusicVideoRemoteSearchResultsSecurity };
var GetMusicVideoRemoteSearchResultsRequest = /** @class */ (function (_super) {
    __extends(GetMusicVideoRemoteSearchResultsRequest, _super);
    function GetMusicVideoRemoteSearchResultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMusicVideoRemoteSearchResultsRequests)
    ], GetMusicVideoRemoteSearchResultsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMusicVideoRemoteSearchResultsSecurity)
    ], GetMusicVideoRemoteSearchResultsRequest.prototype, "security", void 0);
    return GetMusicVideoRemoteSearchResultsRequest;
}(SpeakeasyBase));
export { GetMusicVideoRemoteSearchResultsRequest };
var GetMusicVideoRemoteSearchResultsResponse = /** @class */ (function (_super) {
    __extends(GetMusicVideoRemoteSearchResultsResponse, _super);
    function GetMusicVideoRemoteSearchResultsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMusicVideoRemoteSearchResultsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.RemoteSearchResult }),
        __metadata("design:type", Array)
    ], GetMusicVideoRemoteSearchResultsResponse.prototype, "remoteSearchResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMusicVideoRemoteSearchResultsResponse.prototype, "statusCode", void 0);
    return GetMusicVideoRemoteSearchResultsResponse;
}(SpeakeasyBase));
export { GetMusicVideoRemoteSearchResultsResponse };
