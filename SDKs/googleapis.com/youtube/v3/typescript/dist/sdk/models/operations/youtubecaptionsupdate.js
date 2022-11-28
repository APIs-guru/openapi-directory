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
var YoutubeCaptionsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsUpdateQueryParams, _super);
    function YoutubeCaptionsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOf" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsUpdateQueryParams.prototype, "onBehalfOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsUpdateQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeCaptionsUpdateQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeCaptionsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sync" }),
        __metadata("design:type", Boolean)
    ], YoutubeCaptionsUpdateQueryParams.prototype, "sync", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeCaptionsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeCaptionsUpdateQueryParams;
}(SpeakeasyBase));
export { YoutubeCaptionsUpdateQueryParams };
var YoutubeCaptionsUpdateRequests = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsUpdateRequests, _super);
    function YoutubeCaptionsUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeCaptionsUpdateRequests.prototype, "applicationOctetStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeCaptionsUpdateRequests.prototype, "textXml", void 0);
    return YoutubeCaptionsUpdateRequests;
}(SpeakeasyBase));
export { YoutubeCaptionsUpdateRequests };
var YoutubeCaptionsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsUpdateSecurityOption1, _super);
    function YoutubeCaptionsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeCaptionsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeCaptionsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeCaptionsUpdateSecurityOption1;
}(SpeakeasyBase));
export { YoutubeCaptionsUpdateSecurityOption1 };
var YoutubeCaptionsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsUpdateSecurityOption2, _super);
    function YoutubeCaptionsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeCaptionsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeCaptionsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeCaptionsUpdateSecurityOption2;
}(SpeakeasyBase));
export { YoutubeCaptionsUpdateSecurityOption2 };
var YoutubeCaptionsUpdateSecurity = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsUpdateSecurity, _super);
    function YoutubeCaptionsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeCaptionsUpdateSecurityOption1)
    ], YoutubeCaptionsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeCaptionsUpdateSecurityOption2)
    ], YoutubeCaptionsUpdateSecurity.prototype, "option2", void 0);
    return YoutubeCaptionsUpdateSecurity;
}(SpeakeasyBase));
export { YoutubeCaptionsUpdateSecurity };
var YoutubeCaptionsUpdateRequest = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsUpdateRequest, _super);
    function YoutubeCaptionsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeCaptionsUpdateQueryParams)
    ], YoutubeCaptionsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeCaptionsUpdateRequests)
    ], YoutubeCaptionsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeCaptionsUpdateSecurity)
    ], YoutubeCaptionsUpdateRequest.prototype, "security", void 0);
    return YoutubeCaptionsUpdateRequest;
}(SpeakeasyBase));
export { YoutubeCaptionsUpdateRequest };
var YoutubeCaptionsUpdateResponse = /** @class */ (function (_super) {
    __extends(YoutubeCaptionsUpdateResponse, _super);
    function YoutubeCaptionsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Caption)
    ], YoutubeCaptionsUpdateResponse.prototype, "caption", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeCaptionsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeCaptionsUpdateResponse.prototype, "statusCode", void 0);
    return YoutubeCaptionsUpdateResponse;
}(SpeakeasyBase));
export { YoutubeCaptionsUpdateResponse };
