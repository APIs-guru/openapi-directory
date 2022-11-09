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
var LocalservicesAccountReportsSearchQueryParams = /** @class */ (function (_super) {
    __extends(LocalservicesAccountReportsSearchQueryParams, _super);
    function LocalservicesAccountReportsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endDate.day" }),
        __metadata("design:type", Number)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "endDateDay", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endDate.month" }),
        __metadata("design:type", Number)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "endDateMonth", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endDate.year" }),
        __metadata("design:type", Number)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "endDateYear", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "query", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startDate.day" }),
        __metadata("design:type", Number)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "startDateDay", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startDate.month" }),
        __metadata("design:type", Number)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "startDateMonth", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startDate.year" }),
        __metadata("design:type", Number)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "startDateYear", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LocalservicesAccountReportsSearchQueryParams.prototype, "uploadProtocol", void 0);
    return LocalservicesAccountReportsSearchQueryParams;
}(SpeakeasyBase));
export { LocalservicesAccountReportsSearchQueryParams };
var LocalservicesAccountReportsSearchSecurity = /** @class */ (function (_super) {
    __extends(LocalservicesAccountReportsSearchSecurity, _super);
    function LocalservicesAccountReportsSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LocalservicesAccountReportsSearchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LocalservicesAccountReportsSearchSecurity.prototype, "oauth2c", void 0);
    return LocalservicesAccountReportsSearchSecurity;
}(SpeakeasyBase));
export { LocalservicesAccountReportsSearchSecurity };
var LocalservicesAccountReportsSearchRequest = /** @class */ (function (_super) {
    __extends(LocalservicesAccountReportsSearchRequest, _super);
    function LocalservicesAccountReportsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LocalservicesAccountReportsSearchQueryParams)
    ], LocalservicesAccountReportsSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LocalservicesAccountReportsSearchSecurity)
    ], LocalservicesAccountReportsSearchRequest.prototype, "security", void 0);
    return LocalservicesAccountReportsSearchRequest;
}(SpeakeasyBase));
export { LocalservicesAccountReportsSearchRequest };
var LocalservicesAccountReportsSearchResponse = /** @class */ (function (_super) {
    __extends(LocalservicesAccountReportsSearchResponse, _super);
    function LocalservicesAccountReportsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LocalservicesAccountReportsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse)
    ], LocalservicesAccountReportsSearchResponse.prototype, "googleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LocalservicesAccountReportsSearchResponse.prototype, "statusCode", void 0);
    return LocalservicesAccountReportsSearchResponse;
}(SpeakeasyBase));
export { LocalservicesAccountReportsSearchResponse };
