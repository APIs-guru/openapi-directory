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
var ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetPathParams = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetPathParams, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bindingId" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetPathParams.prototype, "bindingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instanceId" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetPathParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetPathParams.prototype, "parent", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetPathParams;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetPathParams };
var ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=planId" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams.prototype, "planId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceId" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams };
var ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity.prototype, "oauth2c", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity };
var ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetPathParams)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest.prototype, "security", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest };
var ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse.prototype, "statusCode", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse };
