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
var RetailProjectsLocationsCatalogsServingConfigsSearchPathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsSearchPathParams, _super);
    function RetailProjectsLocationsCatalogsServingConfigsSearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=placement" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchPathParams.prototype, "placement", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsSearchPathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsSearchPathParams };
var RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams, _super);
    function RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams };
var RetailProjectsLocationsCatalogsServingConfigsSearchSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsSearchSecurity, _super);
    function RetailProjectsLocationsCatalogsServingConfigsSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsSearchSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsSearchSecurity };
var RetailProjectsLocationsCatalogsServingConfigsSearchRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsSearchRequest, _super);
    function RetailProjectsLocationsCatalogsServingConfigsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsServingConfigsSearchPathParams)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRetailV2alphaSearchRequest)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsServingConfigsSearchSecurity)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsSearchRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsSearchRequest };
var RetailProjectsLocationsCatalogsServingConfigsSearchResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsSearchResponse, _super);
    function RetailProjectsLocationsCatalogsServingConfigsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRetailV2alphaSearchResponse)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchResponse.prototype, "googleCloudRetailV2alphaSearchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsServingConfigsSearchResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsSearchResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsSearchResponse };
