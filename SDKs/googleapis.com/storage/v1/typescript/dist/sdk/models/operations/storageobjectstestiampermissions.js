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
var StorageObjectsTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(StorageObjectsTestIamPermissionsPathParams, _super);
    function StorageObjectsTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageObjectsTestIamPermissionsPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], StorageObjectsTestIamPermissionsPathParams.prototype, "object", void 0);
    return StorageObjectsTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { StorageObjectsTestIamPermissionsPathParams };
var StorageObjectsTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectsTestIamPermissionsQueryParams, _super);
    function StorageObjectsTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectsTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectsTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generation" }),
        __metadata("design:type", String)
    ], StorageObjectsTestIamPermissionsQueryParams.prototype, "generation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectsTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectsTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=permissions" }),
        __metadata("design:type", Array)
    ], StorageObjectsTestIamPermissionsQueryParams.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectsTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageObjectsTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectsTestIamPermissionsQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageObjectsTestIamPermissionsQueryParams.prototype, "userProject", void 0);
    return StorageObjectsTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { StorageObjectsTestIamPermissionsQueryParams };
var StorageObjectsTestIamPermissionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageObjectsTestIamPermissionsSecurityOption1, _super);
    function StorageObjectsTestIamPermissionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsTestIamPermissionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsTestIamPermissionsSecurityOption1.prototype, "oauth2c", void 0);
    return StorageObjectsTestIamPermissionsSecurityOption1;
}(SpeakeasyBase));
export { StorageObjectsTestIamPermissionsSecurityOption1 };
var StorageObjectsTestIamPermissionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageObjectsTestIamPermissionsSecurityOption2, _super);
    function StorageObjectsTestIamPermissionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsTestIamPermissionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsTestIamPermissionsSecurityOption2.prototype, "oauth2c", void 0);
    return StorageObjectsTestIamPermissionsSecurityOption2;
}(SpeakeasyBase));
export { StorageObjectsTestIamPermissionsSecurityOption2 };
var StorageObjectsTestIamPermissionsSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageObjectsTestIamPermissionsSecurityOption3, _super);
    function StorageObjectsTestIamPermissionsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsTestIamPermissionsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsTestIamPermissionsSecurityOption3.prototype, "oauth2c", void 0);
    return StorageObjectsTestIamPermissionsSecurityOption3;
}(SpeakeasyBase));
export { StorageObjectsTestIamPermissionsSecurityOption3 };
var StorageObjectsTestIamPermissionsSecurityOption4 = /** @class */ (function (_super) {
    __extends(StorageObjectsTestIamPermissionsSecurityOption4, _super);
    function StorageObjectsTestIamPermissionsSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsTestIamPermissionsSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsTestIamPermissionsSecurityOption4.prototype, "oauth2c", void 0);
    return StorageObjectsTestIamPermissionsSecurityOption4;
}(SpeakeasyBase));
export { StorageObjectsTestIamPermissionsSecurityOption4 };
var StorageObjectsTestIamPermissionsSecurityOption5 = /** @class */ (function (_super) {
    __extends(StorageObjectsTestIamPermissionsSecurityOption5, _super);
    function StorageObjectsTestIamPermissionsSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsTestIamPermissionsSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsTestIamPermissionsSecurityOption5.prototype, "oauth2c", void 0);
    return StorageObjectsTestIamPermissionsSecurityOption5;
}(SpeakeasyBase));
export { StorageObjectsTestIamPermissionsSecurityOption5 };
var StorageObjectsTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(StorageObjectsTestIamPermissionsSecurity, _super);
    function StorageObjectsTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsTestIamPermissionsSecurityOption1)
    ], StorageObjectsTestIamPermissionsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsTestIamPermissionsSecurityOption2)
    ], StorageObjectsTestIamPermissionsSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsTestIamPermissionsSecurityOption3)
    ], StorageObjectsTestIamPermissionsSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsTestIamPermissionsSecurityOption4)
    ], StorageObjectsTestIamPermissionsSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsTestIamPermissionsSecurityOption5)
    ], StorageObjectsTestIamPermissionsSecurity.prototype, "option5", void 0);
    return StorageObjectsTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { StorageObjectsTestIamPermissionsSecurity };
var StorageObjectsTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(StorageObjectsTestIamPermissionsRequest, _super);
    function StorageObjectsTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectsTestIamPermissionsPathParams)
    ], StorageObjectsTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectsTestIamPermissionsQueryParams)
    ], StorageObjectsTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectsTestIamPermissionsSecurity)
    ], StorageObjectsTestIamPermissionsRequest.prototype, "security", void 0);
    return StorageObjectsTestIamPermissionsRequest;
}(SpeakeasyBase));
export { StorageObjectsTestIamPermissionsRequest };
var StorageObjectsTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(StorageObjectsTestIamPermissionsResponse, _super);
    function StorageObjectsTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageObjectsTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageObjectsTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], StorageObjectsTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return StorageObjectsTestIamPermissionsResponse;
}(SpeakeasyBase));
export { StorageObjectsTestIamPermissionsResponse };
