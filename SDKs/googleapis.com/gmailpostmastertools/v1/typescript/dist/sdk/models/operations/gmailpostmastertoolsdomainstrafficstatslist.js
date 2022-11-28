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
var GmailpostmastertoolsDomainsTrafficStatsListPathParams = /** @class */ (function (_super) {
    __extends(GmailpostmastertoolsDomainsTrafficStatsListPathParams, _super);
    function GmailpostmastertoolsDomainsTrafficStatsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsListPathParams.prototype, "parent", void 0);
    return GmailpostmastertoolsDomainsTrafficStatsListPathParams;
}(SpeakeasyBase));
export { GmailpostmastertoolsDomainsTrafficStatsListPathParams };
var GmailpostmastertoolsDomainsTrafficStatsListQueryParams = /** @class */ (function (_super) {
    __extends(GmailpostmastertoolsDomainsTrafficStatsListQueryParams, _super);
    function GmailpostmastertoolsDomainsTrafficStatsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.day" }),
        __metadata("design:type", Number)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "endDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.month" }),
        __metadata("design:type", Number)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "endDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.year" }),
        __metadata("design:type", Number)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "endDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.day" }),
        __metadata("design:type", Number)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "startDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.month" }),
        __metadata("design:type", Number)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "startDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.year" }),
        __metadata("design:type", Number)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "startDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsListQueryParams.prototype, "uploadProtocol", void 0);
    return GmailpostmastertoolsDomainsTrafficStatsListQueryParams;
}(SpeakeasyBase));
export { GmailpostmastertoolsDomainsTrafficStatsListQueryParams };
var GmailpostmastertoolsDomainsTrafficStatsListSecurity = /** @class */ (function (_super) {
    __extends(GmailpostmastertoolsDomainsTrafficStatsListSecurity, _super);
    function GmailpostmastertoolsDomainsTrafficStatsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailpostmastertoolsDomainsTrafficStatsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailpostmastertoolsDomainsTrafficStatsListSecurity.prototype, "oauth2c", void 0);
    return GmailpostmastertoolsDomainsTrafficStatsListSecurity;
}(SpeakeasyBase));
export { GmailpostmastertoolsDomainsTrafficStatsListSecurity };
var GmailpostmastertoolsDomainsTrafficStatsListRequest = /** @class */ (function (_super) {
    __extends(GmailpostmastertoolsDomainsTrafficStatsListRequest, _super);
    function GmailpostmastertoolsDomainsTrafficStatsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailpostmastertoolsDomainsTrafficStatsListPathParams)
    ], GmailpostmastertoolsDomainsTrafficStatsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailpostmastertoolsDomainsTrafficStatsListQueryParams)
    ], GmailpostmastertoolsDomainsTrafficStatsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailpostmastertoolsDomainsTrafficStatsListSecurity)
    ], GmailpostmastertoolsDomainsTrafficStatsListRequest.prototype, "security", void 0);
    return GmailpostmastertoolsDomainsTrafficStatsListRequest;
}(SpeakeasyBase));
export { GmailpostmastertoolsDomainsTrafficStatsListRequest };
var GmailpostmastertoolsDomainsTrafficStatsListResponse = /** @class */ (function (_super) {
    __extends(GmailpostmastertoolsDomainsTrafficStatsListResponse, _super);
    function GmailpostmastertoolsDomainsTrafficStatsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTrafficStatsResponse)
    ], GmailpostmastertoolsDomainsTrafficStatsListResponse.prototype, "listTrafficStatsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailpostmastertoolsDomainsTrafficStatsListResponse.prototype, "statusCode", void 0);
    return GmailpostmastertoolsDomainsTrafficStatsListResponse;
}(SpeakeasyBase));
export { GmailpostmastertoolsDomainsTrafficStatsListResponse };
