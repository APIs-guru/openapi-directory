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
var YoutubereportingMediaDownloadPathParams = /** @class */ (function (_super) {
    __extends(YoutubereportingMediaDownloadPathParams, _super);
    function YoutubereportingMediaDownloadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceName" }),
        __metadata("design:type", String)
    ], YoutubereportingMediaDownloadPathParams.prototype, "resourceName", void 0);
    return YoutubereportingMediaDownloadPathParams;
}(SpeakeasyBase));
export { YoutubereportingMediaDownloadPathParams };
var YoutubereportingMediaDownloadQueryParams = /** @class */ (function (_super) {
    __extends(YoutubereportingMediaDownloadQueryParams, _super);
    function YoutubereportingMediaDownloadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubereportingMediaDownloadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubereportingMediaDownloadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubereportingMediaDownloadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubereportingMediaDownloadQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubereportingMediaDownloadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubereportingMediaDownloadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubereportingMediaDownloadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubereportingMediaDownloadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubereportingMediaDownloadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubereportingMediaDownloadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubereportingMediaDownloadQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubereportingMediaDownloadQueryParams;
}(SpeakeasyBase));
export { YoutubereportingMediaDownloadQueryParams };
var YoutubereportingMediaDownloadSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubereportingMediaDownloadSecurityOption1, _super);
    function YoutubereportingMediaDownloadSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubereportingMediaDownloadSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubereportingMediaDownloadSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubereportingMediaDownloadSecurityOption1;
}(SpeakeasyBase));
export { YoutubereportingMediaDownloadSecurityOption1 };
var YoutubereportingMediaDownloadSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubereportingMediaDownloadSecurityOption2, _super);
    function YoutubereportingMediaDownloadSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubereportingMediaDownloadSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubereportingMediaDownloadSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubereportingMediaDownloadSecurityOption2;
}(SpeakeasyBase));
export { YoutubereportingMediaDownloadSecurityOption2 };
var YoutubereportingMediaDownloadSecurity = /** @class */ (function (_super) {
    __extends(YoutubereportingMediaDownloadSecurity, _super);
    function YoutubereportingMediaDownloadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubereportingMediaDownloadSecurityOption1)
    ], YoutubereportingMediaDownloadSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubereportingMediaDownloadSecurityOption2)
    ], YoutubereportingMediaDownloadSecurity.prototype, "option2", void 0);
    return YoutubereportingMediaDownloadSecurity;
}(SpeakeasyBase));
export { YoutubereportingMediaDownloadSecurity };
var YoutubereportingMediaDownloadRequest = /** @class */ (function (_super) {
    __extends(YoutubereportingMediaDownloadRequest, _super);
    function YoutubereportingMediaDownloadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubereportingMediaDownloadPathParams)
    ], YoutubereportingMediaDownloadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubereportingMediaDownloadQueryParams)
    ], YoutubereportingMediaDownloadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubereportingMediaDownloadSecurity)
    ], YoutubereportingMediaDownloadRequest.prototype, "security", void 0);
    return YoutubereportingMediaDownloadRequest;
}(SpeakeasyBase));
export { YoutubereportingMediaDownloadRequest };
var YoutubereportingMediaDownloadResponse = /** @class */ (function (_super) {
    __extends(YoutubereportingMediaDownloadResponse, _super);
    function YoutubereportingMediaDownloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubereportingMediaDownloadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GdataMedia)
    ], YoutubereportingMediaDownloadResponse.prototype, "gdataMedia", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubereportingMediaDownloadResponse.prototype, "statusCode", void 0);
    return YoutubereportingMediaDownloadResponse;
}(SpeakeasyBase));
export { YoutubereportingMediaDownloadResponse };
