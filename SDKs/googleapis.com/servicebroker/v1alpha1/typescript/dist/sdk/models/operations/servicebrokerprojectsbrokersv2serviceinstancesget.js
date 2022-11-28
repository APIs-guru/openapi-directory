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
var ServicebrokerProjectsBrokersV2ServiceInstancesGetPathParams = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesGetPathParams, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetPathParams.prototype, "name", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesGetPathParams;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesGetPathParams };
var ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams.prototype, "uploadProtocol", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams };
var ServicebrokerProjectsBrokersV2ServiceInstancesGetSecurity = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesGetSecurity, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetSecurity.prototype, "oauth2c", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesGetSecurity;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesGetSecurity };
var ServicebrokerProjectsBrokersV2ServiceInstancesGetRequest = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesGetRequest, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesGetPathParams)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesGetQueryParams)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesGetSecurity)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetRequest.prototype, "security", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesGetRequest;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesGetRequest };
var ServicebrokerProjectsBrokersV2ServiceInstancesGetResponse = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesGetResponse, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesGetResponse.prototype, "statusCode", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesGetResponse;
}(SpeakeasyBase));
export { ServicebrokerProjectsBrokersV2ServiceInstancesGetResponse };
