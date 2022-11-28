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
var RetailProjectsLocationsCatalogsServingConfigsPredictPathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsPredictPathParams, _super);
    function RetailProjectsLocationsCatalogsServingConfigsPredictPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=placement" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictPathParams.prototype, "placement", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsPredictPathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsPredictPathParams };
var RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams, _super);
    function RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams };
var RetailProjectsLocationsCatalogsServingConfigsPredictSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsPredictSecurity, _super);
    function RetailProjectsLocationsCatalogsServingConfigsPredictSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsPredictSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsPredictSecurity };
var RetailProjectsLocationsCatalogsServingConfigsPredictRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsPredictRequest, _super);
    function RetailProjectsLocationsCatalogsServingConfigsPredictRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsServingConfigsPredictPathParams)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRetailV2PredictRequestInput)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsServingConfigsPredictSecurity)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsPredictRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsPredictRequest };
var RetailProjectsLocationsCatalogsServingConfigsPredictResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsPredictResponse, _super);
    function RetailProjectsLocationsCatalogsServingConfigsPredictResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRetailV2PredictResponse)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictResponse.prototype, "googleCloudRetailV2PredictResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsServingConfigsPredictResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsPredictResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsPredictResponse };
