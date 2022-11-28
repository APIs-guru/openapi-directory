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
var StorageProjectsHmacKeysCreatePathParams = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysCreatePathParams, _super);
    function StorageProjectsHmacKeysCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysCreatePathParams.prototype, "projectId", void 0);
    return StorageProjectsHmacKeysCreatePathParams;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysCreatePathParams };
var StorageProjectsHmacKeysCreateQueryParams = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysCreateQueryParams, _super);
    function StorageProjectsHmacKeysCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageProjectsHmacKeysCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceAccountEmail" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysCreateQueryParams.prototype, "serviceAccountEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysCreateQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysCreateQueryParams.prototype, "userProject", void 0);
    return StorageProjectsHmacKeysCreateQueryParams;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysCreateQueryParams };
var StorageProjectsHmacKeysCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysCreateSecurityOption1, _super);
    function StorageProjectsHmacKeysCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysCreateSecurityOption1.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysCreateSecurityOption1;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysCreateSecurityOption1 };
var StorageProjectsHmacKeysCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysCreateSecurityOption2, _super);
    function StorageProjectsHmacKeysCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysCreateSecurityOption2.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysCreateSecurityOption2;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysCreateSecurityOption2 };
var StorageProjectsHmacKeysCreateSecurity = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysCreateSecurity, _super);
    function StorageProjectsHmacKeysCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysCreateSecurityOption1)
    ], StorageProjectsHmacKeysCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysCreateSecurityOption2)
    ], StorageProjectsHmacKeysCreateSecurity.prototype, "option2", void 0);
    return StorageProjectsHmacKeysCreateSecurity;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysCreateSecurity };
var StorageProjectsHmacKeysCreateRequest = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysCreateRequest, _super);
    function StorageProjectsHmacKeysCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageProjectsHmacKeysCreatePathParams)
    ], StorageProjectsHmacKeysCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageProjectsHmacKeysCreateQueryParams)
    ], StorageProjectsHmacKeysCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageProjectsHmacKeysCreateSecurity)
    ], StorageProjectsHmacKeysCreateRequest.prototype, "security", void 0);
    return StorageProjectsHmacKeysCreateRequest;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysCreateRequest };
var StorageProjectsHmacKeysCreateResponse = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysCreateResponse, _super);
    function StorageProjectsHmacKeysCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HmacKey)
    ], StorageProjectsHmacKeysCreateResponse.prototype, "hmacKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageProjectsHmacKeysCreateResponse.prototype, "statusCode", void 0);
    return StorageProjectsHmacKeysCreateResponse;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysCreateResponse };
