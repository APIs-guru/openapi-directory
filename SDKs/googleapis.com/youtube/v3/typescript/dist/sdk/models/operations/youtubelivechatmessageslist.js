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
var YoutubeLiveChatMessagesListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesListQueryParams, _super);
    function YoutubeLiveChatMessagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hl" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "hl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveChatId" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "liveChatId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=profileImageSize" }),
        __metadata("design:type", Number)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "profileImageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesListQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeLiveChatMessagesListQueryParams;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesListQueryParams };
var YoutubeLiveChatMessagesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesListSecurityOption1, _super);
    function YoutubeLiveChatMessagesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveChatMessagesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveChatMessagesListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeLiveChatMessagesListSecurityOption1;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesListSecurityOption1 };
var YoutubeLiveChatMessagesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesListSecurityOption2, _super);
    function YoutubeLiveChatMessagesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveChatMessagesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveChatMessagesListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeLiveChatMessagesListSecurityOption2;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesListSecurityOption2 };
var YoutubeLiveChatMessagesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesListSecurityOption3, _super);
    function YoutubeLiveChatMessagesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveChatMessagesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveChatMessagesListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeLiveChatMessagesListSecurityOption3;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesListSecurityOption3 };
var YoutubeLiveChatMessagesListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesListSecurity, _super);
    function YoutubeLiveChatMessagesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveChatMessagesListSecurityOption1)
    ], YoutubeLiveChatMessagesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveChatMessagesListSecurityOption2)
    ], YoutubeLiveChatMessagesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveChatMessagesListSecurityOption3)
    ], YoutubeLiveChatMessagesListSecurity.prototype, "option3", void 0);
    return YoutubeLiveChatMessagesListSecurity;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesListSecurity };
var YoutubeLiveChatMessagesListRequest = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesListRequest, _super);
    function YoutubeLiveChatMessagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveChatMessagesListQueryParams)
    ], YoutubeLiveChatMessagesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveChatMessagesListSecurity)
    ], YoutubeLiveChatMessagesListRequest.prototype, "security", void 0);
    return YoutubeLiveChatMessagesListRequest;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesListRequest };
var YoutubeLiveChatMessagesListResponse = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesListResponse, _super);
    function YoutubeLiveChatMessagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiveChatMessageListResponse)
    ], YoutubeLiveChatMessagesListResponse.prototype, "liveChatMessageListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeLiveChatMessagesListResponse.prototype, "statusCode", void 0);
    return YoutubeLiveChatMessagesListResponse;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesListResponse };
