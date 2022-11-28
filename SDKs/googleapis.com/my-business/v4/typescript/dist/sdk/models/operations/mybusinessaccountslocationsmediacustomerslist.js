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
var MybusinessAccountsLocationsMediaCustomersListPathParams = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsMediaCustomersListPathParams, _super);
    function MybusinessAccountsLocationsMediaCustomersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsMediaCustomersListPathParams.prototype, "parent", void 0);
    return MybusinessAccountsLocationsMediaCustomersListPathParams;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsMediaCustomersListPathParams };
var MybusinessAccountsLocationsMediaCustomersListQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsMediaCustomersListQueryParams, _super);
    function MybusinessAccountsLocationsMediaCustomersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsMediaCustomersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsMediaCustomersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsMediaCustomersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsMediaCustomersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsMediaCustomersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsMediaCustomersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsMediaCustomersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MybusinessAccountsLocationsMediaCustomersListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsMediaCustomersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessAccountsLocationsMediaCustomersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsMediaCustomersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsMediaCustomersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsMediaCustomersListQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessAccountsLocationsMediaCustomersListQueryParams;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsMediaCustomersListQueryParams };
var MybusinessAccountsLocationsMediaCustomersListRequest = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsMediaCustomersListRequest, _super);
    function MybusinessAccountsLocationsMediaCustomersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessAccountsLocationsMediaCustomersListPathParams)
    ], MybusinessAccountsLocationsMediaCustomersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessAccountsLocationsMediaCustomersListQueryParams)
    ], MybusinessAccountsLocationsMediaCustomersListRequest.prototype, "queryParams", void 0);
    return MybusinessAccountsLocationsMediaCustomersListRequest;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsMediaCustomersListRequest };
var MybusinessAccountsLocationsMediaCustomersListResponse = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsMediaCustomersListResponse, _super);
    function MybusinessAccountsLocationsMediaCustomersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsMediaCustomersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCustomerMediaItemsResponse)
    ], MybusinessAccountsLocationsMediaCustomersListResponse.prototype, "listCustomerMediaItemsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessAccountsLocationsMediaCustomersListResponse.prototype, "statusCode", void 0);
    return MybusinessAccountsLocationsMediaCustomersListResponse;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsMediaCustomersListResponse };
