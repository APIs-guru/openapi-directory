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
var ServiceconsumermanagementServicesTenancyUnitsCreatePathParams = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsCreatePathParams, _super);
    function ServiceconsumermanagementServicesTenancyUnitsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsCreatePathParams.prototype, "parent", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsCreatePathParams;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsCreatePathParams };
var ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams, _super);
    function ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams };
var ServiceconsumermanagementServicesTenancyUnitsCreateSecurity = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsCreateSecurity, _super);
    function ServiceconsumermanagementServicesTenancyUnitsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateSecurity.prototype, "oauth2c", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsCreateSecurity;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsCreateSecurity };
var ServiceconsumermanagementServicesTenancyUnitsCreateRequest = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsCreateRequest, _super);
    function ServiceconsumermanagementServicesTenancyUnitsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ServiceconsumermanagementServicesTenancyUnitsCreatePathParams)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateTenancyUnitRequest)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServiceconsumermanagementServicesTenancyUnitsCreateSecurity)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateRequest.prototype, "security", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsCreateRequest;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsCreateRequest };
var ServiceconsumermanagementServicesTenancyUnitsCreateResponse = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsCreateResponse, _super);
    function ServiceconsumermanagementServicesTenancyUnitsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TenancyUnit)
    ], ServiceconsumermanagementServicesTenancyUnitsCreateResponse.prototype, "tenancyUnit", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsCreateResponse;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsCreateResponse };
