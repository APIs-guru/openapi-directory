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
var RetailProjectsLocationsCatalogsServingConfigsCreatePathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsCreatePathParams, _super);
    function RetailProjectsLocationsCatalogsServingConfigsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsCreatePathParams.prototype, "parent", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsCreatePathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsCreatePathParams };
var RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams, _super);
    function RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=servingConfigId" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams.prototype, "servingConfigId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams };
var RetailProjectsLocationsCatalogsServingConfigsCreateSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsCreateSecurity, _super);
    function RetailProjectsLocationsCatalogsServingConfigsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsCreateSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsCreateSecurity };
var RetailProjectsLocationsCatalogsServingConfigsCreateRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsCreateRequest, _super);
    function RetailProjectsLocationsCatalogsServingConfigsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsServingConfigsCreatePathParams)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRetailV2betaServingConfig)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsServingConfigsCreateSecurity)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsCreateRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsCreateRequest };
var RetailProjectsLocationsCatalogsServingConfigsCreateResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsCreateResponse, _super);
    function RetailProjectsLocationsCatalogsServingConfigsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRetailV2betaServingConfig)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateResponse.prototype, "googleCloudRetailV2betaServingConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsServingConfigsCreateResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsCreateResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsCreateResponse };
