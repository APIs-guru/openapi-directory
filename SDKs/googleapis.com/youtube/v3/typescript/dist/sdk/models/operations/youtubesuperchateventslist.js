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
var YoutubeSuperChatEventsListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeSuperChatEventsListQueryParams, _super);
    function YoutubeSuperChatEventsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeSuperChatEventsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeSuperChatEventsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeSuperChatEventsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeSuperChatEventsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeSuperChatEventsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hl" }),
        __metadata("design:type", String)
    ], YoutubeSuperChatEventsListQueryParams.prototype, "hl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeSuperChatEventsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], YoutubeSuperChatEventsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeSuperChatEventsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], YoutubeSuperChatEventsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeSuperChatEventsListQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeSuperChatEventsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeSuperChatEventsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeSuperChatEventsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeSuperChatEventsListQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeSuperChatEventsListQueryParams;
}(SpeakeasyBase));
export { YoutubeSuperChatEventsListQueryParams };
var YoutubeSuperChatEventsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeSuperChatEventsListSecurityOption1, _super);
    function YoutubeSuperChatEventsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSuperChatEventsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSuperChatEventsListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeSuperChatEventsListSecurityOption1;
}(SpeakeasyBase));
export { YoutubeSuperChatEventsListSecurityOption1 };
var YoutubeSuperChatEventsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeSuperChatEventsListSecurityOption2, _super);
    function YoutubeSuperChatEventsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSuperChatEventsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSuperChatEventsListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeSuperChatEventsListSecurityOption2;
}(SpeakeasyBase));
export { YoutubeSuperChatEventsListSecurityOption2 };
var YoutubeSuperChatEventsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeSuperChatEventsListSecurityOption3, _super);
    function YoutubeSuperChatEventsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSuperChatEventsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSuperChatEventsListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeSuperChatEventsListSecurityOption3;
}(SpeakeasyBase));
export { YoutubeSuperChatEventsListSecurityOption3 };
var YoutubeSuperChatEventsListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeSuperChatEventsListSecurity, _super);
    function YoutubeSuperChatEventsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSuperChatEventsListSecurityOption1)
    ], YoutubeSuperChatEventsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSuperChatEventsListSecurityOption2)
    ], YoutubeSuperChatEventsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSuperChatEventsListSecurityOption3)
    ], YoutubeSuperChatEventsListSecurity.prototype, "option3", void 0);
    return YoutubeSuperChatEventsListSecurity;
}(SpeakeasyBase));
export { YoutubeSuperChatEventsListSecurity };
var YoutubeSuperChatEventsListRequest = /** @class */ (function (_super) {
    __extends(YoutubeSuperChatEventsListRequest, _super);
    function YoutubeSuperChatEventsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeSuperChatEventsListQueryParams)
    ], YoutubeSuperChatEventsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeSuperChatEventsListSecurity)
    ], YoutubeSuperChatEventsListRequest.prototype, "security", void 0);
    return YoutubeSuperChatEventsListRequest;
}(SpeakeasyBase));
export { YoutubeSuperChatEventsListRequest };
var YoutubeSuperChatEventsListResponse = /** @class */ (function (_super) {
    __extends(YoutubeSuperChatEventsListResponse, _super);
    function YoutubeSuperChatEventsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeSuperChatEventsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeSuperChatEventsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SuperChatEventListResponse)
    ], YoutubeSuperChatEventsListResponse.prototype, "superChatEventListResponse", void 0);
    return YoutubeSuperChatEventsListResponse;
}(SpeakeasyBase));
export { YoutubeSuperChatEventsListResponse };
