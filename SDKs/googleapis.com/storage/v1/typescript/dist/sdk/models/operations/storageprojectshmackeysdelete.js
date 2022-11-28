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
var StorageProjectsHmacKeysDeletePathParams = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysDeletePathParams, _super);
    function StorageProjectsHmacKeysDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accessId" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysDeletePathParams.prototype, "accessId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysDeletePathParams.prototype, "projectId", void 0);
    return StorageProjectsHmacKeysDeletePathParams;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysDeletePathParams };
var StorageProjectsHmacKeysDeleteQueryParams = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysDeleteQueryParams, _super);
    function StorageProjectsHmacKeysDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageProjectsHmacKeysDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysDeleteQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysDeleteQueryParams.prototype, "userProject", void 0);
    return StorageProjectsHmacKeysDeleteQueryParams;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysDeleteQueryParams };
var StorageProjectsHmacKeysDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysDeleteSecurityOption1, _super);
    function StorageProjectsHmacKeysDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysDeleteSecurityOption1;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysDeleteSecurityOption1 };
var StorageProjectsHmacKeysDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysDeleteSecurityOption2, _super);
    function StorageProjectsHmacKeysDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysDeleteSecurityOption2;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysDeleteSecurityOption2 };
var StorageProjectsHmacKeysDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysDeleteSecurityOption3, _super);
    function StorageProjectsHmacKeysDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysDeleteSecurityOption3;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysDeleteSecurityOption3 };
var StorageProjectsHmacKeysDeleteSecurity = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysDeleteSecurity, _super);
    function StorageProjectsHmacKeysDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysDeleteSecurityOption1)
    ], StorageProjectsHmacKeysDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysDeleteSecurityOption2)
    ], StorageProjectsHmacKeysDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysDeleteSecurityOption3)
    ], StorageProjectsHmacKeysDeleteSecurity.prototype, "option3", void 0);
    return StorageProjectsHmacKeysDeleteSecurity;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysDeleteSecurity };
var StorageProjectsHmacKeysDeleteRequest = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysDeleteRequest, _super);
    function StorageProjectsHmacKeysDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageProjectsHmacKeysDeletePathParams)
    ], StorageProjectsHmacKeysDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageProjectsHmacKeysDeleteQueryParams)
    ], StorageProjectsHmacKeysDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageProjectsHmacKeysDeleteSecurity)
    ], StorageProjectsHmacKeysDeleteRequest.prototype, "security", void 0);
    return StorageProjectsHmacKeysDeleteRequest;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysDeleteRequest };
var StorageProjectsHmacKeysDeleteResponse = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysDeleteResponse, _super);
    function StorageProjectsHmacKeysDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageProjectsHmacKeysDeleteResponse.prototype, "statusCode", void 0);
    return StorageProjectsHmacKeysDeleteResponse;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysDeleteResponse };
