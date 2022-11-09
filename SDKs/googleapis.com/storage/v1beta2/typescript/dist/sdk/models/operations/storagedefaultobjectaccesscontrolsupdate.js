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
var StorageDefaultObjectAccessControlsUpdatePathParams = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsUpdatePathParams, _super);
    function StorageDefaultObjectAccessControlsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdatePathParams.prototype, "bucket", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=entity" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdatePathParams.prototype, "entity", void 0);
    return StorageDefaultObjectAccessControlsUpdatePathParams;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsUpdatePathParams };
var StorageDefaultObjectAccessControlsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsUpdateQueryParams, _super);
    function StorageDefaultObjectAccessControlsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageDefaultObjectAccessControlsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdateQueryParams.prototype, "userIp", void 0);
    return StorageDefaultObjectAccessControlsUpdateQueryParams;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsUpdateQueryParams };
var StorageDefaultObjectAccessControlsUpdateSecurity = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsUpdateSecurity, _super);
    function StorageDefaultObjectAccessControlsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageDefaultObjectAccessControlsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageDefaultObjectAccessControlsUpdateSecurity.prototype, "oauth2c", void 0);
    return StorageDefaultObjectAccessControlsUpdateSecurity;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsUpdateSecurity };
var StorageDefaultObjectAccessControlsUpdateRequest = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsUpdateRequest, _super);
    function StorageDefaultObjectAccessControlsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsUpdatePathParams)
    ], StorageDefaultObjectAccessControlsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsUpdateQueryParams)
    ], StorageDefaultObjectAccessControlsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObjectAccessControl)
    ], StorageDefaultObjectAccessControlsUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsUpdateSecurity)
    ], StorageDefaultObjectAccessControlsUpdateRequest.prototype, "security", void 0);
    return StorageDefaultObjectAccessControlsUpdateRequest;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsUpdateRequest };
var StorageDefaultObjectAccessControlsUpdateResponse = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsUpdateResponse, _super);
    function StorageDefaultObjectAccessControlsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ObjectAccessControl)
    ], StorageDefaultObjectAccessControlsUpdateResponse.prototype, "objectAccessControl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageDefaultObjectAccessControlsUpdateResponse.prototype, "statusCode", void 0);
    return StorageDefaultObjectAccessControlsUpdateResponse;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsUpdateResponse };
