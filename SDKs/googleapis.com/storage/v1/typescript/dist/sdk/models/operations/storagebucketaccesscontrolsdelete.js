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
var StorageBucketAccessControlsDeletePathParams = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsDeletePathParams, _super);
    function StorageBucketAccessControlsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsDeletePathParams.prototype, "bucket", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=entity" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsDeletePathParams.prototype, "entity", void 0);
    return StorageBucketAccessControlsDeletePathParams;
}(SpeakeasyBase));
export { StorageBucketAccessControlsDeletePathParams };
var StorageBucketAccessControlsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsDeleteQueryParams, _super);
    function StorageBucketAccessControlsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageBucketAccessControlsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsDeleteQueryParams.prototype, "userIp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsDeleteQueryParams.prototype, "userProject", void 0);
    return StorageBucketAccessControlsDeleteQueryParams;
}(SpeakeasyBase));
export { StorageBucketAccessControlsDeleteQueryParams };
var StorageBucketAccessControlsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsDeleteSecurityOption1, _super);
    function StorageBucketAccessControlsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketAccessControlsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketAccessControlsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return StorageBucketAccessControlsDeleteSecurityOption1;
}(SpeakeasyBase));
export { StorageBucketAccessControlsDeleteSecurityOption1 };
var StorageBucketAccessControlsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsDeleteSecurityOption2, _super);
    function StorageBucketAccessControlsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketAccessControlsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketAccessControlsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return StorageBucketAccessControlsDeleteSecurityOption2;
}(SpeakeasyBase));
export { StorageBucketAccessControlsDeleteSecurityOption2 };
var StorageBucketAccessControlsDeleteSecurity = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsDeleteSecurity, _super);
    function StorageBucketAccessControlsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketAccessControlsDeleteSecurityOption1)
    ], StorageBucketAccessControlsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketAccessControlsDeleteSecurityOption2)
    ], StorageBucketAccessControlsDeleteSecurity.prototype, "option2", void 0);
    return StorageBucketAccessControlsDeleteSecurity;
}(SpeakeasyBase));
export { StorageBucketAccessControlsDeleteSecurity };
var StorageBucketAccessControlsDeleteRequest = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsDeleteRequest, _super);
    function StorageBucketAccessControlsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketAccessControlsDeletePathParams)
    ], StorageBucketAccessControlsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketAccessControlsDeleteQueryParams)
    ], StorageBucketAccessControlsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketAccessControlsDeleteSecurity)
    ], StorageBucketAccessControlsDeleteRequest.prototype, "security", void 0);
    return StorageBucketAccessControlsDeleteRequest;
}(SpeakeasyBase));
export { StorageBucketAccessControlsDeleteRequest };
var StorageBucketAccessControlsDeleteResponse = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsDeleteResponse, _super);
    function StorageBucketAccessControlsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageBucketAccessControlsDeleteResponse.prototype, "statusCode", void 0);
    return StorageBucketAccessControlsDeleteResponse;
}(SpeakeasyBase));
export { StorageBucketAccessControlsDeleteResponse };
