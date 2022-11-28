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
var StorageObjectAccessControlsInsertPathParams = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsInsertPathParams, _super);
    function StorageObjectAccessControlsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsInsertPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsInsertPathParams.prototype, "object", void 0);
    return StorageObjectAccessControlsInsertPathParams;
}(SpeakeasyBase));
export { StorageObjectAccessControlsInsertPathParams };
var StorageObjectAccessControlsInsertQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsInsertQueryParams, _super);
    function StorageObjectAccessControlsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generation" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsInsertQueryParams.prototype, "generation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectAccessControlsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsInsertQueryParams.prototype, "userIp", void 0);
    return StorageObjectAccessControlsInsertQueryParams;
}(SpeakeasyBase));
export { StorageObjectAccessControlsInsertQueryParams };
var StorageObjectAccessControlsInsertSecurity = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsInsertSecurity, _super);
    function StorageObjectAccessControlsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectAccessControlsInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectAccessControlsInsertSecurity.prototype, "oauth2c", void 0);
    return StorageObjectAccessControlsInsertSecurity;
}(SpeakeasyBase));
export { StorageObjectAccessControlsInsertSecurity };
var StorageObjectAccessControlsInsertRequest = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsInsertRequest, _super);
    function StorageObjectAccessControlsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectAccessControlsInsertPathParams)
    ], StorageObjectAccessControlsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectAccessControlsInsertQueryParams)
    ], StorageObjectAccessControlsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObjectAccessControl)
    ], StorageObjectAccessControlsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectAccessControlsInsertSecurity)
    ], StorageObjectAccessControlsInsertRequest.prototype, "security", void 0);
    return StorageObjectAccessControlsInsertRequest;
}(SpeakeasyBase));
export { StorageObjectAccessControlsInsertRequest };
var StorageObjectAccessControlsInsertResponse = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsInsertResponse, _super);
    function StorageObjectAccessControlsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObjectAccessControl)
    ], StorageObjectAccessControlsInsertResponse.prototype, "objectAccessControl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageObjectAccessControlsInsertResponse.prototype, "statusCode", void 0);
    return StorageObjectAccessControlsInsertResponse;
}(SpeakeasyBase));
export { StorageObjectAccessControlsInsertResponse };
