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
export var GetOptimalDirectionsOutputFormatOutputFormatEnum;
(function (GetOptimalDirectionsOutputFormatOutputFormatEnum) {
    GetOptimalDirectionsOutputFormatOutputFormatEnum["Json"] = "json";
    GetOptimalDirectionsOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetOptimalDirectionsOutputFormatOutputFormatEnum["Html"] = "html";
})(GetOptimalDirectionsOutputFormatOutputFormatEnum || (GetOptimalDirectionsOutputFormatOutputFormatEnum = {}));
var GetOptimalDirectionsOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetOptimalDirectionsOutputFormatPathParams, _super);
    function GetOptimalDirectionsOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetOptimalDirectionsOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetOptimalDirectionsOutputFormatPathParams;
}(SpeakeasyBase));
export { GetOptimalDirectionsOutputFormatPathParams };
export var GetOptimalDirectionsOutputFormatCriteriaEnum;
(function (GetOptimalDirectionsOutputFormatCriteriaEnum) {
    GetOptimalDirectionsOutputFormatCriteriaEnum["Shortest"] = "shortest";
    GetOptimalDirectionsOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(GetOptimalDirectionsOutputFormatCriteriaEnum || (GetOptimalDirectionsOutputFormatCriteriaEnum = {}));
export var GetOptimalDirectionsOutputFormatDistanceUnitEnum;
(function (GetOptimalDirectionsOutputFormatDistanceUnitEnum) {
    GetOptimalDirectionsOutputFormatDistanceUnitEnum["Km"] = "km";
    GetOptimalDirectionsOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(GetOptimalDirectionsOutputFormatDistanceUnitEnum || (GetOptimalDirectionsOutputFormatDistanceUnitEnum = {}));
var GetOptimalDirectionsOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetOptimalDirectionsOutputFormatQueryParams, _super);
    function GetOptimalDirectionsOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], GetOptimalDirectionsOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], GetOptimalDirectionsOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], GetOptimalDirectionsOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], GetOptimalDirectionsOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], GetOptimalDirectionsOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetOptimalDirectionsOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], GetOptimalDirectionsOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], GetOptimalDirectionsOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], GetOptimalDirectionsOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return GetOptimalDirectionsOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetOptimalDirectionsOutputFormatQueryParams };
var GetOptimalDirectionsOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetOptimalDirectionsOutputFormatRequest, _super);
    function GetOptimalDirectionsOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOptimalDirectionsOutputFormatPathParams)
    ], GetOptimalDirectionsOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOptimalDirectionsOutputFormatQueryParams)
    ], GetOptimalDirectionsOutputFormatRequest.prototype, "queryParams", void 0);
    return GetOptimalDirectionsOutputFormatRequest;
}(SpeakeasyBase));
export { GetOptimalDirectionsOutputFormatRequest };
var GetOptimalDirectionsOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetOptimalDirectionsOutputFormatResponse, _super);
    function GetOptimalDirectionsOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOptimalDirectionsOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOptimalDirectionsOutputFormatResponse.prototype, "statusCode", void 0);
    return GetOptimalDirectionsOutputFormatResponse;
}(SpeakeasyBase));
export { GetOptimalDirectionsOutputFormatResponse };
