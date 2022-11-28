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
export var GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum;
(function (GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum) {
    GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum["Json"] = "json";
    GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum["Html"] = "html";
})(GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum || (GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum = {}));
var GetTruckDistanceBetweenPairsOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetTruckDistanceBetweenPairsOutputFormatPathParams, _super);
    function GetTruckDistanceBetweenPairsOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetTruckDistanceBetweenPairsOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetTruckDistanceBetweenPairsOutputFormatPathParams;
}(SpeakeasyBase));
export { GetTruckDistanceBetweenPairsOutputFormatPathParams };
export var GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum;
(function (GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum) {
    GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum["Shortest"] = "shortest";
    GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum || (GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum = {}));
export var GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum;
(function (GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum) {
    GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum["Km"] = "km";
    GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum || (GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum = {}));
var GetTruckDistanceBetweenPairsOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetTruckDistanceBetweenPairsOutputFormatQueryParams, _super);
    function GetTruckDistanceBetweenPairsOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], GetTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], GetTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], GetTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], GetTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], GetTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromPoints" }),
        __metadata("design:type", String)
    ], GetTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "fromPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxPairs" }),
        __metadata("design:type", Number)
    ], GetTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "maxPairs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], GetTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "routeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toPoints" }),
        __metadata("design:type", String)
    ], GetTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "toPoints", void 0);
    return GetTruckDistanceBetweenPairsOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetTruckDistanceBetweenPairsOutputFormatQueryParams };
var GetTruckDistanceBetweenPairsOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetTruckDistanceBetweenPairsOutputFormatRequest, _super);
    function GetTruckDistanceBetweenPairsOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTruckDistanceBetweenPairsOutputFormatPathParams)
    ], GetTruckDistanceBetweenPairsOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTruckDistanceBetweenPairsOutputFormatQueryParams)
    ], GetTruckDistanceBetweenPairsOutputFormatRequest.prototype, "queryParams", void 0);
    return GetTruckDistanceBetweenPairsOutputFormatRequest;
}(SpeakeasyBase));
export { GetTruckDistanceBetweenPairsOutputFormatRequest };
var GetTruckDistanceBetweenPairsOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetTruckDistanceBetweenPairsOutputFormatResponse, _super);
    function GetTruckDistanceBetweenPairsOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTruckDistanceBetweenPairsOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTruckDistanceBetweenPairsOutputFormatResponse.prototype, "statusCode", void 0);
    return GetTruckDistanceBetweenPairsOutputFormatResponse;
}(SpeakeasyBase));
export { GetTruckDistanceBetweenPairsOutputFormatResponse };
