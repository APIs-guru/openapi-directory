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
export var GetTruckOptimalDirectionsOutputFormatOutputFormatEnum;
(function (GetTruckOptimalDirectionsOutputFormatOutputFormatEnum) {
    GetTruckOptimalDirectionsOutputFormatOutputFormatEnum["Json"] = "json";
    GetTruckOptimalDirectionsOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetTruckOptimalDirectionsOutputFormatOutputFormatEnum["Html"] = "html";
})(GetTruckOptimalDirectionsOutputFormatOutputFormatEnum || (GetTruckOptimalDirectionsOutputFormatOutputFormatEnum = {}));
var GetTruckOptimalDirectionsOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetTruckOptimalDirectionsOutputFormatPathParams, _super);
    function GetTruckOptimalDirectionsOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetTruckOptimalDirectionsOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetTruckOptimalDirectionsOutputFormatPathParams;
}(SpeakeasyBase));
export { GetTruckOptimalDirectionsOutputFormatPathParams };
export var GetTruckOptimalDirectionsOutputFormatCriteriaEnum;
(function (GetTruckOptimalDirectionsOutputFormatCriteriaEnum) {
    GetTruckOptimalDirectionsOutputFormatCriteriaEnum["Shortest"] = "shortest";
    GetTruckOptimalDirectionsOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(GetTruckOptimalDirectionsOutputFormatCriteriaEnum || (GetTruckOptimalDirectionsOutputFormatCriteriaEnum = {}));
export var GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum;
(function (GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum) {
    GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum["Km"] = "km";
    GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum || (GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum = {}));
var GetTruckOptimalDirectionsOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetTruckOptimalDirectionsOutputFormatQueryParams, _super);
    function GetTruckOptimalDirectionsOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], GetTruckOptimalDirectionsOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], GetTruckOptimalDirectionsOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], GetTruckOptimalDirectionsOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], GetTruckOptimalDirectionsOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], GetTruckOptimalDirectionsOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetTruckOptimalDirectionsOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], GetTruckOptimalDirectionsOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], GetTruckOptimalDirectionsOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], GetTruckOptimalDirectionsOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return GetTruckOptimalDirectionsOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetTruckOptimalDirectionsOutputFormatQueryParams };
var GetTruckOptimalDirectionsOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetTruckOptimalDirectionsOutputFormatRequest, _super);
    function GetTruckOptimalDirectionsOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTruckOptimalDirectionsOutputFormatPathParams)
    ], GetTruckOptimalDirectionsOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTruckOptimalDirectionsOutputFormatQueryParams)
    ], GetTruckOptimalDirectionsOutputFormatRequest.prototype, "queryParams", void 0);
    return GetTruckOptimalDirectionsOutputFormatRequest;
}(SpeakeasyBase));
export { GetTruckOptimalDirectionsOutputFormatRequest };
var GetTruckOptimalDirectionsOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetTruckOptimalDirectionsOutputFormatResponse, _super);
    function GetTruckOptimalDirectionsOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTruckOptimalDirectionsOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTruckOptimalDirectionsOutputFormatResponse.prototype, "statusCode", void 0);
    return GetTruckOptimalDirectionsOutputFormatResponse;
}(SpeakeasyBase));
export { GetTruckOptimalDirectionsOutputFormatResponse };
