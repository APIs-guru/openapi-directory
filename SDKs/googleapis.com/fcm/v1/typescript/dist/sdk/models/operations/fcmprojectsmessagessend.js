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
var FcmProjectsMessagesSendPathParams = /** @class */ (function (_super) {
    __extends(FcmProjectsMessagesSendPathParams, _super);
    function FcmProjectsMessagesSendPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FcmProjectsMessagesSendPathParams.prototype, "parent", void 0);
    return FcmProjectsMessagesSendPathParams;
}(SpeakeasyBase));
export { FcmProjectsMessagesSendPathParams };
var FcmProjectsMessagesSendQueryParams = /** @class */ (function (_super) {
    __extends(FcmProjectsMessagesSendQueryParams, _super);
    function FcmProjectsMessagesSendQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FcmProjectsMessagesSendQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FcmProjectsMessagesSendQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FcmProjectsMessagesSendQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FcmProjectsMessagesSendQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FcmProjectsMessagesSendQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FcmProjectsMessagesSendQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FcmProjectsMessagesSendQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FcmProjectsMessagesSendQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FcmProjectsMessagesSendQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FcmProjectsMessagesSendQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FcmProjectsMessagesSendQueryParams.prototype, "uploadProtocol", void 0);
    return FcmProjectsMessagesSendQueryParams;
}(SpeakeasyBase));
export { FcmProjectsMessagesSendQueryParams };
var FcmProjectsMessagesSendSecurityOption1 = /** @class */ (function (_super) {
    __extends(FcmProjectsMessagesSendSecurityOption1, _super);
    function FcmProjectsMessagesSendSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FcmProjectsMessagesSendSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FcmProjectsMessagesSendSecurityOption1.prototype, "oauth2c", void 0);
    return FcmProjectsMessagesSendSecurityOption1;
}(SpeakeasyBase));
export { FcmProjectsMessagesSendSecurityOption1 };
var FcmProjectsMessagesSendSecurityOption2 = /** @class */ (function (_super) {
    __extends(FcmProjectsMessagesSendSecurityOption2, _super);
    function FcmProjectsMessagesSendSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FcmProjectsMessagesSendSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FcmProjectsMessagesSendSecurityOption2.prototype, "oauth2c", void 0);
    return FcmProjectsMessagesSendSecurityOption2;
}(SpeakeasyBase));
export { FcmProjectsMessagesSendSecurityOption2 };
var FcmProjectsMessagesSendSecurity = /** @class */ (function (_super) {
    __extends(FcmProjectsMessagesSendSecurity, _super);
    function FcmProjectsMessagesSendSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FcmProjectsMessagesSendSecurityOption1)
    ], FcmProjectsMessagesSendSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FcmProjectsMessagesSendSecurityOption2)
    ], FcmProjectsMessagesSendSecurity.prototype, "option2", void 0);
    return FcmProjectsMessagesSendSecurity;
}(SpeakeasyBase));
export { FcmProjectsMessagesSendSecurity };
var FcmProjectsMessagesSendRequest = /** @class */ (function (_super) {
    __extends(FcmProjectsMessagesSendRequest, _super);
    function FcmProjectsMessagesSendRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FcmProjectsMessagesSendPathParams)
    ], FcmProjectsMessagesSendRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FcmProjectsMessagesSendQueryParams)
    ], FcmProjectsMessagesSendRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SendMessageRequest)
    ], FcmProjectsMessagesSendRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FcmProjectsMessagesSendSecurity)
    ], FcmProjectsMessagesSendRequest.prototype, "security", void 0);
    return FcmProjectsMessagesSendRequest;
}(SpeakeasyBase));
export { FcmProjectsMessagesSendRequest };
var FcmProjectsMessagesSendResponse = /** @class */ (function (_super) {
    __extends(FcmProjectsMessagesSendResponse, _super);
    function FcmProjectsMessagesSendResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FcmProjectsMessagesSendResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Message)
    ], FcmProjectsMessagesSendResponse.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FcmProjectsMessagesSendResponse.prototype, "statusCode", void 0);
    return FcmProjectsMessagesSendResponse;
}(SpeakeasyBase));
export { FcmProjectsMessagesSendResponse };
