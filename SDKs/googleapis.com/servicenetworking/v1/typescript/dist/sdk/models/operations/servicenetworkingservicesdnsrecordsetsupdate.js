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
var ServicenetworkingServicesDnsRecordSetsUpdatePathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsUpdatePathParams, _super);
    function ServicenetworkingServicesDnsRecordSetsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsUpdatePathParams.prototype, "parent", void 0);
    return ServicenetworkingServicesDnsRecordSetsUpdatePathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsUpdatePathParams };
var ServicenetworkingServicesDnsRecordSetsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsUpdateQueryParams, _super);
    function ServicenetworkingServicesDnsRecordSetsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesDnsRecordSetsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesDnsRecordSetsUpdateQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsUpdateQueryParams };
var ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption1, _super);
    function ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption1 };
var ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption2, _super);
    function ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption2 };
var ServicenetworkingServicesDnsRecordSetsUpdateSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsUpdateSecurity, _super);
    function ServicenetworkingServicesDnsRecordSetsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption1)
    ], ServicenetworkingServicesDnsRecordSetsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption2)
    ], ServicenetworkingServicesDnsRecordSetsUpdateSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesDnsRecordSetsUpdateSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsUpdateSecurity };
var ServicenetworkingServicesDnsRecordSetsUpdateRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsUpdateRequest, _super);
    function ServicenetworkingServicesDnsRecordSetsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDnsRecordSetsUpdatePathParams)
    ], ServicenetworkingServicesDnsRecordSetsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDnsRecordSetsUpdateQueryParams)
    ], ServicenetworkingServicesDnsRecordSetsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateDnsRecordSetRequest)
    ], ServicenetworkingServicesDnsRecordSetsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDnsRecordSetsUpdateSecurity)
    ], ServicenetworkingServicesDnsRecordSetsUpdateRequest.prototype, "security", void 0);
    return ServicenetworkingServicesDnsRecordSetsUpdateRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsUpdateRequest };
var ServicenetworkingServicesDnsRecordSetsUpdateResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsUpdateResponse, _super);
    function ServicenetworkingServicesDnsRecordSetsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicenetworkingServicesDnsRecordSetsUpdateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesDnsRecordSetsUpdateResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesDnsRecordSetsUpdateResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsUpdateResponse };
