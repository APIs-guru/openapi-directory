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
var DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyPathParams, _super);
    function DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyPathParams.prototype, "resource", void 0);
    return DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyPathParams };
var DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams, _super);
    function DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams };
var DataplexProjectsLocationsLakesZonesAssetsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesAssetsSetIamPolicySecurity, _super);
    function DataplexProjectsLocationsLakesZonesAssetsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return DataplexProjectsLocationsLakesZonesAssetsSetIamPolicySecurity;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesAssetsSetIamPolicySecurity };
var DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest, _super);
    function DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyPathParams)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleIamV1SetIamPolicyRequest)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesZonesAssetsSetIamPolicySecurity)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest.prototype, "security", void 0);
    return DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest };
var DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyResponse, _super);
    function DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleIamV1Policy)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyResponse.prototype, "googleIamV1Policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyResponse;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyResponse };
