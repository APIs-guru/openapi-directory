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
var SearchRemoteSubtitlesPathParams = /** @class */ (function (_super) {
    __extends(SearchRemoteSubtitlesPathParams, _super);
    function SearchRemoteSubtitlesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], SearchRemoteSubtitlesPathParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], SearchRemoteSubtitlesPathParams.prototype, "language", void 0);
    return SearchRemoteSubtitlesPathParams;
}(SpeakeasyBase));
export { SearchRemoteSubtitlesPathParams };
var SearchRemoteSubtitlesQueryParams = /** @class */ (function (_super) {
    __extends(SearchRemoteSubtitlesQueryParams, _super);
    function SearchRemoteSubtitlesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isPerfectMatch" }),
        __metadata("design:type", Boolean)
    ], SearchRemoteSubtitlesQueryParams.prototype, "isPerfectMatch", void 0);
    return SearchRemoteSubtitlesQueryParams;
}(SpeakeasyBase));
export { SearchRemoteSubtitlesQueryParams };
var SearchRemoteSubtitlesSecurity = /** @class */ (function (_super) {
    __extends(SearchRemoteSubtitlesSecurity, _super);
    function SearchRemoteSubtitlesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], SearchRemoteSubtitlesSecurity.prototype, "customAuthentication", void 0);
    return SearchRemoteSubtitlesSecurity;
}(SpeakeasyBase));
export { SearchRemoteSubtitlesSecurity };
var SearchRemoteSubtitlesRequest = /** @class */ (function (_super) {
    __extends(SearchRemoteSubtitlesRequest, _super);
    function SearchRemoteSubtitlesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchRemoteSubtitlesPathParams)
    ], SearchRemoteSubtitlesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchRemoteSubtitlesQueryParams)
    ], SearchRemoteSubtitlesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchRemoteSubtitlesSecurity)
    ], SearchRemoteSubtitlesRequest.prototype, "security", void 0);
    return SearchRemoteSubtitlesRequest;
}(SpeakeasyBase));
export { SearchRemoteSubtitlesRequest };
var SearchRemoteSubtitlesResponse = /** @class */ (function (_super) {
    __extends(SearchRemoteSubtitlesResponse, _super);
    function SearchRemoteSubtitlesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchRemoteSubtitlesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.RemoteSubtitleInfo }),
        __metadata("design:type", Array)
    ], SearchRemoteSubtitlesResponse.prototype, "remoteSubtitleInfos", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchRemoteSubtitlesResponse.prototype, "statusCode", void 0);
    return SearchRemoteSubtitlesResponse;
}(SpeakeasyBase));
export { SearchRemoteSubtitlesResponse };
