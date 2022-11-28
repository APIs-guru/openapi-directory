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
var MonitoringProjectsTimeSeriesListPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesListPathParams, _super);
    function MonitoringProjectsTimeSeriesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListPathParams.prototype, "name", void 0);
    return MonitoringProjectsTimeSeriesListPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesListPathParams };
export var MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum;
(function (MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum) {
    MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum["ReduceNone"] = "REDUCE_NONE";
    MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum["ReduceMean"] = "REDUCE_MEAN";
    MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum["ReduceMin"] = "REDUCE_MIN";
    MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum["ReduceMax"] = "REDUCE_MAX";
    MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum["ReduceSum"] = "REDUCE_SUM";
    MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum["ReduceStddev"] = "REDUCE_STDDEV";
    MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum["ReduceCount"] = "REDUCE_COUNT";
    MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum["ReduceCountTrue"] = "REDUCE_COUNT_TRUE";
    MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum["ReduceCountFalse"] = "REDUCE_COUNT_FALSE";
    MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum["ReduceFractionTrue"] = "REDUCE_FRACTION_TRUE";
    MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum["ReducePercentile99"] = "REDUCE_PERCENTILE_99";
    MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum["ReducePercentile95"] = "REDUCE_PERCENTILE_95";
    MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum["ReducePercentile50"] = "REDUCE_PERCENTILE_50";
    MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum["ReducePercentile05"] = "REDUCE_PERCENTILE_05";
})(MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum || (MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum = {}));
export var MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum;
(function (MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum) {
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignNone"] = "ALIGN_NONE";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignDelta"] = "ALIGN_DELTA";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignRate"] = "ALIGN_RATE";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignInterpolate"] = "ALIGN_INTERPOLATE";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignNextOlder"] = "ALIGN_NEXT_OLDER";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignMin"] = "ALIGN_MIN";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignMax"] = "ALIGN_MAX";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignMean"] = "ALIGN_MEAN";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignCount"] = "ALIGN_COUNT";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignSum"] = "ALIGN_SUM";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignStddev"] = "ALIGN_STDDEV";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignCountTrue"] = "ALIGN_COUNT_TRUE";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignCountFalse"] = "ALIGN_COUNT_FALSE";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignFractionTrue"] = "ALIGN_FRACTION_TRUE";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignPercentile99"] = "ALIGN_PERCENTILE_99";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignPercentile95"] = "ALIGN_PERCENTILE_95";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignPercentile50"] = "ALIGN_PERCENTILE_50";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignPercentile05"] = "ALIGN_PERCENTILE_05";
    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum["AlignPercentChange"] = "ALIGN_PERCENT_CHANGE";
})(MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum || (MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = {}));
export var MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum;
(function (MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum) {
    MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum["ReduceNone"] = "REDUCE_NONE";
    MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum["ReduceMean"] = "REDUCE_MEAN";
    MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum["ReduceMin"] = "REDUCE_MIN";
    MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum["ReduceMax"] = "REDUCE_MAX";
    MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum["ReduceSum"] = "REDUCE_SUM";
    MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum["ReduceStddev"] = "REDUCE_STDDEV";
    MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum["ReduceCount"] = "REDUCE_COUNT";
    MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum["ReduceCountTrue"] = "REDUCE_COUNT_TRUE";
    MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum["ReduceCountFalse"] = "REDUCE_COUNT_FALSE";
    MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum["ReduceFractionTrue"] = "REDUCE_FRACTION_TRUE";
    MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum["ReducePercentile99"] = "REDUCE_PERCENTILE_99";
    MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum["ReducePercentile95"] = "REDUCE_PERCENTILE_95";
    MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum["ReducePercentile50"] = "REDUCE_PERCENTILE_50";
    MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum["ReducePercentile05"] = "REDUCE_PERCENTILE_05";
})(MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum || (MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum = {}));
export var MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum;
(function (MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum) {
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignNone"] = "ALIGN_NONE";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignDelta"] = "ALIGN_DELTA";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignRate"] = "ALIGN_RATE";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignInterpolate"] = "ALIGN_INTERPOLATE";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignNextOlder"] = "ALIGN_NEXT_OLDER";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignMin"] = "ALIGN_MIN";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignMax"] = "ALIGN_MAX";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignMean"] = "ALIGN_MEAN";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignCount"] = "ALIGN_COUNT";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignSum"] = "ALIGN_SUM";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignStddev"] = "ALIGN_STDDEV";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignCountTrue"] = "ALIGN_COUNT_TRUE";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignCountFalse"] = "ALIGN_COUNT_FALSE";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignFractionTrue"] = "ALIGN_FRACTION_TRUE";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignPercentile99"] = "ALIGN_PERCENTILE_99";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignPercentile95"] = "ALIGN_PERCENTILE_95";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignPercentile50"] = "ALIGN_PERCENTILE_50";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignPercentile05"] = "ALIGN_PERCENTILE_05";
    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum["AlignPercentChange"] = "ALIGN_PERCENT_CHANGE";
})(MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum || (MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = {}));
export var MonitoringProjectsTimeSeriesListViewEnum;
(function (MonitoringProjectsTimeSeriesListViewEnum) {
    MonitoringProjectsTimeSeriesListViewEnum["Full"] = "FULL";
    MonitoringProjectsTimeSeriesListViewEnum["Headers"] = "HEADERS";
})(MonitoringProjectsTimeSeriesListViewEnum || (MonitoringProjectsTimeSeriesListViewEnum = {}));
var MonitoringProjectsTimeSeriesListQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesListQueryParams, _super);
    function MonitoringProjectsTimeSeriesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aggregation.alignmentPeriod" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "aggregationAlignmentPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aggregation.crossSeriesReducer" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "aggregationCrossSeriesReducer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aggregation.groupByFields" }),
        __metadata("design:type", Array)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "aggregationGroupByFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aggregation.perSeriesAligner" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "aggregationPerSeriesAligner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "intervalEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "intervalStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secondaryAggregation.alignmentPeriod" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "secondaryAggregationAlignmentPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secondaryAggregation.crossSeriesReducer" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "secondaryAggregationCrossSeriesReducer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secondaryAggregation.groupByFields" }),
        __metadata("design:type", Array)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "secondaryAggregationGroupByFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secondaryAggregation.perSeriesAligner" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "secondaryAggregationPerSeriesAligner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListQueryParams.prototype, "view", void 0);
    return MonitoringProjectsTimeSeriesListQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesListQueryParams };
var MonitoringProjectsTimeSeriesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesListSecurityOption1, _super);
    function MonitoringProjectsTimeSeriesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsTimeSeriesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsTimeSeriesListSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsTimeSeriesListSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesListSecurityOption1 };
var MonitoringProjectsTimeSeriesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesListSecurityOption2, _super);
    function MonitoringProjectsTimeSeriesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsTimeSeriesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsTimeSeriesListSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsTimeSeriesListSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesListSecurityOption2 };
var MonitoringProjectsTimeSeriesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesListSecurityOption3, _super);
    function MonitoringProjectsTimeSeriesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsTimeSeriesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsTimeSeriesListSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsTimeSeriesListSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesListSecurityOption3 };
var MonitoringProjectsTimeSeriesListSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesListSecurity, _super);
    function MonitoringProjectsTimeSeriesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsTimeSeriesListSecurityOption1)
    ], MonitoringProjectsTimeSeriesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsTimeSeriesListSecurityOption2)
    ], MonitoringProjectsTimeSeriesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsTimeSeriesListSecurityOption3)
    ], MonitoringProjectsTimeSeriesListSecurity.prototype, "option3", void 0);
    return MonitoringProjectsTimeSeriesListSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesListSecurity };
var MonitoringProjectsTimeSeriesListRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesListRequest, _super);
    function MonitoringProjectsTimeSeriesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsTimeSeriesListPathParams)
    ], MonitoringProjectsTimeSeriesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsTimeSeriesListQueryParams)
    ], MonitoringProjectsTimeSeriesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsTimeSeriesListSecurity)
    ], MonitoringProjectsTimeSeriesListRequest.prototype, "security", void 0);
    return MonitoringProjectsTimeSeriesListRequest;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesListRequest };
var MonitoringProjectsTimeSeriesListResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesListResponse, _super);
    function MonitoringProjectsTimeSeriesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTimeSeriesResponse)
    ], MonitoringProjectsTimeSeriesListResponse.prototype, "listTimeSeriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsTimeSeriesListResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsTimeSeriesListResponse;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesListResponse };
