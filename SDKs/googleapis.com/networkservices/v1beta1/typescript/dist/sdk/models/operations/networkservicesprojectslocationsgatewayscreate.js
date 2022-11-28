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
var NetworkservicesProjectsLocationsGatewaysCreatePathParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsGatewaysCreatePathParams, _super);
    function NetworkservicesProjectsLocationsGatewaysCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGatewaysCreatePathParams.prototype, "parent", void 0);
    return NetworkservicesProjectsLocationsGatewaysCreatePathParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsGatewaysCreatePathParams };
var NetworkservicesProjectsLocationsGatewaysCreateQueryParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsGatewaysCreateQueryParams, _super);
    function NetworkservicesProjectsLocationsGatewaysCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGatewaysCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGatewaysCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGatewaysCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGatewaysCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGatewaysCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gatewayId" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGatewaysCreateQueryParams.prototype, "gatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGatewaysCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGatewaysCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkservicesProjectsLocationsGatewaysCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGatewaysCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGatewaysCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGatewaysCreateQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkservicesProjectsLocationsGatewaysCreateQueryParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsGatewaysCreateQueryParams };
var NetworkservicesProjectsLocationsGatewaysCreateSecurity = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsGatewaysCreateSecurity, _super);
    function NetworkservicesProjectsLocationsGatewaysCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkservicesProjectsLocationsGatewaysCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkservicesProjectsLocationsGatewaysCreateSecurity.prototype, "oauth2c", void 0);
    return NetworkservicesProjectsLocationsGatewaysCreateSecurity;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsGatewaysCreateSecurity };
var NetworkservicesProjectsLocationsGatewaysCreateRequest = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsGatewaysCreateRequest, _super);
    function NetworkservicesProjectsLocationsGatewaysCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsGatewaysCreatePathParams)
    ], NetworkservicesProjectsLocationsGatewaysCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsGatewaysCreateQueryParams)
    ], NetworkservicesProjectsLocationsGatewaysCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GatewayInput)
    ], NetworkservicesProjectsLocationsGatewaysCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsGatewaysCreateSecurity)
    ], NetworkservicesProjectsLocationsGatewaysCreateRequest.prototype, "security", void 0);
    return NetworkservicesProjectsLocationsGatewaysCreateRequest;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsGatewaysCreateRequest };
var NetworkservicesProjectsLocationsGatewaysCreateResponse = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsGatewaysCreateResponse, _super);
    function NetworkservicesProjectsLocationsGatewaysCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGatewaysCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], NetworkservicesProjectsLocationsGatewaysCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkservicesProjectsLocationsGatewaysCreateResponse.prototype, "statusCode", void 0);
    return NetworkservicesProjectsLocationsGatewaysCreateResponse;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsGatewaysCreateResponse };
