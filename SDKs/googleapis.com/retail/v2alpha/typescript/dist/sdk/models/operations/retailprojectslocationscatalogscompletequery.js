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
var RetailProjectsLocationsCatalogsCompleteQueryPathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsCompleteQueryPathParams, _super);
    function RetailProjectsLocationsCatalogsCompleteQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=catalog" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsCompleteQueryPathParams.prototype, "catalog", void 0);
    return RetailProjectsLocationsCatalogsCompleteQueryPathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsCompleteQueryPathParams };
var RetailProjectsLocationsCatalogsCompleteQueryQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsCompleteQueryQueryParams, _super);
    function RetailProjectsLocationsCatalogsCompleteQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dataset" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "dataset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableAttributeSuggestions" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "enableAttributeSuggestions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCodes" }),
        __metadata("design:type", Array)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "languageCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxSuggestions" }),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "maxSuggestions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=visitorId" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsCompleteQueryQueryParams.prototype, "visitorId", void 0);
    return RetailProjectsLocationsCatalogsCompleteQueryQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsCompleteQueryQueryParams };
var RetailProjectsLocationsCatalogsCompleteQuerySecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsCompleteQuerySecurity, _super);
    function RetailProjectsLocationsCatalogsCompleteQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsCompleteQuerySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsCompleteQuerySecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsCompleteQuerySecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsCompleteQuerySecurity };
var RetailProjectsLocationsCatalogsCompleteQueryRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsCompleteQueryRequest, _super);
    function RetailProjectsLocationsCatalogsCompleteQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsCompleteQueryPathParams)
    ], RetailProjectsLocationsCatalogsCompleteQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsCompleteQueryQueryParams)
    ], RetailProjectsLocationsCatalogsCompleteQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsCompleteQuerySecurity)
    ], RetailProjectsLocationsCatalogsCompleteQueryRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsCompleteQueryRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsCompleteQueryRequest };
var RetailProjectsLocationsCatalogsCompleteQueryResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsCompleteQueryResponse, _super);
    function RetailProjectsLocationsCatalogsCompleteQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsCompleteQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRetailV2alphaCompleteQueryResponse)
    ], RetailProjectsLocationsCatalogsCompleteQueryResponse.prototype, "googleCloudRetailV2alphaCompleteQueryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsCompleteQueryResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsCompleteQueryResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsCompleteQueryResponse };
