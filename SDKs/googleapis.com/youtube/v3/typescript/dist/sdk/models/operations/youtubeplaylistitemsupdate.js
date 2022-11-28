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
var YoutubePlaylistItemsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsUpdateQueryParams, _super);
    function YoutubePlaylistItemsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsUpdateQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubePlaylistItemsUpdateQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubePlaylistItemsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubePlaylistItemsUpdateQueryParams;
}(SpeakeasyBase));
export { YoutubePlaylistItemsUpdateQueryParams };
var YoutubePlaylistItemsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsUpdateSecurityOption1, _super);
    function YoutubePlaylistItemsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistItemsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistItemsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsUpdateSecurityOption1;
}(SpeakeasyBase));
export { YoutubePlaylistItemsUpdateSecurityOption1 };
var YoutubePlaylistItemsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsUpdateSecurityOption2, _super);
    function YoutubePlaylistItemsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistItemsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistItemsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsUpdateSecurityOption2;
}(SpeakeasyBase));
export { YoutubePlaylistItemsUpdateSecurityOption2 };
var YoutubePlaylistItemsUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsUpdateSecurityOption3, _super);
    function YoutubePlaylistItemsUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistItemsUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistItemsUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsUpdateSecurityOption3;
}(SpeakeasyBase));
export { YoutubePlaylistItemsUpdateSecurityOption3 };
var YoutubePlaylistItemsUpdateSecurity = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsUpdateSecurity, _super);
    function YoutubePlaylistItemsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsUpdateSecurityOption1)
    ], YoutubePlaylistItemsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsUpdateSecurityOption2)
    ], YoutubePlaylistItemsUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsUpdateSecurityOption3)
    ], YoutubePlaylistItemsUpdateSecurity.prototype, "option3", void 0);
    return YoutubePlaylistItemsUpdateSecurity;
}(SpeakeasyBase));
export { YoutubePlaylistItemsUpdateSecurity };
var YoutubePlaylistItemsUpdateRequest = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsUpdateRequest, _super);
    function YoutubePlaylistItemsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubePlaylistItemsUpdateQueryParams)
    ], YoutubePlaylistItemsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PlaylistItem)
    ], YoutubePlaylistItemsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubePlaylistItemsUpdateSecurity)
    ], YoutubePlaylistItemsUpdateRequest.prototype, "security", void 0);
    return YoutubePlaylistItemsUpdateRequest;
}(SpeakeasyBase));
export { YoutubePlaylistItemsUpdateRequest };
var YoutubePlaylistItemsUpdateResponse = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsUpdateResponse, _super);
    function YoutubePlaylistItemsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlaylistItem)
    ], YoutubePlaylistItemsUpdateResponse.prototype, "playlistItem", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubePlaylistItemsUpdateResponse.prototype, "statusCode", void 0);
    return YoutubePlaylistItemsUpdateResponse;
}(SpeakeasyBase));
export { YoutubePlaylistItemsUpdateResponse };
