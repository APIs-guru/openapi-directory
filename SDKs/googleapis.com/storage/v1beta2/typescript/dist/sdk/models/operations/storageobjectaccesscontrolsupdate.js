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
var StorageObjectAccessControlsUpdatePathParams = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsUpdatePathParams, _super);
    function StorageObjectAccessControlsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsUpdatePathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entity" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsUpdatePathParams.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsUpdatePathParams.prototype, "object", void 0);
    return StorageObjectAccessControlsUpdatePathParams;
}(SpeakeasyBase));
export { StorageObjectAccessControlsUpdatePathParams };
var StorageObjectAccessControlsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsUpdateQueryParams, _super);
    function StorageObjectAccessControlsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generation" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsUpdateQueryParams.prototype, "generation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectAccessControlsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsUpdateQueryParams.prototype, "userIp", void 0);
    return StorageObjectAccessControlsUpdateQueryParams;
}(SpeakeasyBase));
export { StorageObjectAccessControlsUpdateQueryParams };
var StorageObjectAccessControlsUpdateSecurity = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsUpdateSecurity, _super);
    function StorageObjectAccessControlsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectAccessControlsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectAccessControlsUpdateSecurity.prototype, "oauth2c", void 0);
    return StorageObjectAccessControlsUpdateSecurity;
}(SpeakeasyBase));
export { StorageObjectAccessControlsUpdateSecurity };
var StorageObjectAccessControlsUpdateRequest = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsUpdateRequest, _super);
    function StorageObjectAccessControlsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectAccessControlsUpdatePathParams)
    ], StorageObjectAccessControlsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectAccessControlsUpdateQueryParams)
    ], StorageObjectAccessControlsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObjectAccessControl)
    ], StorageObjectAccessControlsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectAccessControlsUpdateSecurity)
    ], StorageObjectAccessControlsUpdateRequest.prototype, "security", void 0);
    return StorageObjectAccessControlsUpdateRequest;
}(SpeakeasyBase));
export { StorageObjectAccessControlsUpdateRequest };
var StorageObjectAccessControlsUpdateResponse = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsUpdateResponse, _super);
    function StorageObjectAccessControlsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObjectAccessControl)
    ], StorageObjectAccessControlsUpdateResponse.prototype, "objectAccessControl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageObjectAccessControlsUpdateResponse.prototype, "statusCode", void 0);
    return StorageObjectAccessControlsUpdateResponse;
}(SpeakeasyBase));
export { StorageObjectAccessControlsUpdateResponse };
