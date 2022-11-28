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
export var GetTruckRouteOutputFormatOutputFormatEnum;
(function (GetTruckRouteOutputFormatOutputFormatEnum) {
    GetTruckRouteOutputFormatOutputFormatEnum["Json"] = "json";
    GetTruckRouteOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetTruckRouteOutputFormatOutputFormatEnum["Html"] = "html";
})(GetTruckRouteOutputFormatOutputFormatEnum || (GetTruckRouteOutputFormatOutputFormatEnum = {}));
var GetTruckRouteOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetTruckRouteOutputFormatPathParams, _super);
    function GetTruckRouteOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetTruckRouteOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetTruckRouteOutputFormatPathParams;
}(SpeakeasyBase));
export { GetTruckRouteOutputFormatPathParams };
export var GetTruckRouteOutputFormatCriteriaEnum;
(function (GetTruckRouteOutputFormatCriteriaEnum) {
    GetTruckRouteOutputFormatCriteriaEnum["Shortest"] = "shortest";
    GetTruckRouteOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(GetTruckRouteOutputFormatCriteriaEnum || (GetTruckRouteOutputFormatCriteriaEnum = {}));
export var GetTruckRouteOutputFormatDistanceUnitEnum;
(function (GetTruckRouteOutputFormatDistanceUnitEnum) {
    GetTruckRouteOutputFormatDistanceUnitEnum["Km"] = "km";
    GetTruckRouteOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(GetTruckRouteOutputFormatDistanceUnitEnum || (GetTruckRouteOutputFormatDistanceUnitEnum = {}));
var GetTruckRouteOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetTruckRouteOutputFormatQueryParams, _super);
    function GetTruckRouteOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], GetTruckRouteOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], GetTruckRouteOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], GetTruckRouteOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], GetTruckRouteOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], GetTruckRouteOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetTruckRouteOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], GetTruckRouteOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], GetTruckRouteOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], GetTruckRouteOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return GetTruckRouteOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetTruckRouteOutputFormatQueryParams };
var GetTruckRouteOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetTruckRouteOutputFormatRequest, _super);
    function GetTruckRouteOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTruckRouteOutputFormatPathParams)
    ], GetTruckRouteOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTruckRouteOutputFormatQueryParams)
    ], GetTruckRouteOutputFormatRequest.prototype, "queryParams", void 0);
    return GetTruckRouteOutputFormatRequest;
}(SpeakeasyBase));
export { GetTruckRouteOutputFormatRequest };
var GetTruckRouteOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetTruckRouteOutputFormatResponse, _super);
    function GetTruckRouteOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTruckRouteOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTruckRouteOutputFormatResponse.prototype, "statusCode", void 0);
    return GetTruckRouteOutputFormatResponse;
}(SpeakeasyBase));
export { GetTruckRouteOutputFormatResponse };
