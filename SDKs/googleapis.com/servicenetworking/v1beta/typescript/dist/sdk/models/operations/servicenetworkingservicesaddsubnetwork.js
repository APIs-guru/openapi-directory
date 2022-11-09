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
var ServicenetworkingServicesAddSubnetworkPathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesAddSubnetworkPathParams, _super);
    function ServicenetworkingServicesAddSubnetworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesAddSubnetworkPathParams.prototype, "parent", void 0);
    return ServicenetworkingServicesAddSubnetworkPathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesAddSubnetworkPathParams };
var ServicenetworkingServicesAddSubnetworkQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesAddSubnetworkQueryParams, _super);
    function ServicenetworkingServicesAddSubnetworkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesAddSubnetworkQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesAddSubnetworkQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesAddSubnetworkQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesAddSubnetworkQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesAddSubnetworkQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesAddSubnetworkQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesAddSubnetworkQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesAddSubnetworkQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesAddSubnetworkQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesAddSubnetworkQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesAddSubnetworkQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesAddSubnetworkQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesAddSubnetworkQueryParams };
var ServicenetworkingServicesAddSubnetworkSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesAddSubnetworkSecurityOption1, _super);
    function ServicenetworkingServicesAddSubnetworkSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesAddSubnetworkSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesAddSubnetworkSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesAddSubnetworkSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesAddSubnetworkSecurityOption1 };
var ServicenetworkingServicesAddSubnetworkSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesAddSubnetworkSecurityOption2, _super);
    function ServicenetworkingServicesAddSubnetworkSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesAddSubnetworkSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesAddSubnetworkSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesAddSubnetworkSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesAddSubnetworkSecurityOption2 };
var ServicenetworkingServicesAddSubnetworkSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesAddSubnetworkSecurity, _super);
    function ServicenetworkingServicesAddSubnetworkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesAddSubnetworkSecurityOption1)
    ], ServicenetworkingServicesAddSubnetworkSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesAddSubnetworkSecurityOption2)
    ], ServicenetworkingServicesAddSubnetworkSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesAddSubnetworkSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesAddSubnetworkSecurity };
var ServicenetworkingServicesAddSubnetworkRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesAddSubnetworkRequest, _super);
    function ServicenetworkingServicesAddSubnetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ServicenetworkingServicesAddSubnetworkPathParams)
    ], ServicenetworkingServicesAddSubnetworkRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicenetworkingServicesAddSubnetworkQueryParams)
    ], ServicenetworkingServicesAddSubnetworkRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddSubnetworkRequest)
    ], ServicenetworkingServicesAddSubnetworkRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicenetworkingServicesAddSubnetworkSecurity)
    ], ServicenetworkingServicesAddSubnetworkRequest.prototype, "security", void 0);
    return ServicenetworkingServicesAddSubnetworkRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesAddSubnetworkRequest };
var ServicenetworkingServicesAddSubnetworkResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesAddSubnetworkResponse, _super);
    function ServicenetworkingServicesAddSubnetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesAddSubnetworkResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], ServicenetworkingServicesAddSubnetworkResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesAddSubnetworkResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesAddSubnetworkResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesAddSubnetworkResponse };
