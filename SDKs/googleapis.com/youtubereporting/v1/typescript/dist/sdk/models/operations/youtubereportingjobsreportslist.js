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
var YoutubereportingJobsReportsListPathParams = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsReportsListPathParams, _super);
    function YoutubereportingJobsReportsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListPathParams.prototype, "jobId", void 0);
    return YoutubereportingJobsReportsListPathParams;
}(SpeakeasyBase));
export { YoutubereportingJobsReportsListPathParams };
var YoutubereportingJobsReportsListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsReportsListQueryParams, _super);
    function YoutubereportingJobsReportsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "createdAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTimeAtOrAfter" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "startTimeAtOrAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTimeBefore" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "startTimeBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubereportingJobsReportsListQueryParams;
}(SpeakeasyBase));
export { YoutubereportingJobsReportsListQueryParams };
var YoutubereportingJobsReportsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsReportsListSecurityOption1, _super);
    function YoutubereportingJobsReportsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubereportingJobsReportsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubereportingJobsReportsListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubereportingJobsReportsListSecurityOption1;
}(SpeakeasyBase));
export { YoutubereportingJobsReportsListSecurityOption1 };
var YoutubereportingJobsReportsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsReportsListSecurityOption2, _super);
    function YoutubereportingJobsReportsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubereportingJobsReportsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubereportingJobsReportsListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubereportingJobsReportsListSecurityOption2;
}(SpeakeasyBase));
export { YoutubereportingJobsReportsListSecurityOption2 };
var YoutubereportingJobsReportsListSecurity = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsReportsListSecurity, _super);
    function YoutubereportingJobsReportsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubereportingJobsReportsListSecurityOption1)
    ], YoutubereportingJobsReportsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubereportingJobsReportsListSecurityOption2)
    ], YoutubereportingJobsReportsListSecurity.prototype, "option2", void 0);
    return YoutubereportingJobsReportsListSecurity;
}(SpeakeasyBase));
export { YoutubereportingJobsReportsListSecurity };
var YoutubereportingJobsReportsListRequest = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsReportsListRequest, _super);
    function YoutubereportingJobsReportsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubereportingJobsReportsListPathParams)
    ], YoutubereportingJobsReportsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubereportingJobsReportsListQueryParams)
    ], YoutubereportingJobsReportsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubereportingJobsReportsListSecurity)
    ], YoutubereportingJobsReportsListRequest.prototype, "security", void 0);
    return YoutubereportingJobsReportsListRequest;
}(SpeakeasyBase));
export { YoutubereportingJobsReportsListRequest };
var YoutubereportingJobsReportsListResponse = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsReportsListResponse, _super);
    function YoutubereportingJobsReportsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListReportsResponse)
    ], YoutubereportingJobsReportsListResponse.prototype, "listReportsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubereportingJobsReportsListResponse.prototype, "statusCode", void 0);
    return YoutubereportingJobsReportsListResponse;
}(SpeakeasyBase));
export { YoutubereportingJobsReportsListResponse };
