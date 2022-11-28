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
var YoutubeCaptionsInsertQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsInsertQueryParams, _super);
    function YoutubeCaptionsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOf" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsInsertQueryParams.prototype, "onBehalfOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsInsertQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeCaptionsInsertQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeCaptionsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sync" }),
        __metadata("design:type", Boolean)
    ], YoutubeCaptionsInsertQueryParams.prototype, "sync", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeCaptionsInsertQueryParams;
}(SpeakeasyBase));
export { YoutubeCaptionsInsertQueryParams };
var YoutubeCaptionsInsertRequests = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsInsertRequests, _super);
    function YoutubeCaptionsInsertRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeCaptionsInsertRequests.prototype, "applicationOctetStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeCaptionsInsertRequests.prototype, "textXml", void 0);
    return YoutubeCaptionsInsertRequests;
}(SpeakeasyBase));
export { YoutubeCaptionsInsertRequests };
var YoutubeCaptionsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsInsertSecurityOption1, _super);
    function YoutubeCaptionsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeCaptionsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeCaptionsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeCaptionsInsertSecurityOption1;
}(SpeakeasyBase));
export { YoutubeCaptionsInsertSecurityOption1 };
var YoutubeCaptionsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsInsertSecurityOption2, _super);
    function YoutubeCaptionsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeCaptionsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeCaptionsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeCaptionsInsertSecurityOption2;
}(SpeakeasyBase));
export { YoutubeCaptionsInsertSecurityOption2 };
var YoutubeCaptionsInsertSecurity = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsInsertSecurity, _super);
    function YoutubeCaptionsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeCaptionsInsertSecurityOption1)
    ], YoutubeCaptionsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeCaptionsInsertSecurityOption2)
    ], YoutubeCaptionsInsertSecurity.prototype, "option2", void 0);
    return YoutubeCaptionsInsertSecurity;
}(SpeakeasyBase));
export { YoutubeCaptionsInsertSecurity };
var YoutubeCaptionsInsertRequest = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsInsertRequest, _super);
    function YoutubeCaptionsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeCaptionsInsertQueryParams)
    ], YoutubeCaptionsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeCaptionsInsertRequests)
    ], YoutubeCaptionsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeCaptionsInsertSecurity)
    ], YoutubeCaptionsInsertRequest.prototype, "security", void 0);
    return YoutubeCaptionsInsertRequest;
}(SpeakeasyBase));
export { YoutubeCaptionsInsertRequest };
var YoutubeCaptionsInsertResponse = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsInsertResponse, _super);
    function YoutubeCaptionsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Caption)
    ], YoutubeCaptionsInsertResponse.prototype, "caption", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeCaptionsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeCaptionsInsertResponse.prototype, "statusCode", void 0);
    return YoutubeCaptionsInsertResponse;
}(SpeakeasyBase));
export { YoutubeCaptionsInsertResponse };
