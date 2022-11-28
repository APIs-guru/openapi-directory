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
var ServicenetworkingServicesDnsRecordSetsAddPathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsAddPathParams, _super);
    function ServicenetworkingServicesDnsRecordSetsAddPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsAddPathParams.prototype, "parent", void 0);
    return ServicenetworkingServicesDnsRecordSetsAddPathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsAddPathParams };
var ServicenetworkingServicesDnsRecordSetsAddQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsAddQueryParams, _super);
    function ServicenetworkingServicesDnsRecordSetsAddQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsAddQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsAddQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsAddQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsAddQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsAddQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsAddQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsAddQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesDnsRecordSetsAddQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsAddQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsAddQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsAddQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesDnsRecordSetsAddQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsAddQueryParams };
var ServicenetworkingServicesDnsRecordSetsAddSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsAddSecurityOption1, _super);
    function ServicenetworkingServicesDnsRecordSetsAddSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesDnsRecordSetsAddSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesDnsRecordSetsAddSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesDnsRecordSetsAddSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsAddSecurityOption1 };
var ServicenetworkingServicesDnsRecordSetsAddSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsAddSecurityOption2, _super);
    function ServicenetworkingServicesDnsRecordSetsAddSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesDnsRecordSetsAddSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesDnsRecordSetsAddSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesDnsRecordSetsAddSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsAddSecurityOption2 };
var ServicenetworkingServicesDnsRecordSetsAddSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsAddSecurity, _super);
    function ServicenetworkingServicesDnsRecordSetsAddSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesDnsRecordSetsAddSecurityOption1)
    ], ServicenetworkingServicesDnsRecordSetsAddSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesDnsRecordSetsAddSecurityOption2)
    ], ServicenetworkingServicesDnsRecordSetsAddSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesDnsRecordSetsAddSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsAddSecurity };
var ServicenetworkingServicesDnsRecordSetsAddRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsAddRequest, _super);
    function ServicenetworkingServicesDnsRecordSetsAddRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDnsRecordSetsAddPathParams)
    ], ServicenetworkingServicesDnsRecordSetsAddRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDnsRecordSetsAddQueryParams)
    ], ServicenetworkingServicesDnsRecordSetsAddRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddDnsRecordSetRequest)
    ], ServicenetworkingServicesDnsRecordSetsAddRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDnsRecordSetsAddSecurity)
    ], ServicenetworkingServicesDnsRecordSetsAddRequest.prototype, "security", void 0);
    return ServicenetworkingServicesDnsRecordSetsAddRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsAddRequest };
var ServicenetworkingServicesDnsRecordSetsAddResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsAddResponse, _super);
    function ServicenetworkingServicesDnsRecordSetsAddResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsAddResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicenetworkingServicesDnsRecordSetsAddResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesDnsRecordSetsAddResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesDnsRecordSetsAddResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsAddResponse };
