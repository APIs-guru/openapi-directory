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
var ServiceconsumermanagementServicesTenancyUnitsDeletePathParams = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsDeletePathParams, _super);
    function ServiceconsumermanagementServicesTenancyUnitsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeletePathParams.prototype, "name", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsDeletePathParams;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsDeletePathParams };
var ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams, _super);
    function ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams };
var ServiceconsumermanagementServicesTenancyUnitsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsDeleteSecurity, _super);
    function ServiceconsumermanagementServicesTenancyUnitsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteSecurity.prototype, "oauth2c", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsDeleteSecurity;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsDeleteSecurity };
var ServiceconsumermanagementServicesTenancyUnitsDeleteRequest = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsDeleteRequest, _super);
    function ServiceconsumermanagementServicesTenancyUnitsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ServiceconsumermanagementServicesTenancyUnitsDeletePathParams)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServiceconsumermanagementServicesTenancyUnitsDeleteQueryParams)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServiceconsumermanagementServicesTenancyUnitsDeleteSecurity)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteRequest.prototype, "security", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsDeleteRequest;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsDeleteRequest };
var ServiceconsumermanagementServicesTenancyUnitsDeleteResponse = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsDeleteResponse, _super);
    function ServiceconsumermanagementServicesTenancyUnitsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ServiceconsumermanagementServicesTenancyUnitsDeleteResponse.prototype, "statusCode", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsDeleteResponse;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsDeleteResponse };
