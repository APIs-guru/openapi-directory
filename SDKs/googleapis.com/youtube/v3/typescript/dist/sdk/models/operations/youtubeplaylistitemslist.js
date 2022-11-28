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
var YoutubePlaylistItemsListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsListQueryParams, _super);
    function YoutubePlaylistItemsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], YoutubePlaylistItemsListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], YoutubePlaylistItemsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubePlaylistItemsListQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playlistId" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "playlistId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubePlaylistItemsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoId" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "videoId", void 0);
    return YoutubePlaylistItemsListQueryParams;
}(SpeakeasyBase));
export { YoutubePlaylistItemsListQueryParams };
var YoutubePlaylistItemsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsListSecurityOption1, _super);
    function YoutubePlaylistItemsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistItemsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistItemsListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsListSecurityOption1;
}(SpeakeasyBase));
export { YoutubePlaylistItemsListSecurityOption1 };
var YoutubePlaylistItemsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsListSecurityOption2, _super);
    function YoutubePlaylistItemsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistItemsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistItemsListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsListSecurityOption2;
}(SpeakeasyBase));
export { YoutubePlaylistItemsListSecurityOption2 };
var YoutubePlaylistItemsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsListSecurityOption3, _super);
    function YoutubePlaylistItemsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistItemsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistItemsListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsListSecurityOption3;
}(SpeakeasyBase));
export { YoutubePlaylistItemsListSecurityOption3 };
var YoutubePlaylistItemsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsListSecurityOption4, _super);
    function YoutubePlaylistItemsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistItemsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistItemsListSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsListSecurityOption4;
}(SpeakeasyBase));
export { YoutubePlaylistItemsListSecurityOption4 };
var YoutubePlaylistItemsListSecurity = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsListSecurity, _super);
    function YoutubePlaylistItemsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsListSecurityOption1)
    ], YoutubePlaylistItemsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsListSecurityOption2)
    ], YoutubePlaylistItemsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsListSecurityOption3)
    ], YoutubePlaylistItemsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsListSecurityOption4)
    ], YoutubePlaylistItemsListSecurity.prototype, "option4", void 0);
    return YoutubePlaylistItemsListSecurity;
}(SpeakeasyBase));
export { YoutubePlaylistItemsListSecurity };
var YoutubePlaylistItemsListRequest = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsListRequest, _super);
    function YoutubePlaylistItemsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubePlaylistItemsListQueryParams)
    ], YoutubePlaylistItemsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubePlaylistItemsListSecurity)
    ], YoutubePlaylistItemsListRequest.prototype, "security", void 0);
    return YoutubePlaylistItemsListRequest;
}(SpeakeasyBase));
export { YoutubePlaylistItemsListRequest };
var YoutubePlaylistItemsListResponse = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsListResponse, _super);
    function YoutubePlaylistItemsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlaylistItemListResponse)
    ], YoutubePlaylistItemsListResponse.prototype, "playlistItemListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubePlaylistItemsListResponse.prototype, "statusCode", void 0);
    return YoutubePlaylistItemsListResponse;
}(SpeakeasyBase));
export { YoutubePlaylistItemsListResponse };
