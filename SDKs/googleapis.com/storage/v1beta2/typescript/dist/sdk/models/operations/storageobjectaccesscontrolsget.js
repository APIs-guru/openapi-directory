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
var StorageObjectAccessControlsGetPathParams = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsGetPathParams, _super);
    function StorageObjectAccessControlsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsGetPathParams.prototype, "bucket", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=entity" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsGetPathParams.prototype, "entity", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsGetPathParams.prototype, "object", void 0);
    return StorageObjectAccessControlsGetPathParams;
}(SpeakeasyBase));
export { StorageObjectAccessControlsGetPathParams };
var StorageObjectAccessControlsGetQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsGetQueryParams, _super);
    function StorageObjectAccessControlsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=generation" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsGetQueryParams.prototype, "generation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectAccessControlsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsGetQueryParams.prototype, "userIp", void 0);
    return StorageObjectAccessControlsGetQueryParams;
}(SpeakeasyBase));
export { StorageObjectAccessControlsGetQueryParams };
var StorageObjectAccessControlsGetSecurity = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsGetSecurity, _super);
    function StorageObjectAccessControlsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectAccessControlsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectAccessControlsGetSecurity.prototype, "oauth2c", void 0);
    return StorageObjectAccessControlsGetSecurity;
}(SpeakeasyBase));
export { StorageObjectAccessControlsGetSecurity };
var StorageObjectAccessControlsGetRequest = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsGetRequest, _super);
    function StorageObjectAccessControlsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageObjectAccessControlsGetPathParams)
    ], StorageObjectAccessControlsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageObjectAccessControlsGetQueryParams)
    ], StorageObjectAccessControlsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageObjectAccessControlsGetSecurity)
    ], StorageObjectAccessControlsGetRequest.prototype, "security", void 0);
    return StorageObjectAccessControlsGetRequest;
}(SpeakeasyBase));
export { StorageObjectAccessControlsGetRequest };
var StorageObjectAccessControlsGetResponse = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsGetResponse, _super);
    function StorageObjectAccessControlsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ObjectAccessControl)
    ], StorageObjectAccessControlsGetResponse.prototype, "objectAccessControl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageObjectAccessControlsGetResponse.prototype, "statusCode", void 0);
    return StorageObjectAccessControlsGetResponse;
}(SpeakeasyBase));
export { StorageObjectAccessControlsGetResponse };
