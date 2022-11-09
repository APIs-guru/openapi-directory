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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams = /** @class */ (function (_super) {
    __extends(BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams, _super);
    function BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams.prototype, "parent", void 0);
    return BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams;
}(SpeakeasyBase));
export { BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams };
var BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams = /** @class */ (function (_super) {
    __extends(BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams, _super);
    function BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.endMonth.day" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "monthlyRangeEndMonthDay", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.endMonth.month" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "monthlyRangeEndMonthMonth", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.endMonth.year" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "monthlyRangeEndMonthYear", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.startMonth.day" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "monthlyRangeStartMonthDay", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.startMonth.month" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "monthlyRangeStartMonthMonth", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.startMonth.year" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "monthlyRangeStartMonthYear", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams.prototype, "uploadProtocol", void 0);
    return BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams;
}(SpeakeasyBase));
export { BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams };
var BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest = /** @class */ (function (_super) {
    __extends(BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest, _super);
    function BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest.prototype, "queryParams", void 0);
    return BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest;
}(SpeakeasyBase));
export { BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest };
var BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse = /** @class */ (function (_super) {
    __extends(BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse, _super);
    function BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListSearchKeywordImpressionsMonthlyResponse)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse.prototype, "listSearchKeywordImpressionsMonthlyResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse.prototype, "statusCode", void 0);
    return BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse;
}(SpeakeasyBase));
export { BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse };
