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
var ServicenetworkingServicesDnsRecordSetsRemovePathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsRemovePathParams, _super);
    function ServicenetworkingServicesDnsRecordSetsRemovePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsRemovePathParams.prototype, "parent", void 0);
    return ServicenetworkingServicesDnsRecordSetsRemovePathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsRemovePathParams };
var ServicenetworkingServicesDnsRecordSetsRemoveQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsRemoveQueryParams, _super);
    function ServicenetworkingServicesDnsRecordSetsRemoveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsRemoveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsRemoveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsRemoveQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsRemoveQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsRemoveQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsRemoveQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsRemoveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesDnsRecordSetsRemoveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsRemoveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsRemoveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsRemoveQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesDnsRecordSetsRemoveQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsRemoveQueryParams };
var ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption1, _super);
    function ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption1 };
var ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption2, _super);
    function ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption2 };
var ServicenetworkingServicesDnsRecordSetsRemoveSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsRemoveSecurity, _super);
    function ServicenetworkingServicesDnsRecordSetsRemoveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption1)
    ], ServicenetworkingServicesDnsRecordSetsRemoveSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption2)
    ], ServicenetworkingServicesDnsRecordSetsRemoveSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesDnsRecordSetsRemoveSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsRemoveSecurity };
var ServicenetworkingServicesDnsRecordSetsRemoveRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsRemoveRequest, _super);
    function ServicenetworkingServicesDnsRecordSetsRemoveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDnsRecordSetsRemovePathParams)
    ], ServicenetworkingServicesDnsRecordSetsRemoveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDnsRecordSetsRemoveQueryParams)
    ], ServicenetworkingServicesDnsRecordSetsRemoveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemoveDnsRecordSetRequest)
    ], ServicenetworkingServicesDnsRecordSetsRemoveRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDnsRecordSetsRemoveSecurity)
    ], ServicenetworkingServicesDnsRecordSetsRemoveRequest.prototype, "security", void 0);
    return ServicenetworkingServicesDnsRecordSetsRemoveRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsRemoveRequest };
var ServicenetworkingServicesDnsRecordSetsRemoveResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDnsRecordSetsRemoveResponse, _super);
    function ServicenetworkingServicesDnsRecordSetsRemoveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDnsRecordSetsRemoveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicenetworkingServicesDnsRecordSetsRemoveResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesDnsRecordSetsRemoveResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesDnsRecordSetsRemoveResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesDnsRecordSetsRemoveResponse };
