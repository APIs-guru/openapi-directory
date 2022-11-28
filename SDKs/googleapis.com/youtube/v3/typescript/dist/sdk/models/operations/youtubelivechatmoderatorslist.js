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
var YoutubeLiveChatModeratorsListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatModeratorsListQueryParams, _super);
    function YoutubeLiveChatModeratorsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveChatId" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsListQueryParams.prototype, "liveChatId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], YoutubeLiveChatModeratorsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeLiveChatModeratorsListQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeLiveChatModeratorsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsListQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeLiveChatModeratorsListQueryParams;
}(SpeakeasyBase));
export { YoutubeLiveChatModeratorsListQueryParams };
var YoutubeLiveChatModeratorsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatModeratorsListSecurityOption1, _super);
    function YoutubeLiveChatModeratorsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveChatModeratorsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveChatModeratorsListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeLiveChatModeratorsListSecurityOption1;
}(SpeakeasyBase));
export { YoutubeLiveChatModeratorsListSecurityOption1 };
var YoutubeLiveChatModeratorsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatModeratorsListSecurityOption2, _super);
    function YoutubeLiveChatModeratorsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveChatModeratorsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveChatModeratorsListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeLiveChatModeratorsListSecurityOption2;
}(SpeakeasyBase));
export { YoutubeLiveChatModeratorsListSecurityOption2 };
var YoutubeLiveChatModeratorsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatModeratorsListSecurityOption3, _super);
    function YoutubeLiveChatModeratorsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveChatModeratorsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveChatModeratorsListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeLiveChatModeratorsListSecurityOption3;
}(SpeakeasyBase));
export { YoutubeLiveChatModeratorsListSecurityOption3 };
var YoutubeLiveChatModeratorsListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatModeratorsListSecurity, _super);
    function YoutubeLiveChatModeratorsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveChatModeratorsListSecurityOption1)
    ], YoutubeLiveChatModeratorsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveChatModeratorsListSecurityOption2)
    ], YoutubeLiveChatModeratorsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveChatModeratorsListSecurityOption3)
    ], YoutubeLiveChatModeratorsListSecurity.prototype, "option3", void 0);
    return YoutubeLiveChatModeratorsListSecurity;
}(SpeakeasyBase));
export { YoutubeLiveChatModeratorsListSecurity };
var YoutubeLiveChatModeratorsListRequest = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatModeratorsListRequest, _super);
    function YoutubeLiveChatModeratorsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveChatModeratorsListQueryParams)
    ], YoutubeLiveChatModeratorsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveChatModeratorsListSecurity)
    ], YoutubeLiveChatModeratorsListRequest.prototype, "security", void 0);
    return YoutubeLiveChatModeratorsListRequest;
}(SpeakeasyBase));
export { YoutubeLiveChatModeratorsListRequest };
var YoutubeLiveChatModeratorsListResponse = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatModeratorsListResponse, _super);
    function YoutubeLiveChatModeratorsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiveChatModeratorListResponse)
    ], YoutubeLiveChatModeratorsListResponse.prototype, "liveChatModeratorListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeLiveChatModeratorsListResponse.prototype, "statusCode", void 0);
    return YoutubeLiveChatModeratorsListResponse;
}(SpeakeasyBase));
export { YoutubeLiveChatModeratorsListResponse };
