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
var StorageObjectAccessControlsDeletePathParams = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsDeletePathParams, _super);
    function StorageObjectAccessControlsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsDeletePathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entity" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsDeletePathParams.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsDeletePathParams.prototype, "object", void 0);
    return StorageObjectAccessControlsDeletePathParams;
}(SpeakeasyBase));
export { StorageObjectAccessControlsDeletePathParams };
var StorageObjectAccessControlsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsDeleteQueryParams, _super);
    function StorageObjectAccessControlsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generation" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsDeleteQueryParams.prototype, "generation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectAccessControlsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsDeleteQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsDeleteQueryParams.prototype, "userProject", void 0);
    return StorageObjectAccessControlsDeleteQueryParams;
}(SpeakeasyBase));
export { StorageObjectAccessControlsDeleteQueryParams };
var StorageObjectAccessControlsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsDeleteSecurityOption1, _super);
    function StorageObjectAccessControlsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectAccessControlsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectAccessControlsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return StorageObjectAccessControlsDeleteSecurityOption1;
}(SpeakeasyBase));
export { StorageObjectAccessControlsDeleteSecurityOption1 };
var StorageObjectAccessControlsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsDeleteSecurityOption2, _super);
    function StorageObjectAccessControlsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectAccessControlsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectAccessControlsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return StorageObjectAccessControlsDeleteSecurityOption2;
}(SpeakeasyBase));
export { StorageObjectAccessControlsDeleteSecurityOption2 };
var StorageObjectAccessControlsDeleteSecurity = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsDeleteSecurity, _super);
    function StorageObjectAccessControlsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectAccessControlsDeleteSecurityOption1)
    ], StorageObjectAccessControlsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectAccessControlsDeleteSecurityOption2)
    ], StorageObjectAccessControlsDeleteSecurity.prototype, "option2", void 0);
    return StorageObjectAccessControlsDeleteSecurity;
}(SpeakeasyBase));
export { StorageObjectAccessControlsDeleteSecurity };
var StorageObjectAccessControlsDeleteRequest = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsDeleteRequest, _super);
    function StorageObjectAccessControlsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectAccessControlsDeletePathParams)
    ], StorageObjectAccessControlsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectAccessControlsDeleteQueryParams)
    ], StorageObjectAccessControlsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectAccessControlsDeleteSecurity)
    ], StorageObjectAccessControlsDeleteRequest.prototype, "security", void 0);
    return StorageObjectAccessControlsDeleteRequest;
}(SpeakeasyBase));
export { StorageObjectAccessControlsDeleteRequest };
var StorageObjectAccessControlsDeleteResponse = /** @class */ (function (_super) {
    __extends(StorageObjectAccessControlsDeleteResponse, _super);
    function StorageObjectAccessControlsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageObjectAccessControlsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageObjectAccessControlsDeleteResponse.prototype, "statusCode", void 0);
    return StorageObjectAccessControlsDeleteResponse;
}(SpeakeasyBase));
export { StorageObjectAccessControlsDeleteResponse };
