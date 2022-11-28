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
var CloudsearchMediaUploadPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchMediaUploadPathParams, _super);
    function CloudsearchMediaUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceName" }),
        __metadata("design:type", String)
    ], CloudsearchMediaUploadPathParams.prototype, "resourceName", void 0);
    return CloudsearchMediaUploadPathParams;
}(SpeakeasyBase));
export { CloudsearchMediaUploadPathParams };
var CloudsearchMediaUploadQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchMediaUploadQueryParams, _super);
    function CloudsearchMediaUploadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchMediaUploadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchMediaUploadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchMediaUploadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchMediaUploadQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchMediaUploadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchMediaUploadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchMediaUploadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchMediaUploadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchMediaUploadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchMediaUploadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchMediaUploadQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchMediaUploadQueryParams;
}(SpeakeasyBase));
export { CloudsearchMediaUploadQueryParams };
var CloudsearchMediaUploadSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchMediaUploadSecurityOption1, _super);
    function CloudsearchMediaUploadSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchMediaUploadSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchMediaUploadSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchMediaUploadSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchMediaUploadSecurityOption1 };
var CloudsearchMediaUploadSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchMediaUploadSecurityOption2, _super);
    function CloudsearchMediaUploadSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchMediaUploadSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchMediaUploadSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchMediaUploadSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchMediaUploadSecurityOption2 };
var CloudsearchMediaUploadSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchMediaUploadSecurity, _super);
    function CloudsearchMediaUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchMediaUploadSecurityOption1)
    ], CloudsearchMediaUploadSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchMediaUploadSecurityOption2)
    ], CloudsearchMediaUploadSecurity.prototype, "option2", void 0);
    return CloudsearchMediaUploadSecurity;
}(SpeakeasyBase));
export { CloudsearchMediaUploadSecurity };
var CloudsearchMediaUploadRequest = /** @class */ (function (_super) {
    __extends(CloudsearchMediaUploadRequest, _super);
    function CloudsearchMediaUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchMediaUploadPathParams)
    ], CloudsearchMediaUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchMediaUploadQueryParams)
    ], CloudsearchMediaUploadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], CloudsearchMediaUploadRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchMediaUploadSecurity)
    ], CloudsearchMediaUploadRequest.prototype, "security", void 0);
    return CloudsearchMediaUploadRequest;
}(SpeakeasyBase));
export { CloudsearchMediaUploadRequest };
var CloudsearchMediaUploadResponse = /** @class */ (function (_super) {
    __extends(CloudsearchMediaUploadResponse, _super);
    function CloudsearchMediaUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchMediaUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Media)
    ], CloudsearchMediaUploadResponse.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchMediaUploadResponse.prototype, "statusCode", void 0);
    return CloudsearchMediaUploadResponse;
}(SpeakeasyBase));
export { CloudsearchMediaUploadResponse };
