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
var StorageProjectsHmacKeysGetPathParams = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysGetPathParams, _super);
    function StorageProjectsHmacKeysGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accessId" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysGetPathParams.prototype, "accessId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysGetPathParams.prototype, "projectId", void 0);
    return StorageProjectsHmacKeysGetPathParams;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysGetPathParams };
var StorageProjectsHmacKeysGetQueryParams = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysGetQueryParams, _super);
    function StorageProjectsHmacKeysGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageProjectsHmacKeysGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysGetQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysGetQueryParams.prototype, "userProject", void 0);
    return StorageProjectsHmacKeysGetQueryParams;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysGetQueryParams };
var StorageProjectsHmacKeysGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysGetSecurityOption1, _super);
    function StorageProjectsHmacKeysGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysGetSecurityOption1.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysGetSecurityOption1;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysGetSecurityOption1 };
var StorageProjectsHmacKeysGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysGetSecurityOption2, _super);
    function StorageProjectsHmacKeysGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysGetSecurityOption2.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysGetSecurityOption2;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysGetSecurityOption2 };
var StorageProjectsHmacKeysGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysGetSecurityOption3, _super);
    function StorageProjectsHmacKeysGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysGetSecurityOption3.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysGetSecurityOption3;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysGetSecurityOption3 };
var StorageProjectsHmacKeysGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysGetSecurityOption4, _super);
    function StorageProjectsHmacKeysGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysGetSecurityOption4.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysGetSecurityOption4;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysGetSecurityOption4 };
var StorageProjectsHmacKeysGetSecurity = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysGetSecurity, _super);
    function StorageProjectsHmacKeysGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysGetSecurityOption1)
    ], StorageProjectsHmacKeysGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysGetSecurityOption2)
    ], StorageProjectsHmacKeysGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysGetSecurityOption3)
    ], StorageProjectsHmacKeysGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysGetSecurityOption4)
    ], StorageProjectsHmacKeysGetSecurity.prototype, "option4", void 0);
    return StorageProjectsHmacKeysGetSecurity;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysGetSecurity };
var StorageProjectsHmacKeysGetRequest = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysGetRequest, _super);
    function StorageProjectsHmacKeysGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageProjectsHmacKeysGetPathParams)
    ], StorageProjectsHmacKeysGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageProjectsHmacKeysGetQueryParams)
    ], StorageProjectsHmacKeysGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageProjectsHmacKeysGetSecurity)
    ], StorageProjectsHmacKeysGetRequest.prototype, "security", void 0);
    return StorageProjectsHmacKeysGetRequest;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysGetRequest };
var StorageProjectsHmacKeysGetResponse = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysGetResponse, _super);
    function StorageProjectsHmacKeysGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HmacKeyMetadata)
    ], StorageProjectsHmacKeysGetResponse.prototype, "hmacKeyMetadata", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageProjectsHmacKeysGetResponse.prototype, "statusCode", void 0);
    return StorageProjectsHmacKeysGetResponse;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysGetResponse };
