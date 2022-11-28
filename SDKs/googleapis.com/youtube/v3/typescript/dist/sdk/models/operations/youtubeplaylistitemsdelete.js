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
var YoutubePlaylistItemsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsDeleteQueryParams, _super);
    function YoutubePlaylistItemsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsDeleteQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsDeleteQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubePlaylistItemsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubePlaylistItemsDeleteQueryParams;
}(SpeakeasyBase));
export { YoutubePlaylistItemsDeleteQueryParams };
var YoutubePlaylistItemsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsDeleteSecurityOption1, _super);
    function YoutubePlaylistItemsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistItemsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistItemsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsDeleteSecurityOption1;
}(SpeakeasyBase));
export { YoutubePlaylistItemsDeleteSecurityOption1 };
var YoutubePlaylistItemsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsDeleteSecurityOption2, _super);
    function YoutubePlaylistItemsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistItemsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistItemsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsDeleteSecurityOption2;
}(SpeakeasyBase));
export { YoutubePlaylistItemsDeleteSecurityOption2 };
var YoutubePlaylistItemsDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsDeleteSecurityOption3, _super);
    function YoutubePlaylistItemsDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistItemsDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistItemsDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsDeleteSecurityOption3;
}(SpeakeasyBase));
export { YoutubePlaylistItemsDeleteSecurityOption3 };
var YoutubePlaylistItemsDeleteSecurity = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsDeleteSecurity, _super);
    function YoutubePlaylistItemsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsDeleteSecurityOption1)
    ], YoutubePlaylistItemsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsDeleteSecurityOption2)
    ], YoutubePlaylistItemsDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsDeleteSecurityOption3)
    ], YoutubePlaylistItemsDeleteSecurity.prototype, "option3", void 0);
    return YoutubePlaylistItemsDeleteSecurity;
}(SpeakeasyBase));
export { YoutubePlaylistItemsDeleteSecurity };
var YoutubePlaylistItemsDeleteRequest = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsDeleteRequest, _super);
    function YoutubePlaylistItemsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubePlaylistItemsDeleteQueryParams)
    ], YoutubePlaylistItemsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubePlaylistItemsDeleteSecurity)
    ], YoutubePlaylistItemsDeleteRequest.prototype, "security", void 0);
    return YoutubePlaylistItemsDeleteRequest;
}(SpeakeasyBase));
export { YoutubePlaylistItemsDeleteRequest };
var YoutubePlaylistItemsDeleteResponse = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsDeleteResponse, _super);
    function YoutubePlaylistItemsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubePlaylistItemsDeleteResponse.prototype, "statusCode", void 0);
    return YoutubePlaylistItemsDeleteResponse;
}(SpeakeasyBase));
export { YoutubePlaylistItemsDeleteResponse };
