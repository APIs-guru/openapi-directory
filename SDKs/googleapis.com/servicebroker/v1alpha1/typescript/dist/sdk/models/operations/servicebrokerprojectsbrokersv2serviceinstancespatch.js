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
var ServicebrokerProjectsBrokersV2ServiceInstancesPatchPathParams = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesPatchPathParams, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance_id" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchPathParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchPathParams.prototype, "parent", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesPatchPathParams;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesPatchPathParams };
var ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acceptsIncomplete" }),
        __metadata("design:type", Boolean)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams.prototype, "acceptsIncomplete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams };
var ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity.prototype, "oauth2c", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity };
var ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesPatchPathParams)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudServicebrokerV1alpha1ServiceInstance)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest.prototype, "security", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest };
var ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse.prototype, "statusCode", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse };
