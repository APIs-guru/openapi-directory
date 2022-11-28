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
var StorageDefaultObjectAccessControlsGetPathParams = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsGetPathParams, _super);
    function StorageDefaultObjectAccessControlsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsGetPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entity" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsGetPathParams.prototype, "entity", void 0);
    return StorageDefaultObjectAccessControlsGetPathParams;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsGetPathParams };
var StorageDefaultObjectAccessControlsGetQueryParams = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsGetQueryParams, _super);
    function StorageDefaultObjectAccessControlsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageDefaultObjectAccessControlsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsGetQueryParams.prototype, "userIp", void 0);
    return StorageDefaultObjectAccessControlsGetQueryParams;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsGetQueryParams };
var StorageDefaultObjectAccessControlsGetSecurity = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsGetSecurity, _super);
    function StorageDefaultObjectAccessControlsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageDefaultObjectAccessControlsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageDefaultObjectAccessControlsGetSecurity.prototype, "oauth2c", void 0);
    return StorageDefaultObjectAccessControlsGetSecurity;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsGetSecurity };
var StorageDefaultObjectAccessControlsGetRequest = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsGetRequest, _super);
    function StorageDefaultObjectAccessControlsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsGetPathParams)
    ], StorageDefaultObjectAccessControlsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsGetQueryParams)
    ], StorageDefaultObjectAccessControlsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsGetSecurity)
    ], StorageDefaultObjectAccessControlsGetRequest.prototype, "security", void 0);
    return StorageDefaultObjectAccessControlsGetRequest;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsGetRequest };
var StorageDefaultObjectAccessControlsGetResponse = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsGetResponse, _super);
    function StorageDefaultObjectAccessControlsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObjectAccessControl)
    ], StorageDefaultObjectAccessControlsGetResponse.prototype, "objectAccessControl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageDefaultObjectAccessControlsGetResponse.prototype, "statusCode", void 0);
    return StorageDefaultObjectAccessControlsGetResponse;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsGetResponse };
