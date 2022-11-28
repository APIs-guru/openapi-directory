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
var ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationPathParams = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationPathParams, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bindingId" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationPathParams.prototype, "bindingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instanceId" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationPathParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationPathParams.prototype, "parent", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationPathParams;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationPathParams };
var ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=operation" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=planId" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams.prototype, "planId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceId" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams.prototype, "uploadProtocol", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams };
var ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity.prototype, "oauth2c", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity };
var ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationPathParams)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest.prototype, "security", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest };
var ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse.prototype, "statusCode", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse };
