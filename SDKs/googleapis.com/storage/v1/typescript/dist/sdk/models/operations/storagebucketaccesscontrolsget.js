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
var StorageBucketAccessControlsGetPathParams = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsGetPathParams, _super);
    function StorageBucketAccessControlsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsGetPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entity" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsGetPathParams.prototype, "entity", void 0);
    return StorageBucketAccessControlsGetPathParams;
}(SpeakeasyBase));
export { StorageBucketAccessControlsGetPathParams };
var StorageBucketAccessControlsGetQueryParams = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsGetQueryParams, _super);
    function StorageBucketAccessControlsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageBucketAccessControlsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsGetQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsGetQueryParams.prototype, "userProject", void 0);
    return StorageBucketAccessControlsGetQueryParams;
}(SpeakeasyBase));
export { StorageBucketAccessControlsGetQueryParams };
var StorageBucketAccessControlsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsGetSecurityOption1, _super);
    function StorageBucketAccessControlsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketAccessControlsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketAccessControlsGetSecurityOption1.prototype, "oauth2c", void 0);
    return StorageBucketAccessControlsGetSecurityOption1;
}(SpeakeasyBase));
export { StorageBucketAccessControlsGetSecurityOption1 };
var StorageBucketAccessControlsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsGetSecurityOption2, _super);
    function StorageBucketAccessControlsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketAccessControlsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketAccessControlsGetSecurityOption2.prototype, "oauth2c", void 0);
    return StorageBucketAccessControlsGetSecurityOption2;
}(SpeakeasyBase));
export { StorageBucketAccessControlsGetSecurityOption2 };
var StorageBucketAccessControlsGetSecurity = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsGetSecurity, _super);
    function StorageBucketAccessControlsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketAccessControlsGetSecurityOption1)
    ], StorageBucketAccessControlsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketAccessControlsGetSecurityOption2)
    ], StorageBucketAccessControlsGetSecurity.prototype, "option2", void 0);
    return StorageBucketAccessControlsGetSecurity;
}(SpeakeasyBase));
export { StorageBucketAccessControlsGetSecurity };
var StorageBucketAccessControlsGetRequest = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsGetRequest, _super);
    function StorageBucketAccessControlsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageBucketAccessControlsGetPathParams)
    ], StorageBucketAccessControlsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageBucketAccessControlsGetQueryParams)
    ], StorageBucketAccessControlsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageBucketAccessControlsGetSecurity)
    ], StorageBucketAccessControlsGetRequest.prototype, "security", void 0);
    return StorageBucketAccessControlsGetRequest;
}(SpeakeasyBase));
export { StorageBucketAccessControlsGetRequest };
var StorageBucketAccessControlsGetResponse = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsGetResponse, _super);
    function StorageBucketAccessControlsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BucketAccessControl)
    ], StorageBucketAccessControlsGetResponse.prototype, "bucketAccessControl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageBucketAccessControlsGetResponse.prototype, "statusCode", void 0);
    return StorageBucketAccessControlsGetResponse;
}(SpeakeasyBase));
export { StorageBucketAccessControlsGetResponse };
