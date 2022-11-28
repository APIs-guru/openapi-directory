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
var DataplexProjectsLocationsLakesZonesAssetsCreatePathParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesAssetsCreatePathParams, _super);
    function DataplexProjectsLocationsLakesZonesAssetsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsCreatePathParams.prototype, "parent", void 0);
    return DataplexProjectsLocationsLakesZonesAssetsCreatePathParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesAssetsCreatePathParams };
var DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams, _super);
    function DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assetId" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams.prototype, "assetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams.prototype, "validateOnly", void 0);
    return DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams };
var DataplexProjectsLocationsLakesZonesAssetsCreateSecurity = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesAssetsCreateSecurity, _super);
    function DataplexProjectsLocationsLakesZonesAssetsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateSecurity.prototype, "oauth2c", void 0);
    return DataplexProjectsLocationsLakesZonesAssetsCreateSecurity;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesAssetsCreateSecurity };
var DataplexProjectsLocationsLakesZonesAssetsCreateRequest = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesAssetsCreateRequest, _super);
    function DataplexProjectsLocationsLakesZonesAssetsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesZonesAssetsCreatePathParams)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesZonesAssetsCreateQueryParams)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDataplexV1AssetInput)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesZonesAssetsCreateSecurity)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateRequest.prototype, "security", void 0);
    return DataplexProjectsLocationsLakesZonesAssetsCreateRequest;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesAssetsCreateRequest };
var DataplexProjectsLocationsLakesZonesAssetsCreateResponse = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesAssetsCreateResponse, _super);
    function DataplexProjectsLocationsLakesZonesAssetsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataplexProjectsLocationsLakesZonesAssetsCreateResponse.prototype, "statusCode", void 0);
    return DataplexProjectsLocationsLakesZonesAssetsCreateResponse;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesAssetsCreateResponse };
