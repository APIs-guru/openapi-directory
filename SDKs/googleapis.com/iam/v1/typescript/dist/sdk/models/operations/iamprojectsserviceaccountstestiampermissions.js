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
var IamProjectsServiceAccountsTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsTestIamPermissionsPathParams, _super);
    function IamProjectsServiceAccountsTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsTestIamPermissionsPathParams.prototype, "resource", void 0);
    return IamProjectsServiceAccountsTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsTestIamPermissionsPathParams };
var IamProjectsServiceAccountsTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsTestIamPermissionsQueryParams, _super);
    function IamProjectsServiceAccountsTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IamProjectsServiceAccountsTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return IamProjectsServiceAccountsTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsTestIamPermissionsQueryParams };
var IamProjectsServiceAccountsTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsTestIamPermissionsSecurity, _super);
    function IamProjectsServiceAccountsTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IamProjectsServiceAccountsTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IamProjectsServiceAccountsTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return IamProjectsServiceAccountsTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsTestIamPermissionsSecurity };
var IamProjectsServiceAccountsTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsTestIamPermissionsRequest, _super);
    function IamProjectsServiceAccountsTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamProjectsServiceAccountsTestIamPermissionsPathParams)
    ], IamProjectsServiceAccountsTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamProjectsServiceAccountsTestIamPermissionsQueryParams)
    ], IamProjectsServiceAccountsTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], IamProjectsServiceAccountsTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamProjectsServiceAccountsTestIamPermissionsSecurity)
    ], IamProjectsServiceAccountsTestIamPermissionsRequest.prototype, "security", void 0);
    return IamProjectsServiceAccountsTestIamPermissionsRequest;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsTestIamPermissionsRequest };
var IamProjectsServiceAccountsTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsTestIamPermissionsResponse, _super);
    function IamProjectsServiceAccountsTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IamProjectsServiceAccountsTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], IamProjectsServiceAccountsTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return IamProjectsServiceAccountsTestIamPermissionsResponse;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsTestIamPermissionsResponse };
