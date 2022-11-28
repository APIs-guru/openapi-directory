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
var ServicenetworkingServicesEnableVpcServiceControlsPathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesEnableVpcServiceControlsPathParams, _super);
    function ServicenetworkingServicesEnableVpcServiceControlsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesEnableVpcServiceControlsPathParams.prototype, "parent", void 0);
    return ServicenetworkingServicesEnableVpcServiceControlsPathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesEnableVpcServiceControlsPathParams };
var ServicenetworkingServicesEnableVpcServiceControlsQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesEnableVpcServiceControlsQueryParams, _super);
    function ServicenetworkingServicesEnableVpcServiceControlsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesEnableVpcServiceControlsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesEnableVpcServiceControlsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesEnableVpcServiceControlsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesEnableVpcServiceControlsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesEnableVpcServiceControlsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesEnableVpcServiceControlsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesEnableVpcServiceControlsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesEnableVpcServiceControlsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesEnableVpcServiceControlsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesEnableVpcServiceControlsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesEnableVpcServiceControlsQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesEnableVpcServiceControlsQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesEnableVpcServiceControlsQueryParams };
var ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1, _super);
    function ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1 };
var ServicenetworkingServicesEnableVpcServiceControlsSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesEnableVpcServiceControlsSecurityOption2, _super);
    function ServicenetworkingServicesEnableVpcServiceControlsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesEnableVpcServiceControlsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesEnableVpcServiceControlsSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesEnableVpcServiceControlsSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesEnableVpcServiceControlsSecurityOption2 };
var ServicenetworkingServicesEnableVpcServiceControlsSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesEnableVpcServiceControlsSecurity, _super);
    function ServicenetworkingServicesEnableVpcServiceControlsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1)
    ], ServicenetworkingServicesEnableVpcServiceControlsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesEnableVpcServiceControlsSecurityOption2)
    ], ServicenetworkingServicesEnableVpcServiceControlsSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesEnableVpcServiceControlsSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesEnableVpcServiceControlsSecurity };
var ServicenetworkingServicesEnableVpcServiceControlsRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesEnableVpcServiceControlsRequest, _super);
    function ServicenetworkingServicesEnableVpcServiceControlsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesEnableVpcServiceControlsPathParams)
    ], ServicenetworkingServicesEnableVpcServiceControlsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesEnableVpcServiceControlsQueryParams)
    ], ServicenetworkingServicesEnableVpcServiceControlsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EnableVpcServiceControlsRequest)
    ], ServicenetworkingServicesEnableVpcServiceControlsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesEnableVpcServiceControlsSecurity)
    ], ServicenetworkingServicesEnableVpcServiceControlsRequest.prototype, "security", void 0);
    return ServicenetworkingServicesEnableVpcServiceControlsRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesEnableVpcServiceControlsRequest };
var ServicenetworkingServicesEnableVpcServiceControlsResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesEnableVpcServiceControlsResponse, _super);
    function ServicenetworkingServicesEnableVpcServiceControlsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesEnableVpcServiceControlsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicenetworkingServicesEnableVpcServiceControlsResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesEnableVpcServiceControlsResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesEnableVpcServiceControlsResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesEnableVpcServiceControlsResponse };
