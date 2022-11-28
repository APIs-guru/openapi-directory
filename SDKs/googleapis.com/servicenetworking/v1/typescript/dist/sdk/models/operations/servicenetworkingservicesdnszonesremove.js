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
var ServicenetworkingServicesDnsZonesRemovePathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsZonesRemovePathParams, _super);
    function ServicenetworkingServicesDnsZonesRemovePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesRemovePathParams.prototype, "parent", void 0);
    return ServicenetworkingServicesDnsZonesRemovePathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsZonesRemovePathParams };
var ServicenetworkingServicesDnsZonesRemoveQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsZonesRemoveQueryParams, _super);
    function ServicenetworkingServicesDnsZonesRemoveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesRemoveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesRemoveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesRemoveQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesRemoveQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesRemoveQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesRemoveQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesRemoveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesDnsZonesRemoveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesRemoveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesRemoveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesRemoveQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesDnsZonesRemoveQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsZonesRemoveQueryParams };
var ServicenetworkingServicesDnsZonesRemoveSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsZonesRemoveSecurityOption1, _super);
    function ServicenetworkingServicesDnsZonesRemoveSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesDnsZonesRemoveSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesDnsZonesRemoveSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesDnsZonesRemoveSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsZonesRemoveSecurityOption1 };
var ServicenetworkingServicesDnsZonesRemoveSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsZonesRemoveSecurityOption2, _super);
    function ServicenetworkingServicesDnsZonesRemoveSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesDnsZonesRemoveSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesDnsZonesRemoveSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesDnsZonesRemoveSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsZonesRemoveSecurityOption2 };
var ServicenetworkingServicesDnsZonesRemoveSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsZonesRemoveSecurity, _super);
    function ServicenetworkingServicesDnsZonesRemoveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesDnsZonesRemoveSecurityOption1)
    ], ServicenetworkingServicesDnsZonesRemoveSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesDnsZonesRemoveSecurityOption2)
    ], ServicenetworkingServicesDnsZonesRemoveSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesDnsZonesRemoveSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsZonesRemoveSecurity };
var ServicenetworkingServicesDnsZonesRemoveRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsZonesRemoveRequest, _super);
    function ServicenetworkingServicesDnsZonesRemoveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDnsZonesRemovePathParams)
    ], ServicenetworkingServicesDnsZonesRemoveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDnsZonesRemoveQueryParams)
    ], ServicenetworkingServicesDnsZonesRemoveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemoveDnsZoneRequest)
    ], ServicenetworkingServicesDnsZonesRemoveRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDnsZonesRemoveSecurity)
    ], ServicenetworkingServicesDnsZonesRemoveRequest.prototype, "security", void 0);
    return ServicenetworkingServicesDnsZonesRemoveRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsZonesRemoveRequest };
var ServicenetworkingServicesDnsZonesRemoveResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsZonesRemoveResponse, _super);
    function ServicenetworkingServicesDnsZonesRemoveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsZonesRemoveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicenetworkingServicesDnsZonesRemoveResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesDnsZonesRemoveResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesDnsZonesRemoveResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsZonesRemoveResponse };
