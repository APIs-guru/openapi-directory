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
var StorageDefaultObjectAccessControlsInsertPathParams = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsInsertPathParams, _super);
    function StorageDefaultObjectAccessControlsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsInsertPathParams.prototype, "bucket", void 0);
    return StorageDefaultObjectAccessControlsInsertPathParams;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsInsertPathParams };
var StorageDefaultObjectAccessControlsInsertQueryParams = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsInsertQueryParams, _super);
    function StorageDefaultObjectAccessControlsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageDefaultObjectAccessControlsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsInsertQueryParams.prototype, "userIp", void 0);
    return StorageDefaultObjectAccessControlsInsertQueryParams;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsInsertQueryParams };
var StorageDefaultObjectAccessControlsInsertSecurity = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsInsertSecurity, _super);
    function StorageDefaultObjectAccessControlsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageDefaultObjectAccessControlsInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageDefaultObjectAccessControlsInsertSecurity.prototype, "oauth2c", void 0);
    return StorageDefaultObjectAccessControlsInsertSecurity;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsInsertSecurity };
var StorageDefaultObjectAccessControlsInsertRequest = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsInsertRequest, _super);
    function StorageDefaultObjectAccessControlsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsInsertPathParams)
    ], StorageDefaultObjectAccessControlsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsInsertQueryParams)
    ], StorageDefaultObjectAccessControlsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObjectAccessControl)
    ], StorageDefaultObjectAccessControlsInsertRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsInsertSecurity)
    ], StorageDefaultObjectAccessControlsInsertRequest.prototype, "security", void 0);
    return StorageDefaultObjectAccessControlsInsertRequest;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsInsertRequest };
var StorageDefaultObjectAccessControlsInsertResponse = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsInsertResponse, _super);
    function StorageDefaultObjectAccessControlsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ObjectAccessControl)
    ], StorageDefaultObjectAccessControlsInsertResponse.prototype, "objectAccessControl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageDefaultObjectAccessControlsInsertResponse.prototype, "statusCode", void 0);
    return StorageDefaultObjectAccessControlsInsertResponse;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsInsertResponse };
