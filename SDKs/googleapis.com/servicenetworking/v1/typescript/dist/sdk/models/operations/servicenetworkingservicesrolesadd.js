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
var ServicenetworkingServicesRolesAddPathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesRolesAddPathParams, _super);
    function ServicenetworkingServicesRolesAddPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesRolesAddPathParams.prototype, "parent", void 0);
    return ServicenetworkingServicesRolesAddPathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesRolesAddPathParams };
var ServicenetworkingServicesRolesAddQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesRolesAddQueryParams, _super);
    function ServicenetworkingServicesRolesAddQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesRolesAddQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesRolesAddQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesRolesAddQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesRolesAddQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesRolesAddQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesRolesAddQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesRolesAddQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesRolesAddQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesRolesAddQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesRolesAddQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesRolesAddQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesRolesAddQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesRolesAddQueryParams };
var ServicenetworkingServicesRolesAddSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesRolesAddSecurityOption1, _super);
    function ServicenetworkingServicesRolesAddSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesRolesAddSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesRolesAddSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesRolesAddSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesRolesAddSecurityOption1 };
var ServicenetworkingServicesRolesAddSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesRolesAddSecurityOption2, _super);
    function ServicenetworkingServicesRolesAddSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesRolesAddSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesRolesAddSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesRolesAddSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesRolesAddSecurityOption2 };
var ServicenetworkingServicesRolesAddSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesRolesAddSecurity, _super);
    function ServicenetworkingServicesRolesAddSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesRolesAddSecurityOption1)
    ], ServicenetworkingServicesRolesAddSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesRolesAddSecurityOption2)
    ], ServicenetworkingServicesRolesAddSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesRolesAddSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesRolesAddSecurity };
var ServicenetworkingServicesRolesAddRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesRolesAddRequest, _super);
    function ServicenetworkingServicesRolesAddRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesRolesAddPathParams)
    ], ServicenetworkingServicesRolesAddRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesRolesAddQueryParams)
    ], ServicenetworkingServicesRolesAddRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddRolesRequest)
    ], ServicenetworkingServicesRolesAddRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesRolesAddSecurity)
    ], ServicenetworkingServicesRolesAddRequest.prototype, "security", void 0);
    return ServicenetworkingServicesRolesAddRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesRolesAddRequest };
var ServicenetworkingServicesRolesAddResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesRolesAddResponse, _super);
    function ServicenetworkingServicesRolesAddResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesRolesAddResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicenetworkingServicesRolesAddResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesRolesAddResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesRolesAddResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesRolesAddResponse };
