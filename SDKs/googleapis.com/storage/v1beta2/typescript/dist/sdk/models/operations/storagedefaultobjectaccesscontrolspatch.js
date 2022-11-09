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
var StorageDefaultObjectAccessControlsPatchPathParams = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsPatchPathParams, _super);
    function StorageDefaultObjectAccessControlsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsPatchPathParams.prototype, "bucket", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=entity" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsPatchPathParams.prototype, "entity", void 0);
    return StorageDefaultObjectAccessControlsPatchPathParams;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsPatchPathParams };
var StorageDefaultObjectAccessControlsPatchQueryParams = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsPatchQueryParams, _super);
    function StorageDefaultObjectAccessControlsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageDefaultObjectAccessControlsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsPatchQueryParams.prototype, "userIp", void 0);
    return StorageDefaultObjectAccessControlsPatchQueryParams;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsPatchQueryParams };
var StorageDefaultObjectAccessControlsPatchSecurity = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsPatchSecurity, _super);
    function StorageDefaultObjectAccessControlsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageDefaultObjectAccessControlsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageDefaultObjectAccessControlsPatchSecurity.prototype, "oauth2c", void 0);
    return StorageDefaultObjectAccessControlsPatchSecurity;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsPatchSecurity };
var StorageDefaultObjectAccessControlsPatchRequest = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsPatchRequest, _super);
    function StorageDefaultObjectAccessControlsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsPatchPathParams)
    ], StorageDefaultObjectAccessControlsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsPatchQueryParams)
    ], StorageDefaultObjectAccessControlsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObjectAccessControl)
    ], StorageDefaultObjectAccessControlsPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsPatchSecurity)
    ], StorageDefaultObjectAccessControlsPatchRequest.prototype, "security", void 0);
    return StorageDefaultObjectAccessControlsPatchRequest;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsPatchRequest };
var StorageDefaultObjectAccessControlsPatchResponse = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsPatchResponse, _super);
    function StorageDefaultObjectAccessControlsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ObjectAccessControl)
    ], StorageDefaultObjectAccessControlsPatchResponse.prototype, "objectAccessControl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageDefaultObjectAccessControlsPatchResponse.prototype, "statusCode", void 0);
    return StorageDefaultObjectAccessControlsPatchResponse;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsPatchResponse };
