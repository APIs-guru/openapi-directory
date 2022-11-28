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
export var GetStatsSeriesPeriodFieldsPeriodEnum;
(function (GetStatsSeriesPeriodFieldsPeriodEnum) {
    GetStatsSeriesPeriodFieldsPeriodEnum["Day"] = "day";
    GetStatsSeriesPeriodFieldsPeriodEnum["Month"] = "month";
})(GetStatsSeriesPeriodFieldsPeriodEnum || (GetStatsSeriesPeriodFieldsPeriodEnum = {}));
var GetStatsSeriesPeriodFieldsPathParams = /** @class */ (function (_super) {
    __extends(GetStatsSeriesPeriodFieldsPathParams, _super);
    function GetStatsSeriesPeriodFieldsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fields" }),
        __metadata("design:type", String)
    ], GetStatsSeriesPeriodFieldsPathParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=period" }),
        __metadata("design:type", String)
    ], GetStatsSeriesPeriodFieldsPathParams.prototype, "period", void 0);
    return GetStatsSeriesPeriodFieldsPathParams;
}(SpeakeasyBase));
export { GetStatsSeriesPeriodFieldsPathParams };
var GetStatsSeriesPeriodFieldsQueryParams = /** @class */ (function (_super) {
    __extends(GetStatsSeriesPeriodFieldsQueryParams, _super);
    function GetStatsSeriesPeriodFieldsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", Number)
    ], GetStatsSeriesPeriodFieldsQueryParams.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetStatsSeriesPeriodFieldsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetStatsSeriesPeriodFieldsQueryParams.prototype, "start", void 0);
    return GetStatsSeriesPeriodFieldsQueryParams;
}(SpeakeasyBase));
export { GetStatsSeriesPeriodFieldsQueryParams };
var GetStatsSeriesPeriodFieldsRequest = /** @class */ (function (_super) {
    __extends(GetStatsSeriesPeriodFieldsRequest, _super);
    function GetStatsSeriesPeriodFieldsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStatsSeriesPeriodFieldsPathParams)
    ], GetStatsSeriesPeriodFieldsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStatsSeriesPeriodFieldsQueryParams)
    ], GetStatsSeriesPeriodFieldsRequest.prototype, "queryParams", void 0);
    return GetStatsSeriesPeriodFieldsRequest;
}(SpeakeasyBase));
export { GetStatsSeriesPeriodFieldsRequest };
var GetStatsSeriesPeriodFieldsResponse = /** @class */ (function (_super) {
    __extends(GetStatsSeriesPeriodFieldsResponse, _super);
    function GetStatsSeriesPeriodFieldsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetStatsSeriesPeriodFieldsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetStatsSeriesPeriodFieldsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetStatsSeriesPeriodFieldsResponse.prototype, "statusCode", void 0);
    return GetStatsSeriesPeriodFieldsResponse;
}(SpeakeasyBase));
export { GetStatsSeriesPeriodFieldsResponse };
