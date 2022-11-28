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
var YoutubePlaylistsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(YoutubePlaylistsUpdateQueryParams, _super);
    function YoutubePlaylistsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubePlaylistsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubePlaylistsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubePlaylistsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubePlaylistsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubePlaylistsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubePlaylistsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubePlaylistsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubePlaylistsUpdateQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubePlaylistsUpdateQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubePlaylistsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubePlaylistsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubePlaylistsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubePlaylistsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubePlaylistsUpdateQueryParams;
}(SpeakeasyBase));
export { YoutubePlaylistsUpdateQueryParams };
var YoutubePlaylistsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistsUpdateSecurityOption1, _super);
    function YoutubePlaylistsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubePlaylistsUpdateSecurityOption1;
}(SpeakeasyBase));
export { YoutubePlaylistsUpdateSecurityOption1 };
var YoutubePlaylistsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistsUpdateSecurityOption2, _super);
    function YoutubePlaylistsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubePlaylistsUpdateSecurityOption2;
}(SpeakeasyBase));
export { YoutubePlaylistsUpdateSecurityOption2 };
var YoutubePlaylistsUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistsUpdateSecurityOption3, _super);
    function YoutubePlaylistsUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistsUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistsUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubePlaylistsUpdateSecurityOption3;
}(SpeakeasyBase));
export { YoutubePlaylistsUpdateSecurityOption3 };
var YoutubePlaylistsUpdateSecurity = /** @class */ (function (_super) {
    __extends(YoutubePlaylistsUpdateSecurity, _super);
    function YoutubePlaylistsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistsUpdateSecurityOption1)
    ], YoutubePlaylistsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistsUpdateSecurityOption2)
    ], YoutubePlaylistsUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistsUpdateSecurityOption3)
    ], YoutubePlaylistsUpdateSecurity.prototype, "option3", void 0);
    return YoutubePlaylistsUpdateSecurity;
}(SpeakeasyBase));
export { YoutubePlaylistsUpdateSecurity };
var YoutubePlaylistsUpdateRequest = /** @class */ (function (_super) {
    __extends(YoutubePlaylistsUpdateRequest, _super);
    function YoutubePlaylistsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubePlaylistsUpdateQueryParams)
    ], YoutubePlaylistsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Playlist)
    ], YoutubePlaylistsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubePlaylistsUpdateSecurity)
    ], YoutubePlaylistsUpdateRequest.prototype, "security", void 0);
    return YoutubePlaylistsUpdateRequest;
}(SpeakeasyBase));
export { YoutubePlaylistsUpdateRequest };
var YoutubePlaylistsUpdateResponse = /** @class */ (function (_super) {
    __extends(YoutubePlaylistsUpdateResponse, _super);
    function YoutubePlaylistsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubePlaylistsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Playlist)
    ], YoutubePlaylistsUpdateResponse.prototype, "playlist", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubePlaylistsUpdateResponse.prototype, "statusCode", void 0);
    return YoutubePlaylistsUpdateResponse;
}(SpeakeasyBase));
export { YoutubePlaylistsUpdateResponse };
