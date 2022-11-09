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
var LocalservicesDetailedLeadReportsSearchQueryParams = /** @class */ (function (_super) {
    __extends(LocalservicesDetailedLeadReportsSearchQueryParams, _super);
    function LocalservicesDetailedLeadReportsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endDate.day" }),
        __metadata("design:type", Number)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "endDateDay", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endDate.month" }),
        __metadata("design:type", Number)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "endDateMonth", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endDate.year" }),
        __metadata("design:type", Number)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "endDateYear", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "query", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startDate.day" }),
        __metadata("design:type", Number)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "startDateDay", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startDate.month" }),
        __metadata("design:type", Number)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "startDateMonth", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startDate.year" }),
        __metadata("design:type", Number)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "startDateYear", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LocalservicesDetailedLeadReportsSearchQueryParams.prototype, "uploadProtocol", void 0);
    return LocalservicesDetailedLeadReportsSearchQueryParams;
}(SpeakeasyBase));
export { LocalservicesDetailedLeadReportsSearchQueryParams };
var LocalservicesDetailedLeadReportsSearchSecurity = /** @class */ (function (_super) {
    __extends(LocalservicesDetailedLeadReportsSearchSecurity, _super);
    function LocalservicesDetailedLeadReportsSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LocalservicesDetailedLeadReportsSearchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LocalservicesDetailedLeadReportsSearchSecurity.prototype, "oauth2c", void 0);
    return LocalservicesDetailedLeadReportsSearchSecurity;
}(SpeakeasyBase));
export { LocalservicesDetailedLeadReportsSearchSecurity };
var LocalservicesDetailedLeadReportsSearchRequest = /** @class */ (function (_super) {
    __extends(LocalservicesDetailedLeadReportsSearchRequest, _super);
    function LocalservicesDetailedLeadReportsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LocalservicesDetailedLeadReportsSearchQueryParams)
    ], LocalservicesDetailedLeadReportsSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LocalservicesDetailedLeadReportsSearchSecurity)
    ], LocalservicesDetailedLeadReportsSearchRequest.prototype, "security", void 0);
    return LocalservicesDetailedLeadReportsSearchRequest;
}(SpeakeasyBase));
export { LocalservicesDetailedLeadReportsSearchRequest };
var LocalservicesDetailedLeadReportsSearchResponse = /** @class */ (function (_super) {
    __extends(LocalservicesDetailedLeadReportsSearchResponse, _super);
    function LocalservicesDetailedLeadReportsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LocalservicesDetailedLeadReportsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse)
    ], LocalservicesDetailedLeadReportsSearchResponse.prototype, "googleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LocalservicesDetailedLeadReportsSearchResponse.prototype, "statusCode", void 0);
    return LocalservicesDetailedLeadReportsSearchResponse;
}(SpeakeasyBase));
export { LocalservicesDetailedLeadReportsSearchResponse };
