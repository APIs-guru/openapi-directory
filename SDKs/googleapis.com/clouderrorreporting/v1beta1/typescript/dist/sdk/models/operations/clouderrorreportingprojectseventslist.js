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
var ClouderrorreportingProjectsEventsListPathParams = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsEventsListPathParams, _super);
    function ClouderrorreportingProjectsEventsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListPathParams.prototype, "projectName", void 0);
    return ClouderrorreportingProjectsEventsListPathParams;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsEventsListPathParams };
export var ClouderrorreportingProjectsEventsListTimeRangePeriodEnum;
(function (ClouderrorreportingProjectsEventsListTimeRangePeriodEnum) {
    ClouderrorreportingProjectsEventsListTimeRangePeriodEnum["PeriodUnspecified"] = "PERIOD_UNSPECIFIED";
    ClouderrorreportingProjectsEventsListTimeRangePeriodEnum["Period1Hour"] = "PERIOD_1_HOUR";
    ClouderrorreportingProjectsEventsListTimeRangePeriodEnum["Period6Hours"] = "PERIOD_6_HOURS";
    ClouderrorreportingProjectsEventsListTimeRangePeriodEnum["Period1Day"] = "PERIOD_1_DAY";
    ClouderrorreportingProjectsEventsListTimeRangePeriodEnum["Period1Week"] = "PERIOD_1_WEEK";
    ClouderrorreportingProjectsEventsListTimeRangePeriodEnum["Period30Days"] = "PERIOD_30_DAYS";
})(ClouderrorreportingProjectsEventsListTimeRangePeriodEnum || (ClouderrorreportingProjectsEventsListTimeRangePeriodEnum = {}));
var ClouderrorreportingProjectsEventsListQueryParams = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsEventsListQueryParams, _super);
    function ClouderrorreportingProjectsEventsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=groupId" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "groupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=serviceFilter.resourceType" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "serviceFilterResourceType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=serviceFilter.service" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "serviceFilterService", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=serviceFilter.version" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "serviceFilterVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeRange.period" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "timeRangePeriod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListQueryParams.prototype, "uploadProtocol", void 0);
    return ClouderrorreportingProjectsEventsListQueryParams;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsEventsListQueryParams };
var ClouderrorreportingProjectsEventsListSecurity = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsEventsListSecurity, _super);
    function ClouderrorreportingProjectsEventsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouderrorreportingProjectsEventsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouderrorreportingProjectsEventsListSecurity.prototype, "oauth2c", void 0);
    return ClouderrorreportingProjectsEventsListSecurity;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsEventsListSecurity };
var ClouderrorreportingProjectsEventsListRequest = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsEventsListRequest, _super);
    function ClouderrorreportingProjectsEventsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClouderrorreportingProjectsEventsListPathParams)
    ], ClouderrorreportingProjectsEventsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClouderrorreportingProjectsEventsListQueryParams)
    ], ClouderrorreportingProjectsEventsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClouderrorreportingProjectsEventsListSecurity)
    ], ClouderrorreportingProjectsEventsListRequest.prototype, "security", void 0);
    return ClouderrorreportingProjectsEventsListRequest;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsEventsListRequest };
var ClouderrorreportingProjectsEventsListResponse = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsEventsListResponse, _super);
    function ClouderrorreportingProjectsEventsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListEventsResponse)
    ], ClouderrorreportingProjectsEventsListResponse.prototype, "listEventsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClouderrorreportingProjectsEventsListResponse.prototype, "statusCode", void 0);
    return ClouderrorreportingProjectsEventsListResponse;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsEventsListResponse };
