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
var StorageDefaultObjectAccessControlsDeletePathParams = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsDeletePathParams, _super);
    function StorageDefaultObjectAccessControlsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsDeletePathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entity" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsDeletePathParams.prototype, "entity", void 0);
    return StorageDefaultObjectAccessControlsDeletePathParams;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsDeletePathParams };
var StorageDefaultObjectAccessControlsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsDeleteQueryParams, _super);
    function StorageDefaultObjectAccessControlsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageDefaultObjectAccessControlsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsDeleteQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsDeleteQueryParams.prototype, "userProject", void 0);
    return StorageDefaultObjectAccessControlsDeleteQueryParams;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsDeleteQueryParams };
var StorageDefaultObjectAccessControlsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsDeleteSecurityOption1, _super);
    function StorageDefaultObjectAccessControlsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageDefaultObjectAccessControlsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageDefaultObjectAccessControlsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return StorageDefaultObjectAccessControlsDeleteSecurityOption1;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsDeleteSecurityOption1 };
var StorageDefaultObjectAccessControlsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsDeleteSecurityOption2, _super);
    function StorageDefaultObjectAccessControlsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageDefaultObjectAccessControlsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageDefaultObjectAccessControlsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return StorageDefaultObjectAccessControlsDeleteSecurityOption2;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsDeleteSecurityOption2 };
var StorageDefaultObjectAccessControlsDeleteSecurity = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsDeleteSecurity, _super);
    function StorageDefaultObjectAccessControlsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageDefaultObjectAccessControlsDeleteSecurityOption1)
    ], StorageDefaultObjectAccessControlsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageDefaultObjectAccessControlsDeleteSecurityOption2)
    ], StorageDefaultObjectAccessControlsDeleteSecurity.prototype, "option2", void 0);
    return StorageDefaultObjectAccessControlsDeleteSecurity;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsDeleteSecurity };
var StorageDefaultObjectAccessControlsDeleteRequest = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsDeleteRequest, _super);
    function StorageDefaultObjectAccessControlsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsDeletePathParams)
    ], StorageDefaultObjectAccessControlsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsDeleteQueryParams)
    ], StorageDefaultObjectAccessControlsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsDeleteSecurity)
    ], StorageDefaultObjectAccessControlsDeleteRequest.prototype, "security", void 0);
    return StorageDefaultObjectAccessControlsDeleteRequest;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsDeleteRequest };
var StorageDefaultObjectAccessControlsDeleteResponse = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsDeleteResponse, _super);
    function StorageDefaultObjectAccessControlsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageDefaultObjectAccessControlsDeleteResponse.prototype, "statusCode", void 0);
    return StorageDefaultObjectAccessControlsDeleteResponse;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsDeleteResponse };
