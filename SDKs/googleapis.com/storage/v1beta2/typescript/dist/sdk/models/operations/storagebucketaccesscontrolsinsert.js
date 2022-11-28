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
var StorageBucketAccessControlsInsertPathParams = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsInsertPathParams, _super);
    function StorageBucketAccessControlsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsInsertPathParams.prototype, "bucket", void 0);
    return StorageBucketAccessControlsInsertPathParams;
}(SpeakeasyBase));
export { StorageBucketAccessControlsInsertPathParams };
var StorageBucketAccessControlsInsertQueryParams = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsInsertQueryParams, _super);
    function StorageBucketAccessControlsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageBucketAccessControlsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsInsertQueryParams.prototype, "userIp", void 0);
    return StorageBucketAccessControlsInsertQueryParams;
}(SpeakeasyBase));
export { StorageBucketAccessControlsInsertQueryParams };
var StorageBucketAccessControlsInsertSecurity = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsInsertSecurity, _super);
    function StorageBucketAccessControlsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketAccessControlsInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketAccessControlsInsertSecurity.prototype, "oauth2c", void 0);
    return StorageBucketAccessControlsInsertSecurity;
}(SpeakeasyBase));
export { StorageBucketAccessControlsInsertSecurity };
var StorageBucketAccessControlsInsertRequest = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsInsertRequest, _super);
    function StorageBucketAccessControlsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageBucketAccessControlsInsertPathParams)
    ], StorageBucketAccessControlsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageBucketAccessControlsInsertQueryParams)
    ], StorageBucketAccessControlsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BucketAccessControl)
    ], StorageBucketAccessControlsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageBucketAccessControlsInsertSecurity)
    ], StorageBucketAccessControlsInsertRequest.prototype, "security", void 0);
    return StorageBucketAccessControlsInsertRequest;
}(SpeakeasyBase));
export { StorageBucketAccessControlsInsertRequest };
var StorageBucketAccessControlsInsertResponse = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsInsertResponse, _super);
    function StorageBucketAccessControlsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BucketAccessControl)
    ], StorageBucketAccessControlsInsertResponse.prototype, "bucketAccessControl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageBucketAccessControlsInsertResponse.prototype, "statusCode", void 0);
    return StorageBucketAccessControlsInsertResponse;
}(SpeakeasyBase));
export { StorageBucketAccessControlsInsertResponse };
