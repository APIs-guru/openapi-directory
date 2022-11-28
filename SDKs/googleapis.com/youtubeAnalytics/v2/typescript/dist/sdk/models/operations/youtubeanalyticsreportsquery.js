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
var YoutubeAnalyticsReportsQueryQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsReportsQueryQueryParams, _super);
    function YoutubeAnalyticsReportsQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dimensions" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeHistoricalChannelData" }),
        __metadata("design:type", Boolean)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "includeHistoricalChannelData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metrics" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeAnalyticsReportsQueryQueryParams;
}(SpeakeasyBase));
export { YoutubeAnalyticsReportsQueryQueryParams };
var YoutubeAnalyticsReportsQuerySecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsReportsQuerySecurityOption1, _super);
    function YoutubeAnalyticsReportsQuerySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsReportsQuerySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsReportsQuerySecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsReportsQuerySecurityOption1;
}(SpeakeasyBase));
export { YoutubeAnalyticsReportsQuerySecurityOption1 };
var YoutubeAnalyticsReportsQuerySecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsReportsQuerySecurityOption2, _super);
    function YoutubeAnalyticsReportsQuerySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsReportsQuerySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsReportsQuerySecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsReportsQuerySecurityOption2;
}(SpeakeasyBase));
export { YoutubeAnalyticsReportsQuerySecurityOption2 };
var YoutubeAnalyticsReportsQuerySecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsReportsQuerySecurityOption3, _super);
    function YoutubeAnalyticsReportsQuerySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsReportsQuerySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsReportsQuerySecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsReportsQuerySecurityOption3;
}(SpeakeasyBase));
export { YoutubeAnalyticsReportsQuerySecurityOption3 };
var YoutubeAnalyticsReportsQuerySecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsReportsQuerySecurityOption4, _super);
    function YoutubeAnalyticsReportsQuerySecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsReportsQuerySecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsReportsQuerySecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsReportsQuerySecurityOption4;
}(SpeakeasyBase));
export { YoutubeAnalyticsReportsQuerySecurityOption4 };
var YoutubeAnalyticsReportsQuerySecurityOption5 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsReportsQuerySecurityOption5, _super);
    function YoutubeAnalyticsReportsQuerySecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsReportsQuerySecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsReportsQuerySecurityOption5.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsReportsQuerySecurityOption5;
}(SpeakeasyBase));
export { YoutubeAnalyticsReportsQuerySecurityOption5 };
var YoutubeAnalyticsReportsQuerySecurity = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsReportsQuerySecurity, _super);
    function YoutubeAnalyticsReportsQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsReportsQuerySecurityOption1)
    ], YoutubeAnalyticsReportsQuerySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsReportsQuerySecurityOption2)
    ], YoutubeAnalyticsReportsQuerySecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsReportsQuerySecurityOption3)
    ], YoutubeAnalyticsReportsQuerySecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsReportsQuerySecurityOption4)
    ], YoutubeAnalyticsReportsQuerySecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsReportsQuerySecurityOption5)
    ], YoutubeAnalyticsReportsQuerySecurity.prototype, "option5", void 0);
    return YoutubeAnalyticsReportsQuerySecurity;
}(SpeakeasyBase));
export { YoutubeAnalyticsReportsQuerySecurity };
var YoutubeAnalyticsReportsQueryRequest = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsReportsQueryRequest, _super);
    function YoutubeAnalyticsReportsQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeAnalyticsReportsQueryQueryParams)
    ], YoutubeAnalyticsReportsQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeAnalyticsReportsQuerySecurity)
    ], YoutubeAnalyticsReportsQueryRequest.prototype, "security", void 0);
    return YoutubeAnalyticsReportsQueryRequest;
}(SpeakeasyBase));
export { YoutubeAnalyticsReportsQueryRequest };
var YoutubeAnalyticsReportsQueryResponse = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsReportsQueryResponse, _super);
    function YoutubeAnalyticsReportsQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeAnalyticsReportsQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.QueryResponse)
    ], YoutubeAnalyticsReportsQueryResponse.prototype, "queryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeAnalyticsReportsQueryResponse.prototype, "statusCode", void 0);
    return YoutubeAnalyticsReportsQueryResponse;
}(SpeakeasyBase));
export { YoutubeAnalyticsReportsQueryResponse };
