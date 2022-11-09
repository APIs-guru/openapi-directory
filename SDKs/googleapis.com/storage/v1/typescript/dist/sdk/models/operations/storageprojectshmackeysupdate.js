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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var StorageProjectsHmacKeysUpdatePathParams = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysUpdatePathParams, _super);
    function StorageProjectsHmacKeysUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=accessId" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdatePathParams.prototype, "accessId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdatePathParams.prototype, "projectId", void 0);
    return StorageProjectsHmacKeysUpdatePathParams;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysUpdatePathParams };
var StorageProjectsHmacKeysUpdateQueryParams = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysUpdateQueryParams, _super);
    function StorageProjectsHmacKeysUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "userIp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "userProject", void 0);
    return StorageProjectsHmacKeysUpdateQueryParams;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysUpdateQueryParams };
var StorageProjectsHmacKeysUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysUpdateSecurityOption1, _super);
    function StorageProjectsHmacKeysUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysUpdateSecurityOption1;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysUpdateSecurityOption1 };
var StorageProjectsHmacKeysUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysUpdateSecurityOption2, _super);
    function StorageProjectsHmacKeysUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysUpdateSecurityOption2;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysUpdateSecurityOption2 };
var StorageProjectsHmacKeysUpdateSecurity = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysUpdateSecurity, _super);
    function StorageProjectsHmacKeysUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysUpdateSecurityOption1)
    ], StorageProjectsHmacKeysUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysUpdateSecurityOption2)
    ], StorageProjectsHmacKeysUpdateSecurity.prototype, "option2", void 0);
    return StorageProjectsHmacKeysUpdateSecurity;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysUpdateSecurity };
var StorageProjectsHmacKeysUpdateRequest = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysUpdateRequest, _super);
    function StorageProjectsHmacKeysUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageProjectsHmacKeysUpdatePathParams)
    ], StorageProjectsHmacKeysUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageProjectsHmacKeysUpdateQueryParams)
    ], StorageProjectsHmacKeysUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HmacKeyMetadata)
    ], StorageProjectsHmacKeysUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageProjectsHmacKeysUpdateSecurity)
    ], StorageProjectsHmacKeysUpdateRequest.prototype, "security", void 0);
    return StorageProjectsHmacKeysUpdateRequest;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysUpdateRequest };
var StorageProjectsHmacKeysUpdateResponse = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysUpdateResponse, _super);
    function StorageProjectsHmacKeysUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HmacKeyMetadata)
    ], StorageProjectsHmacKeysUpdateResponse.prototype, "hmacKeyMetadata", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageProjectsHmacKeysUpdateResponse.prototype, "statusCode", void 0);
    return StorageProjectsHmacKeysUpdateResponse;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysUpdateResponse };
