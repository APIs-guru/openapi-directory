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
export var GetContentSourceSectionTimePeriodJsonSourceEnum;
(function (GetContentSourceSectionTimePeriodJsonSourceEnum) {
    GetContentSourceSectionTimePeriodJsonSourceEnum["All"] = "all";
    GetContentSourceSectionTimePeriodJsonSourceEnum["Nyt"] = "nyt";
    GetContentSourceSectionTimePeriodJsonSourceEnum["Iht"] = "iht";
})(GetContentSourceSectionTimePeriodJsonSourceEnum || (GetContentSourceSectionTimePeriodJsonSourceEnum = {}));
var GetContentSourceSectionTimePeriodJsonPathParams = /** @class */ (function (_super) {
    __extends(GetContentSourceSectionTimePeriodJsonPathParams, _super);
    function GetContentSourceSectionTimePeriodJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=section" }),
        __metadata("design:type", String)
    ], GetContentSourceSectionTimePeriodJsonPathParams.prototype, "section", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=source" }),
        __metadata("design:type", String)
    ], GetContentSourceSectionTimePeriodJsonPathParams.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=time-period" }),
        __metadata("design:type", Number)
    ], GetContentSourceSectionTimePeriodJsonPathParams.prototype, "timePeriod", void 0);
    return GetContentSourceSectionTimePeriodJsonPathParams;
}(SpeakeasyBase));
export { GetContentSourceSectionTimePeriodJsonPathParams };
var GetContentSourceSectionTimePeriodJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetContentSourceSectionTimePeriodJsonQueryParams, _super);
    function GetContentSourceSectionTimePeriodJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetContentSourceSectionTimePeriodJsonQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetContentSourceSectionTimePeriodJsonQueryParams.prototype, "offset", void 0);
    return GetContentSourceSectionTimePeriodJsonQueryParams;
}(SpeakeasyBase));
export { GetContentSourceSectionTimePeriodJsonQueryParams };
var GetContentSourceSectionTimePeriodJsonRequest = /** @class */ (function (_super) {
    __extends(GetContentSourceSectionTimePeriodJsonRequest, _super);
    function GetContentSourceSectionTimePeriodJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetContentSourceSectionTimePeriodJsonPathParams)
    ], GetContentSourceSectionTimePeriodJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetContentSourceSectionTimePeriodJsonQueryParams)
    ], GetContentSourceSectionTimePeriodJsonRequest.prototype, "queryParams", void 0);
    return GetContentSourceSectionTimePeriodJsonRequest;
}(SpeakeasyBase));
export { GetContentSourceSectionTimePeriodJsonRequest };
var GetContentSourceSectionTimePeriodJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetContentSourceSectionTimePeriodJson200ApplicationJson, _super);
    function GetContentSourceSectionTimePeriodJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetContentSourceSectionTimePeriodJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        Metadata({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetContentSourceSectionTimePeriodJson200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.Article }),
        __metadata("design:type", Array)
    ], GetContentSourceSectionTimePeriodJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetContentSourceSectionTimePeriodJson200ApplicationJson.prototype, "status", void 0);
    return GetContentSourceSectionTimePeriodJson200ApplicationJson;
}(SpeakeasyBase));
export { GetContentSourceSectionTimePeriodJson200ApplicationJson };
var GetContentSourceSectionTimePeriodJsonResponse = /** @class */ (function (_super) {
    __extends(GetContentSourceSectionTimePeriodJsonResponse, _super);
    function GetContentSourceSectionTimePeriodJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetContentSourceSectionTimePeriodJsonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetContentSourceSectionTimePeriodJson200ApplicationJson)
    ], GetContentSourceSectionTimePeriodJsonResponse.prototype, "getContentSourceSectionTimePeriodJson200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetContentSourceSectionTimePeriodJsonResponse.prototype, "statusCode", void 0);
    return GetContentSourceSectionTimePeriodJsonResponse;
}(SpeakeasyBase));
export { GetContentSourceSectionTimePeriodJsonResponse };
