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
var ServiceconsumermanagementServicesTenancyUnitsDeleteProjectPathParams = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsDeleteProjectPathParams, _super);
    function ServiceconsumermanagementServicesTenancyUnitsDeleteProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectPathParams.prototype, "name", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsDeleteProjectPathParams;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsDeleteProjectPathParams };
var ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams, _super);
    function ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams };
var ServiceconsumermanagementServicesTenancyUnitsDeleteProjectSecurity = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsDeleteProjectSecurity, _super);
    function ServiceconsumermanagementServicesTenancyUnitsDeleteProjectSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectSecurity.prototype, "oauth2c", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsDeleteProjectSecurity;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsDeleteProjectSecurity };
var ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest, _super);
    function ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceconsumermanagementServicesTenancyUnitsDeleteProjectPathParams)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceconsumermanagementServicesTenancyUnitsDeleteProjectQueryParams)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteTenantProjectRequest)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceconsumermanagementServicesTenancyUnitsDeleteProjectSecurity)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest.prototype, "security", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest };
var ServiceconsumermanagementServicesTenancyUnitsDeleteProjectResponse = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsDeleteProjectResponse, _super);
    function ServiceconsumermanagementServicesTenancyUnitsDeleteProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteProjectResponse.prototype, "statusCode", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsDeleteProjectResponse;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsDeleteProjectResponse };
