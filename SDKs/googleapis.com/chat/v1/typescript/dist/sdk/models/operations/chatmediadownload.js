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
var ChatMediaDownloadPathParams = /** @class */ (function (_super) {
    __extends(ChatMediaDownloadPathParams, _super);
    function ChatMediaDownloadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceName" }),
        __metadata("design:type", String)
    ], ChatMediaDownloadPathParams.prototype, "resourceName", void 0);
    return ChatMediaDownloadPathParams;
}(SpeakeasyBase));
export { ChatMediaDownloadPathParams };
var ChatMediaDownloadQueryParams = /** @class */ (function (_super) {
    __extends(ChatMediaDownloadQueryParams, _super);
    function ChatMediaDownloadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChatMediaDownloadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChatMediaDownloadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChatMediaDownloadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChatMediaDownloadQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChatMediaDownloadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChatMediaDownloadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChatMediaDownloadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChatMediaDownloadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChatMediaDownloadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChatMediaDownloadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChatMediaDownloadQueryParams.prototype, "uploadProtocol", void 0);
    return ChatMediaDownloadQueryParams;
}(SpeakeasyBase));
export { ChatMediaDownloadQueryParams };
var ChatMediaDownloadSecurityOption1 = /** @class */ (function (_super) {
    __extends(ChatMediaDownloadSecurityOption1, _super);
    function ChatMediaDownloadSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChatMediaDownloadSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChatMediaDownloadSecurityOption1.prototype, "oauth2c", void 0);
    return ChatMediaDownloadSecurityOption1;
}(SpeakeasyBase));
export { ChatMediaDownloadSecurityOption1 };
var ChatMediaDownloadSecurityOption2 = /** @class */ (function (_super) {
    __extends(ChatMediaDownloadSecurityOption2, _super);
    function ChatMediaDownloadSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChatMediaDownloadSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChatMediaDownloadSecurityOption2.prototype, "oauth2c", void 0);
    return ChatMediaDownloadSecurityOption2;
}(SpeakeasyBase));
export { ChatMediaDownloadSecurityOption2 };
var ChatMediaDownloadSecurity = /** @class */ (function (_super) {
    __extends(ChatMediaDownloadSecurity, _super);
    function ChatMediaDownloadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ChatMediaDownloadSecurityOption1)
    ], ChatMediaDownloadSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ChatMediaDownloadSecurityOption2)
    ], ChatMediaDownloadSecurity.prototype, "option2", void 0);
    return ChatMediaDownloadSecurity;
}(SpeakeasyBase));
export { ChatMediaDownloadSecurity };
var ChatMediaDownloadRequest = /** @class */ (function (_super) {
    __extends(ChatMediaDownloadRequest, _super);
    function ChatMediaDownloadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChatMediaDownloadPathParams)
    ], ChatMediaDownloadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChatMediaDownloadQueryParams)
    ], ChatMediaDownloadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChatMediaDownloadSecurity)
    ], ChatMediaDownloadRequest.prototype, "security", void 0);
    return ChatMediaDownloadRequest;
}(SpeakeasyBase));
export { ChatMediaDownloadRequest };
var ChatMediaDownloadResponse = /** @class */ (function (_super) {
    __extends(ChatMediaDownloadResponse, _super);
    function ChatMediaDownloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChatMediaDownloadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Media)
    ], ChatMediaDownloadResponse.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChatMediaDownloadResponse.prototype, "statusCode", void 0);
    return ChatMediaDownloadResponse;
}(SpeakeasyBase));
export { ChatMediaDownloadResponse };
