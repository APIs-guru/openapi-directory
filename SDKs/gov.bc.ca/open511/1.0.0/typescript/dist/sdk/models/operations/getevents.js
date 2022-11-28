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
export var GetEventsEventTypeEnum;
(function (GetEventsEventTypeEnum) {
    GetEventsEventTypeEnum["Construction"] = "CONSTRUCTION";
    GetEventsEventTypeEnum["SpecialEvent"] = "SPECIAL_EVENT";
    GetEventsEventTypeEnum["Incident"] = "INCIDENT";
    GetEventsEventTypeEnum["WeatherCondition"] = "WEATHER_CONDITION";
    GetEventsEventTypeEnum["RoadCondition"] = "ROAD_CONDITION";
})(GetEventsEventTypeEnum || (GetEventsEventTypeEnum = {}));
export var GetEventsFormatEnum;
(function (GetEventsFormatEnum) {
    GetEventsFormatEnum["Json"] = "json";
    GetEventsFormatEnum["Xml"] = "xml";
})(GetEventsFormatEnum || (GetEventsFormatEnum = {}));
export var GetEventsStatusEnum;
(function (GetEventsStatusEnum) {
    GetEventsStatusEnum["All"] = "ALL";
    GetEventsStatusEnum["Active"] = "ACTIVE";
    GetEventsStatusEnum["Archived"] = "ARCHIVED";
})(GetEventsStatusEnum || (GetEventsStatusEnum = {}));
var GetEventsQueryParams = /** @class */ (function (_super) {
    __extends(GetEventsQueryParams, _super);
    function GetEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=area_id" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "areaId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bbox" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "bbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event_type" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "jurisdiction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=road_name" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "roadName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=severity" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "updated", void 0);
    return GetEventsQueryParams;
}(SpeakeasyBase));
export { GetEventsQueryParams };
var GetEventsRequest = /** @class */ (function (_super) {
    __extends(GetEventsRequest, _super);
    function GetEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventsQueryParams)
    ], GetEventsRequest.prototype, "queryParams", void 0);
    return GetEventsRequest;
}(SpeakeasyBase));
export { GetEventsRequest };
var GetEventsResponse = /** @class */ (function (_super) {
    __extends(GetEventsResponse, _super);
    function GetEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventsResponse.prototype, "statusCode", void 0);
    return GetEventsResponse;
}(SpeakeasyBase));
export { GetEventsResponse };
