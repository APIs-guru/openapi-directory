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
var MybusinessAccountsLocationsAdminsListPathParams = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsAdminsListPathParams, _super);
    function MybusinessAccountsLocationsAdminsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsAdminsListPathParams.prototype, "parent", void 0);
    return MybusinessAccountsLocationsAdminsListPathParams;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsAdminsListPathParams };
var MybusinessAccountsLocationsAdminsListQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsAdminsListQueryParams, _super);
    function MybusinessAccountsLocationsAdminsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsAdminsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsAdminsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsAdminsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsAdminsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsAdminsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsAdminsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsAdminsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessAccountsLocationsAdminsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsAdminsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsAdminsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsAdminsListQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessAccountsLocationsAdminsListQueryParams;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsAdminsListQueryParams };
var MybusinessAccountsLocationsAdminsListRequest = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsAdminsListRequest, _super);
    function MybusinessAccountsLocationsAdminsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessAccountsLocationsAdminsListPathParams)
    ], MybusinessAccountsLocationsAdminsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessAccountsLocationsAdminsListQueryParams)
    ], MybusinessAccountsLocationsAdminsListRequest.prototype, "queryParams", void 0);
    return MybusinessAccountsLocationsAdminsListRequest;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsAdminsListRequest };
var MybusinessAccountsLocationsAdminsListResponse = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsAdminsListResponse, _super);
    function MybusinessAccountsLocationsAdminsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsAdminsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListLocationAdminsResponse)
    ], MybusinessAccountsLocationsAdminsListResponse.prototype, "listLocationAdminsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessAccountsLocationsAdminsListResponse.prototype, "statusCode", void 0);
    return MybusinessAccountsLocationsAdminsListResponse;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsAdminsListResponse };
