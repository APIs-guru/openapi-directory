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
var PubsubProjectsTopicsTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsTestIamPermissionsPathParams, _super);
    function PubsubProjectsTopicsTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsTestIamPermissionsPathParams.prototype, "resource", void 0);
    return PubsubProjectsTopicsTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { PubsubProjectsTopicsTestIamPermissionsPathParams };
var PubsubProjectsTopicsTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsTestIamPermissionsQueryParams, _super);
    function PubsubProjectsTopicsTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsTopicsTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsTopicsTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsTopicsTestIamPermissionsQueryParams };
var PubsubProjectsTopicsTestIamPermissionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsTestIamPermissionsSecurityOption1, _super);
    function PubsubProjectsTopicsTestIamPermissionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsTopicsTestIamPermissionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsTopicsTestIamPermissionsSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsTopicsTestIamPermissionsSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsTopicsTestIamPermissionsSecurityOption1 };
var PubsubProjectsTopicsTestIamPermissionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsTestIamPermissionsSecurityOption2, _super);
    function PubsubProjectsTopicsTestIamPermissionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsTopicsTestIamPermissionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsTopicsTestIamPermissionsSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsTopicsTestIamPermissionsSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsTopicsTestIamPermissionsSecurityOption2 };
var PubsubProjectsTopicsTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsTestIamPermissionsSecurity, _super);
    function PubsubProjectsTopicsTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsTopicsTestIamPermissionsSecurityOption1)
    ], PubsubProjectsTopicsTestIamPermissionsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsTopicsTestIamPermissionsSecurityOption2)
    ], PubsubProjectsTopicsTestIamPermissionsSecurity.prototype, "option2", void 0);
    return PubsubProjectsTopicsTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { PubsubProjectsTopicsTestIamPermissionsSecurity };
var PubsubProjectsTopicsTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsTestIamPermissionsRequest, _super);
    function PubsubProjectsTopicsTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsTopicsTestIamPermissionsPathParams)
    ], PubsubProjectsTopicsTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsTopicsTestIamPermissionsQueryParams)
    ], PubsubProjectsTopicsTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], PubsubProjectsTopicsTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsTopicsTestIamPermissionsSecurity)
    ], PubsubProjectsTopicsTestIamPermissionsRequest.prototype, "security", void 0);
    return PubsubProjectsTopicsTestIamPermissionsRequest;
}(SpeakeasyBase));
export { PubsubProjectsTopicsTestIamPermissionsRequest };
var PubsubProjectsTopicsTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsTestIamPermissionsResponse, _super);
    function PubsubProjectsTopicsTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsTopicsTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], PubsubProjectsTopicsTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return PubsubProjectsTopicsTestIamPermissionsResponse;
}(SpeakeasyBase));
export { PubsubProjectsTopicsTestIamPermissionsResponse };
