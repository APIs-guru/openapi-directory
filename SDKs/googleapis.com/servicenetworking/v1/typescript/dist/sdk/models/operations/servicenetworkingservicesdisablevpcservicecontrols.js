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
var ServicenetworkingServicesDisableVpcServiceControlsPathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDisableVpcServiceControlsPathParams, _super);
    function ServicenetworkingServicesDisableVpcServiceControlsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDisableVpcServiceControlsPathParams.prototype, "parent", void 0);
    return ServicenetworkingServicesDisableVpcServiceControlsPathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesDisableVpcServiceControlsPathParams };
var ServicenetworkingServicesDisableVpcServiceControlsQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDisableVpcServiceControlsQueryParams, _super);
    function ServicenetworkingServicesDisableVpcServiceControlsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDisableVpcServiceControlsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDisableVpcServiceControlsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDisableVpcServiceControlsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDisableVpcServiceControlsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDisableVpcServiceControlsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDisableVpcServiceControlsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDisableVpcServiceControlsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesDisableVpcServiceControlsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDisableVpcServiceControlsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDisableVpcServiceControlsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDisableVpcServiceControlsQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesDisableVpcServiceControlsQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesDisableVpcServiceControlsQueryParams };
var ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1, _super);
    function ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1 };
var ServicenetworkingServicesDisableVpcServiceControlsSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDisableVpcServiceControlsSecurityOption2, _super);
    function ServicenetworkingServicesDisableVpcServiceControlsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesDisableVpcServiceControlsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesDisableVpcServiceControlsSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesDisableVpcServiceControlsSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesDisableVpcServiceControlsSecurityOption2 };
var ServicenetworkingServicesDisableVpcServiceControlsSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDisableVpcServiceControlsSecurity, _super);
    function ServicenetworkingServicesDisableVpcServiceControlsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1)
    ], ServicenetworkingServicesDisableVpcServiceControlsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesDisableVpcServiceControlsSecurityOption2)
    ], ServicenetworkingServicesDisableVpcServiceControlsSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesDisableVpcServiceControlsSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesDisableVpcServiceControlsSecurity };
var ServicenetworkingServicesDisableVpcServiceControlsRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDisableVpcServiceControlsRequest, _super);
    function ServicenetworkingServicesDisableVpcServiceControlsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDisableVpcServiceControlsPathParams)
    ], ServicenetworkingServicesDisableVpcServiceControlsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDisableVpcServiceControlsQueryParams)
    ], ServicenetworkingServicesDisableVpcServiceControlsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DisableVpcServiceControlsRequest)
    ], ServicenetworkingServicesDisableVpcServiceControlsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesDisableVpcServiceControlsSecurity)
    ], ServicenetworkingServicesDisableVpcServiceControlsRequest.prototype, "security", void 0);
    return ServicenetworkingServicesDisableVpcServiceControlsRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesDisableVpcServiceControlsRequest };
var ServicenetworkingServicesDisableVpcServiceControlsResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesDisableVpcServiceControlsResponse, _super);
    function ServicenetworkingServicesDisableVpcServiceControlsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesDisableVpcServiceControlsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicenetworkingServicesDisableVpcServiceControlsResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesDisableVpcServiceControlsResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesDisableVpcServiceControlsResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesDisableVpcServiceControlsResponse };
