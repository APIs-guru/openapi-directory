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
var ServicenetworkingServicesDnsZonesAddPathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsZonesAddPathParams, _super);
    function ServicenetworkingServicesDnsZonesAddPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesAddPathParams.prototype, "parent", void 0);
    return ServicenetworkingServicesDnsZonesAddPathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsZonesAddPathParams };
var ServicenetworkingServicesDnsZonesAddQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsZonesAddQueryParams, _super);
    function ServicenetworkingServicesDnsZonesAddQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesAddQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesAddQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesAddQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesAddQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesAddQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesAddQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesAddQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesDnsZonesAddQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesAddQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesAddQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesAddQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesDnsZonesAddQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsZonesAddQueryParams };
var ServicenetworkingServicesDnsZonesAddSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsZonesAddSecurityOption1, _super);
    function ServicenetworkingServicesDnsZonesAddSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesDnsZonesAddSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesDnsZonesAddSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesDnsZonesAddSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsZonesAddSecurityOption1 };
var ServicenetworkingServicesDnsZonesAddSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsZonesAddSecurityOption2, _super);
    function ServicenetworkingServicesDnsZonesAddSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesDnsZonesAddSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesDnsZonesAddSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesDnsZonesAddSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsZonesAddSecurityOption2 };
var ServicenetworkingServicesDnsZonesAddSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsZonesAddSecurity, _super);
    function ServicenetworkingServicesDnsZonesAddSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesDnsZonesAddSecurityOption1)
    ], ServicenetworkingServicesDnsZonesAddSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesDnsZonesAddSecurityOption2)
    ], ServicenetworkingServicesDnsZonesAddSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesDnsZonesAddSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsZonesAddSecurity };
var ServicenetworkingServicesDnsZonesAddRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsZonesAddRequest, _super);
    function ServicenetworkingServicesDnsZonesAddRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDnsZonesAddPathParams)
    ], ServicenetworkingServicesDnsZonesAddRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDnsZonesAddQueryParams)
    ], ServicenetworkingServicesDnsZonesAddRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddDnsZoneRequest)
    ], ServicenetworkingServicesDnsZonesAddRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDnsZonesAddSecurity)
    ], ServicenetworkingServicesDnsZonesAddRequest.prototype, "security", void 0);
    return ServicenetworkingServicesDnsZonesAddRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsZonesAddRequest };
var ServicenetworkingServicesDnsZonesAddResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsZonesAddResponse, _super);
    function ServicenetworkingServicesDnsZonesAddResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesAddResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicenetworkingServicesDnsZonesAddResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesDnsZonesAddResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesDnsZonesAddResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsZonesAddResponse };
