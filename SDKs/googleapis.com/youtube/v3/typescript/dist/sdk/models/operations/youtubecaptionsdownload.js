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
var YoutubeCaptionsDownloadPathParams = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsDownloadPathParams, _super);
    function YoutubeCaptionsDownloadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsDownloadPathParams.prototype, "id", void 0);
    return YoutubeCaptionsDownloadPathParams;
}(SpeakeasyBase));
export { YoutubeCaptionsDownloadPathParams };
var YoutubeCaptionsDownloadQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsDownloadQueryParams, _super);
    function YoutubeCaptionsDownloadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsDownloadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsDownloadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsDownloadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsDownloadQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsDownloadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsDownloadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsDownloadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOf" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsDownloadQueryParams.prototype, "onBehalfOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsDownloadQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeCaptionsDownloadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsDownloadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tfmt" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsDownloadQueryParams.prototype, "tfmt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tlang" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsDownloadQueryParams.prototype, "tlang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsDownloadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsDownloadQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeCaptionsDownloadQueryParams;
}(SpeakeasyBase));
export { YoutubeCaptionsDownloadQueryParams };
var YoutubeCaptionsDownloadSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsDownloadSecurityOption1, _super);
    function YoutubeCaptionsDownloadSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeCaptionsDownloadSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeCaptionsDownloadSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeCaptionsDownloadSecurityOption1;
}(SpeakeasyBase));
export { YoutubeCaptionsDownloadSecurityOption1 };
var YoutubeCaptionsDownloadSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsDownloadSecurityOption2, _super);
    function YoutubeCaptionsDownloadSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeCaptionsDownloadSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeCaptionsDownloadSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeCaptionsDownloadSecurityOption2;
}(SpeakeasyBase));
export { YoutubeCaptionsDownloadSecurityOption2 };
var YoutubeCaptionsDownloadSecurity = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsDownloadSecurity, _super);
    function YoutubeCaptionsDownloadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeCaptionsDownloadSecurityOption1)
    ], YoutubeCaptionsDownloadSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeCaptionsDownloadSecurityOption2)
    ], YoutubeCaptionsDownloadSecurity.prototype, "option2", void 0);
    return YoutubeCaptionsDownloadSecurity;
}(SpeakeasyBase));
export { YoutubeCaptionsDownloadSecurity };
var YoutubeCaptionsDownloadRequest = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsDownloadRequest, _super);
    function YoutubeCaptionsDownloadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeCaptionsDownloadPathParams)
    ], YoutubeCaptionsDownloadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeCaptionsDownloadQueryParams)
    ], YoutubeCaptionsDownloadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeCaptionsDownloadSecurity)
    ], YoutubeCaptionsDownloadRequest.prototype, "security", void 0);
    return YoutubeCaptionsDownloadRequest;
}(SpeakeasyBase));
export { YoutubeCaptionsDownloadRequest };
var YoutubeCaptionsDownloadResponse = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsDownloadResponse, _super);
    function YoutubeCaptionsDownloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeCaptionsDownloadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeCaptionsDownloadResponse.prototype, "statusCode", void 0);
    return YoutubeCaptionsDownloadResponse;
}(SpeakeasyBase));
export { YoutubeCaptionsDownloadResponse };
