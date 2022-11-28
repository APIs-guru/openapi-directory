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
var DisplayvideoSdfdownloadtasksOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoSdfdownloadtasksOperationsGetPathParams, _super);
    function DisplayvideoSdfdownloadtasksOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DisplayvideoSdfdownloadtasksOperationsGetPathParams.prototype, "name", void 0);
    return DisplayvideoSdfdownloadtasksOperationsGetPathParams;
}(SpeakeasyBase));
export { DisplayvideoSdfdownloadtasksOperationsGetPathParams };
var DisplayvideoSdfdownloadtasksOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoSdfdownloadtasksOperationsGetQueryParams, _super);
    function DisplayvideoSdfdownloadtasksOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoSdfdownloadtasksOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoSdfdownloadtasksOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoSdfdownloadtasksOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoSdfdownloadtasksOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoSdfdownloadtasksOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoSdfdownloadtasksOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoSdfdownloadtasksOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoSdfdownloadtasksOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoSdfdownloadtasksOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoSdfdownloadtasksOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoSdfdownloadtasksOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoSdfdownloadtasksOperationsGetQueryParams;
}(SpeakeasyBase));
export { DisplayvideoSdfdownloadtasksOperationsGetQueryParams };
var DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1, _super);
    function DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1;
}(SpeakeasyBase));
export { DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1 };
var DisplayvideoSdfdownloadtasksOperationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DisplayvideoSdfdownloadtasksOperationsGetSecurityOption2, _super);
    function DisplayvideoSdfdownloadtasksOperationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoSdfdownloadtasksOperationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoSdfdownloadtasksOperationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DisplayvideoSdfdownloadtasksOperationsGetSecurityOption2;
}(SpeakeasyBase));
export { DisplayvideoSdfdownloadtasksOperationsGetSecurityOption2 };
var DisplayvideoSdfdownloadtasksOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoSdfdownloadtasksOperationsGetSecurity, _super);
    function DisplayvideoSdfdownloadtasksOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1)
    ], DisplayvideoSdfdownloadtasksOperationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoSdfdownloadtasksOperationsGetSecurityOption2)
    ], DisplayvideoSdfdownloadtasksOperationsGetSecurity.prototype, "option2", void 0);
    return DisplayvideoSdfdownloadtasksOperationsGetSecurity;
}(SpeakeasyBase));
export { DisplayvideoSdfdownloadtasksOperationsGetSecurity };
var DisplayvideoSdfdownloadtasksOperationsGetRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoSdfdownloadtasksOperationsGetRequest, _super);
    function DisplayvideoSdfdownloadtasksOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoSdfdownloadtasksOperationsGetPathParams)
    ], DisplayvideoSdfdownloadtasksOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoSdfdownloadtasksOperationsGetQueryParams)
    ], DisplayvideoSdfdownloadtasksOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoSdfdownloadtasksOperationsGetSecurity)
    ], DisplayvideoSdfdownloadtasksOperationsGetRequest.prototype, "security", void 0);
    return DisplayvideoSdfdownloadtasksOperationsGetRequest;
}(SpeakeasyBase));
export { DisplayvideoSdfdownloadtasksOperationsGetRequest };
var DisplayvideoSdfdownloadtasksOperationsGetResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoSdfdownloadtasksOperationsGetResponse, _super);
    function DisplayvideoSdfdownloadtasksOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoSdfdownloadtasksOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DisplayvideoSdfdownloadtasksOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoSdfdownloadtasksOperationsGetResponse.prototype, "statusCode", void 0);
    return DisplayvideoSdfdownloadtasksOperationsGetResponse;
}(SpeakeasyBase));
export { DisplayvideoSdfdownloadtasksOperationsGetResponse };
