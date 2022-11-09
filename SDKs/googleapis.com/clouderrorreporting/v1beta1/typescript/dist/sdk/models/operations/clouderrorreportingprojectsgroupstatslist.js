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
var ClouderrorreportingProjectsGroupStatsListPathParams = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsGroupStatsListPathParams, _super);
    function ClouderrorreportingProjectsGroupStatsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListPathParams.prototype, "projectName", void 0);
    return ClouderrorreportingProjectsGroupStatsListPathParams;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsGroupStatsListPathParams };
export var ClouderrorreportingProjectsGroupStatsListAlignmentEnum;
(function (ClouderrorreportingProjectsGroupStatsListAlignmentEnum) {
    ClouderrorreportingProjectsGroupStatsListAlignmentEnum["ErrorCountAlignmentUnspecified"] = "ERROR_COUNT_ALIGNMENT_UNSPECIFIED";
    ClouderrorreportingProjectsGroupStatsListAlignmentEnum["AlignmentEqualRounded"] = "ALIGNMENT_EQUAL_ROUNDED";
    ClouderrorreportingProjectsGroupStatsListAlignmentEnum["AlignmentEqualAtEnd"] = "ALIGNMENT_EQUAL_AT_END";
})(ClouderrorreportingProjectsGroupStatsListAlignmentEnum || (ClouderrorreportingProjectsGroupStatsListAlignmentEnum = {}));
export var ClouderrorreportingProjectsGroupStatsListOrderEnum;
(function (ClouderrorreportingProjectsGroupStatsListOrderEnum) {
    ClouderrorreportingProjectsGroupStatsListOrderEnum["GroupOrderUnspecified"] = "GROUP_ORDER_UNSPECIFIED";
    ClouderrorreportingProjectsGroupStatsListOrderEnum["CountDesc"] = "COUNT_DESC";
    ClouderrorreportingProjectsGroupStatsListOrderEnum["LastSeenDesc"] = "LAST_SEEN_DESC";
    ClouderrorreportingProjectsGroupStatsListOrderEnum["CreatedDesc"] = "CREATED_DESC";
    ClouderrorreportingProjectsGroupStatsListOrderEnum["AffectedUsersDesc"] = "AFFECTED_USERS_DESC";
})(ClouderrorreportingProjectsGroupStatsListOrderEnum || (ClouderrorreportingProjectsGroupStatsListOrderEnum = {}));
export var ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum;
(function (ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum) {
    ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum["PeriodUnspecified"] = "PERIOD_UNSPECIFIED";
    ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum["Period1Hour"] = "PERIOD_1_HOUR";
    ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum["Period6Hours"] = "PERIOD_6_HOURS";
    ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum["Period1Day"] = "PERIOD_1_DAY";
    ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum["Period1Week"] = "PERIOD_1_WEEK";
    ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum["Period30Days"] = "PERIOD_30_DAYS";
})(ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum || (ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum = {}));
var ClouderrorreportingProjectsGroupStatsListQueryParams = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsGroupStatsListQueryParams, _super);
    function ClouderrorreportingProjectsGroupStatsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alignment" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "alignment", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alignmentTime" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "alignmentTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=groupId" }),
        __metadata("design:type", Array)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "groupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "order", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=serviceFilter.resourceType" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "serviceFilterResourceType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=serviceFilter.service" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "serviceFilterService", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=serviceFilter.version" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "serviceFilterVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeRange.period" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "timeRangePeriod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timedCountDuration" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "timedCountDuration", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListQueryParams.prototype, "uploadProtocol", void 0);
    return ClouderrorreportingProjectsGroupStatsListQueryParams;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsGroupStatsListQueryParams };
var ClouderrorreportingProjectsGroupStatsListSecurity = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsGroupStatsListSecurity, _super);
    function ClouderrorreportingProjectsGroupStatsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouderrorreportingProjectsGroupStatsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouderrorreportingProjectsGroupStatsListSecurity.prototype, "oauth2c", void 0);
    return ClouderrorreportingProjectsGroupStatsListSecurity;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsGroupStatsListSecurity };
var ClouderrorreportingProjectsGroupStatsListRequest = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsGroupStatsListRequest, _super);
    function ClouderrorreportingProjectsGroupStatsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClouderrorreportingProjectsGroupStatsListPathParams)
    ], ClouderrorreportingProjectsGroupStatsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClouderrorreportingProjectsGroupStatsListQueryParams)
    ], ClouderrorreportingProjectsGroupStatsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClouderrorreportingProjectsGroupStatsListSecurity)
    ], ClouderrorreportingProjectsGroupStatsListRequest.prototype, "security", void 0);
    return ClouderrorreportingProjectsGroupStatsListRequest;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsGroupStatsListRequest };
var ClouderrorreportingProjectsGroupStatsListResponse = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsGroupStatsListResponse, _super);
    function ClouderrorreportingProjectsGroupStatsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupStatsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListGroupStatsResponse)
    ], ClouderrorreportingProjectsGroupStatsListResponse.prototype, "listGroupStatsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClouderrorreportingProjectsGroupStatsListResponse.prototype, "statusCode", void 0);
    return ClouderrorreportingProjectsGroupStatsListResponse;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsGroupStatsListResponse };
