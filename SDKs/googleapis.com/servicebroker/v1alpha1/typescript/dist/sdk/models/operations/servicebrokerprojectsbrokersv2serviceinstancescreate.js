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
var ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance_id" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams.prototype, "parent", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams };
var ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acceptsIncomplete" }),
        __metadata("design:type", Boolean)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams.prototype, "acceptsIncomplete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams };
var ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity.prototype, "oauth2c", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity };
var ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudServicebrokerV1alpha1ServiceInstance)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest.prototype, "security", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest };
var ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse.prototype, "statusCode", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse };
