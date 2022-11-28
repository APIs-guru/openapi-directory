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
var ServicecontrolServicesAllocateQuotaPathParams = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesAllocateQuotaPathParams, _super);
    function ServicecontrolServicesAllocateQuotaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceName" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesAllocateQuotaPathParams.prototype, "serviceName", void 0);
    return ServicecontrolServicesAllocateQuotaPathParams;
}(SpeakeasyBase));
export { ServicecontrolServicesAllocateQuotaPathParams };
var ServicecontrolServicesAllocateQuotaQueryParams = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesAllocateQuotaQueryParams, _super);
    function ServicecontrolServicesAllocateQuotaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesAllocateQuotaQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesAllocateQuotaQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesAllocateQuotaQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesAllocateQuotaQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesAllocateQuotaQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesAllocateQuotaQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesAllocateQuotaQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicecontrolServicesAllocateQuotaQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesAllocateQuotaQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesAllocateQuotaQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesAllocateQuotaQueryParams.prototype, "uploadProtocol", void 0);
    return ServicecontrolServicesAllocateQuotaQueryParams;
}(SpeakeasyBase));
export { ServicecontrolServicesAllocateQuotaQueryParams };
var ServicecontrolServicesAllocateQuotaSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesAllocateQuotaSecurityOption1, _super);
    function ServicecontrolServicesAllocateQuotaSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicecontrolServicesAllocateQuotaSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicecontrolServicesAllocateQuotaSecurityOption1.prototype, "oauth2c", void 0);
    return ServicecontrolServicesAllocateQuotaSecurityOption1;
}(SpeakeasyBase));
export { ServicecontrolServicesAllocateQuotaSecurityOption1 };
var ServicecontrolServicesAllocateQuotaSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesAllocateQuotaSecurityOption2, _super);
    function ServicecontrolServicesAllocateQuotaSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicecontrolServicesAllocateQuotaSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicecontrolServicesAllocateQuotaSecurityOption2.prototype, "oauth2c", void 0);
    return ServicecontrolServicesAllocateQuotaSecurityOption2;
}(SpeakeasyBase));
export { ServicecontrolServicesAllocateQuotaSecurityOption2 };
var ServicecontrolServicesAllocateQuotaSecurity = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesAllocateQuotaSecurity, _super);
    function ServicecontrolServicesAllocateQuotaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicecontrolServicesAllocateQuotaSecurityOption1)
    ], ServicecontrolServicesAllocateQuotaSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicecontrolServicesAllocateQuotaSecurityOption2)
    ], ServicecontrolServicesAllocateQuotaSecurity.prototype, "option2", void 0);
    return ServicecontrolServicesAllocateQuotaSecurity;
}(SpeakeasyBase));
export { ServicecontrolServicesAllocateQuotaSecurity };
var ServicecontrolServicesAllocateQuotaRequest = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesAllocateQuotaRequest, _super);
    function ServicecontrolServicesAllocateQuotaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicecontrolServicesAllocateQuotaPathParams)
    ], ServicecontrolServicesAllocateQuotaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicecontrolServicesAllocateQuotaQueryParams)
    ], ServicecontrolServicesAllocateQuotaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AllocateQuotaRequest)
    ], ServicecontrolServicesAllocateQuotaRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicecontrolServicesAllocateQuotaSecurity)
    ], ServicecontrolServicesAllocateQuotaRequest.prototype, "security", void 0);
    return ServicecontrolServicesAllocateQuotaRequest;
}(SpeakeasyBase));
export { ServicecontrolServicesAllocateQuotaRequest };
var ServicecontrolServicesAllocateQuotaResponse = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesAllocateQuotaResponse, _super);
    function ServicecontrolServicesAllocateQuotaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AllocateQuotaResponse)
    ], ServicecontrolServicesAllocateQuotaResponse.prototype, "allocateQuotaResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicecontrolServicesAllocateQuotaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicecontrolServicesAllocateQuotaResponse.prototype, "statusCode", void 0);
    return ServicecontrolServicesAllocateQuotaResponse;
}(SpeakeasyBase));
export { ServicecontrolServicesAllocateQuotaResponse };
