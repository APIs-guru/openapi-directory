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
var RetailProjectsLocationsCatalogsServingConfigsAddControlPathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsAddControlPathParams, _super);
    function RetailProjectsLocationsCatalogsServingConfigsAddControlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=servingConfig" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlPathParams.prototype, "servingConfig", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsAddControlPathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsAddControlPathParams };
var RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams, _super);
    function RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams };
var RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity, _super);
    function RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity };
var RetailProjectsLocationsCatalogsServingConfigsAddControlRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsAddControlRequest, _super);
    function RetailProjectsLocationsCatalogsServingConfigsAddControlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsServingConfigsAddControlPathParams)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRetailV2alphaAddControlRequest)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsAddControlRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsAddControlRequest };
var RetailProjectsLocationsCatalogsServingConfigsAddControlResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsAddControlResponse, _super);
    function RetailProjectsLocationsCatalogsServingConfigsAddControlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRetailV2alphaServingConfig)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlResponse.prototype, "googleCloudRetailV2alphaServingConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsServingConfigsAddControlResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsAddControlResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsAddControlResponse };
