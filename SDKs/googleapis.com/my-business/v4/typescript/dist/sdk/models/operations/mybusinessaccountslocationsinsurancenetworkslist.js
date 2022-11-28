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
var MybusinessAccountsLocationsInsuranceNetworksListPathParams = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsInsuranceNetworksListPathParams, _super);
    function MybusinessAccountsLocationsInsuranceNetworksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsInsuranceNetworksListPathParams.prototype, "parent", void 0);
    return MybusinessAccountsLocationsInsuranceNetworksListPathParams;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsInsuranceNetworksListPathParams };
var MybusinessAccountsLocationsInsuranceNetworksListQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsInsuranceNetworksListQueryParams, _super);
    function MybusinessAccountsLocationsInsuranceNetworksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsInsuranceNetworksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsInsuranceNetworksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsInsuranceNetworksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsInsuranceNetworksListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsInsuranceNetworksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsInsuranceNetworksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsInsuranceNetworksListQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsInsuranceNetworksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MybusinessAccountsLocationsInsuranceNetworksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsInsuranceNetworksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessAccountsLocationsInsuranceNetworksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsInsuranceNetworksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsInsuranceNetworksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsInsuranceNetworksListQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessAccountsLocationsInsuranceNetworksListQueryParams;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsInsuranceNetworksListQueryParams };
var MybusinessAccountsLocationsInsuranceNetworksListRequest = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsInsuranceNetworksListRequest, _super);
    function MybusinessAccountsLocationsInsuranceNetworksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessAccountsLocationsInsuranceNetworksListPathParams)
    ], MybusinessAccountsLocationsInsuranceNetworksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessAccountsLocationsInsuranceNetworksListQueryParams)
    ], MybusinessAccountsLocationsInsuranceNetworksListRequest.prototype, "queryParams", void 0);
    return MybusinessAccountsLocationsInsuranceNetworksListRequest;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsInsuranceNetworksListRequest };
var MybusinessAccountsLocationsInsuranceNetworksListResponse = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsInsuranceNetworksListResponse, _super);
    function MybusinessAccountsLocationsInsuranceNetworksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsInsuranceNetworksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListInsuranceNetworksResponse)
    ], MybusinessAccountsLocationsInsuranceNetworksListResponse.prototype, "listInsuranceNetworksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessAccountsLocationsInsuranceNetworksListResponse.prototype, "statusCode", void 0);
    return MybusinessAccountsLocationsInsuranceNetworksListResponse;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsInsuranceNetworksListResponse };
