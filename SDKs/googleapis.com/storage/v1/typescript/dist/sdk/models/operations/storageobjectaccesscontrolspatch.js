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
var StorageObjectAccessControlsPatchPathParams = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsPatchPathParams, _super);
    function StorageObjectAccessControlsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsPatchPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entity" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsPatchPathParams.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsPatchPathParams.prototype, "object", void 0);
    return StorageObjectAccessControlsPatchPathParams;
}(SpeakeasyBase));
export { StorageObjectAccessControlsPatchPathParams };
var StorageObjectAccessControlsPatchQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsPatchQueryParams, _super);
    function StorageObjectAccessControlsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generation" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsPatchQueryParams.prototype, "generation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectAccessControlsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsPatchQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsPatchQueryParams.prototype, "userProject", void 0);
    return StorageObjectAccessControlsPatchQueryParams;
}(SpeakeasyBase));
export { StorageObjectAccessControlsPatchQueryParams };
var StorageObjectAccessControlsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsPatchSecurityOption1, _super);
    function StorageObjectAccessControlsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectAccessControlsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectAccessControlsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return StorageObjectAccessControlsPatchSecurityOption1;
}(SpeakeasyBase));
export { StorageObjectAccessControlsPatchSecurityOption1 };
var StorageObjectAccessControlsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsPatchSecurityOption2, _super);
    function StorageObjectAccessControlsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectAccessControlsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectAccessControlsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return StorageObjectAccessControlsPatchSecurityOption2;
}(SpeakeasyBase));
export { StorageObjectAccessControlsPatchSecurityOption2 };
var StorageObjectAccessControlsPatchSecurity = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsPatchSecurity, _super);
    function StorageObjectAccessControlsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectAccessControlsPatchSecurityOption1)
    ], StorageObjectAccessControlsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectAccessControlsPatchSecurityOption2)
    ], StorageObjectAccessControlsPatchSecurity.prototype, "option2", void 0);
    return StorageObjectAccessControlsPatchSecurity;
}(SpeakeasyBase));
export { StorageObjectAccessControlsPatchSecurity };
var StorageObjectAccessControlsPatchRequest = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsPatchRequest, _super);
    function StorageObjectAccessControlsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectAccessControlsPatchPathParams)
    ], StorageObjectAccessControlsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectAccessControlsPatchQueryParams)
    ], StorageObjectAccessControlsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObjectAccessControl)
    ], StorageObjectAccessControlsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectAccessControlsPatchSecurity)
    ], StorageObjectAccessControlsPatchRequest.prototype, "security", void 0);
    return StorageObjectAccessControlsPatchRequest;
}(SpeakeasyBase));
export { StorageObjectAccessControlsPatchRequest };
var StorageObjectAccessControlsPatchResponse = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsPatchResponse, _super);
    function StorageObjectAccessControlsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObjectAccessControl)
    ], StorageObjectAccessControlsPatchResponse.prototype, "objectAccessControl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageObjectAccessControlsPatchResponse.prototype, "statusCode", void 0);
    return StorageObjectAccessControlsPatchResponse;
}(SpeakeasyBase));
export { StorageObjectAccessControlsPatchResponse };
