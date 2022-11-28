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
var NetworkservicesProjectsLocationsServiceBindingsCreatePathParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsServiceBindingsCreatePathParams, _super);
    function NetworkservicesProjectsLocationsServiceBindingsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsServiceBindingsCreatePathParams.prototype, "parent", void 0);
    return NetworkservicesProjectsLocationsServiceBindingsCreatePathParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsServiceBindingsCreatePathParams };
var NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams, _super);
    function NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceBindingId" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams.prototype, "serviceBindingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams };
var NetworkservicesProjectsLocationsServiceBindingsCreateSecurity = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsServiceBindingsCreateSecurity, _super);
    function NetworkservicesProjectsLocationsServiceBindingsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateSecurity.prototype, "oauth2c", void 0);
    return NetworkservicesProjectsLocationsServiceBindingsCreateSecurity;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsServiceBindingsCreateSecurity };
var NetworkservicesProjectsLocationsServiceBindingsCreateRequest = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsServiceBindingsCreateRequest, _super);
    function NetworkservicesProjectsLocationsServiceBindingsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsServiceBindingsCreatePathParams)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ServiceBindingInput)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsServiceBindingsCreateSecurity)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateRequest.prototype, "security", void 0);
    return NetworkservicesProjectsLocationsServiceBindingsCreateRequest;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsServiceBindingsCreateRequest };
var NetworkservicesProjectsLocationsServiceBindingsCreateResponse = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsServiceBindingsCreateResponse, _super);
    function NetworkservicesProjectsLocationsServiceBindingsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkservicesProjectsLocationsServiceBindingsCreateResponse.prototype, "statusCode", void 0);
    return NetworkservicesProjectsLocationsServiceBindingsCreateResponse;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsServiceBindingsCreateResponse };
