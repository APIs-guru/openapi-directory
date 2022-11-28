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
export var GetTruckDistanceOutputFormatOutputFormatEnum;
(function (GetTruckDistanceOutputFormatOutputFormatEnum) {
    GetTruckDistanceOutputFormatOutputFormatEnum["Json"] = "json";
    GetTruckDistanceOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetTruckDistanceOutputFormatOutputFormatEnum["Html"] = "html";
})(GetTruckDistanceOutputFormatOutputFormatEnum || (GetTruckDistanceOutputFormatOutputFormatEnum = {}));
var GetTruckDistanceOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetTruckDistanceOutputFormatPathParams, _super);
    function GetTruckDistanceOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetTruckDistanceOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetTruckDistanceOutputFormatPathParams;
}(SpeakeasyBase));
export { GetTruckDistanceOutputFormatPathParams };
export var GetTruckDistanceOutputFormatCriteriaEnum;
(function (GetTruckDistanceOutputFormatCriteriaEnum) {
    GetTruckDistanceOutputFormatCriteriaEnum["Shortest"] = "shortest";
    GetTruckDistanceOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(GetTruckDistanceOutputFormatCriteriaEnum || (GetTruckDistanceOutputFormatCriteriaEnum = {}));
export var GetTruckDistanceOutputFormatDistanceUnitEnum;
(function (GetTruckDistanceOutputFormatDistanceUnitEnum) {
    GetTruckDistanceOutputFormatDistanceUnitEnum["Km"] = "km";
    GetTruckDistanceOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(GetTruckDistanceOutputFormatDistanceUnitEnum || (GetTruckDistanceOutputFormatDistanceUnitEnum = {}));
var GetTruckDistanceOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetTruckDistanceOutputFormatQueryParams, _super);
    function GetTruckDistanceOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], GetTruckDistanceOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], GetTruckDistanceOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], GetTruckDistanceOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], GetTruckDistanceOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], GetTruckDistanceOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetTruckDistanceOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], GetTruckDistanceOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], GetTruckDistanceOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], GetTruckDistanceOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return GetTruckDistanceOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetTruckDistanceOutputFormatQueryParams };
var GetTruckDistanceOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetTruckDistanceOutputFormatRequest, _super);
    function GetTruckDistanceOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTruckDistanceOutputFormatPathParams)
    ], GetTruckDistanceOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTruckDistanceOutputFormatQueryParams)
    ], GetTruckDistanceOutputFormatRequest.prototype, "queryParams", void 0);
    return GetTruckDistanceOutputFormatRequest;
}(SpeakeasyBase));
export { GetTruckDistanceOutputFormatRequest };
var GetTruckDistanceOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetTruckDistanceOutputFormatResponse, _super);
    function GetTruckDistanceOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTruckDistanceOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTruckDistanceOutputFormatResponse.prototype, "statusCode", void 0);
    return GetTruckDistanceOutputFormatResponse;
}(SpeakeasyBase));
export { GetTruckDistanceOutputFormatResponse };
