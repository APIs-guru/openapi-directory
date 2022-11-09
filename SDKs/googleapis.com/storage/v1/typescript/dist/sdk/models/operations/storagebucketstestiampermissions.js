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
var StorageBucketsTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(StorageBucketsTestIamPermissionsPathParams, _super);
    function StorageBucketsTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageBucketsTestIamPermissionsPathParams.prototype, "bucket", void 0);
    return StorageBucketsTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { StorageBucketsTestIamPermissionsPathParams };
var StorageBucketsTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(StorageBucketsTestIamPermissionsQueryParams, _super);
    function StorageBucketsTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageBucketsTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageBucketsTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageBucketsTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageBucketsTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=permissions" }),
        __metadata("design:type", Array)
    ], StorageBucketsTestIamPermissionsQueryParams.prototype, "permissions", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageBucketsTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageBucketsTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageBucketsTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageBucketsTestIamPermissionsQueryParams.prototype, "userIp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageBucketsTestIamPermissionsQueryParams.prototype, "userProject", void 0);
    return StorageBucketsTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { StorageBucketsTestIamPermissionsQueryParams };
var StorageBucketsTestIamPermissionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageBucketsTestIamPermissionsSecurityOption1, _super);
    function StorageBucketsTestIamPermissionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsTestIamPermissionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsTestIamPermissionsSecurityOption1.prototype, "oauth2c", void 0);
    return StorageBucketsTestIamPermissionsSecurityOption1;
}(SpeakeasyBase));
export { StorageBucketsTestIamPermissionsSecurityOption1 };
var StorageBucketsTestIamPermissionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageBucketsTestIamPermissionsSecurityOption2, _super);
    function StorageBucketsTestIamPermissionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsTestIamPermissionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsTestIamPermissionsSecurityOption2.prototype, "oauth2c", void 0);
    return StorageBucketsTestIamPermissionsSecurityOption2;
}(SpeakeasyBase));
export { StorageBucketsTestIamPermissionsSecurityOption2 };
var StorageBucketsTestIamPermissionsSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageBucketsTestIamPermissionsSecurityOption3, _super);
    function StorageBucketsTestIamPermissionsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsTestIamPermissionsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsTestIamPermissionsSecurityOption3.prototype, "oauth2c", void 0);
    return StorageBucketsTestIamPermissionsSecurityOption3;
}(SpeakeasyBase));
export { StorageBucketsTestIamPermissionsSecurityOption3 };
var StorageBucketsTestIamPermissionsSecurityOption4 = /** @class */ (function (_super) {
    __extends(StorageBucketsTestIamPermissionsSecurityOption4, _super);
    function StorageBucketsTestIamPermissionsSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsTestIamPermissionsSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsTestIamPermissionsSecurityOption4.prototype, "oauth2c", void 0);
    return StorageBucketsTestIamPermissionsSecurityOption4;
}(SpeakeasyBase));
export { StorageBucketsTestIamPermissionsSecurityOption4 };
var StorageBucketsTestIamPermissionsSecurityOption5 = /** @class */ (function (_super) {
    __extends(StorageBucketsTestIamPermissionsSecurityOption5, _super);
    function StorageBucketsTestIamPermissionsSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsTestIamPermissionsSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsTestIamPermissionsSecurityOption5.prototype, "oauth2c", void 0);
    return StorageBucketsTestIamPermissionsSecurityOption5;
}(SpeakeasyBase));
export { StorageBucketsTestIamPermissionsSecurityOption5 };
var StorageBucketsTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(StorageBucketsTestIamPermissionsSecurity, _super);
    function StorageBucketsTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsTestIamPermissionsSecurityOption1)
    ], StorageBucketsTestIamPermissionsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsTestIamPermissionsSecurityOption2)
    ], StorageBucketsTestIamPermissionsSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsTestIamPermissionsSecurityOption3)
    ], StorageBucketsTestIamPermissionsSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsTestIamPermissionsSecurityOption4)
    ], StorageBucketsTestIamPermissionsSecurity.prototype, "option4", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsTestIamPermissionsSecurityOption5)
    ], StorageBucketsTestIamPermissionsSecurity.prototype, "option5", void 0);
    return StorageBucketsTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { StorageBucketsTestIamPermissionsSecurity };
var StorageBucketsTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(StorageBucketsTestIamPermissionsRequest, _super);
    function StorageBucketsTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsTestIamPermissionsPathParams)
    ], StorageBucketsTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsTestIamPermissionsQueryParams)
    ], StorageBucketsTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsTestIamPermissionsSecurity)
    ], StorageBucketsTestIamPermissionsRequest.prototype, "security", void 0);
    return StorageBucketsTestIamPermissionsRequest;
}(SpeakeasyBase));
export { StorageBucketsTestIamPermissionsRequest };
var StorageBucketsTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(StorageBucketsTestIamPermissionsResponse, _super);
    function StorageBucketsTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageBucketsTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageBucketsTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], StorageBucketsTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return StorageBucketsTestIamPermissionsResponse;
}(SpeakeasyBase));
export { StorageBucketsTestIamPermissionsResponse };
