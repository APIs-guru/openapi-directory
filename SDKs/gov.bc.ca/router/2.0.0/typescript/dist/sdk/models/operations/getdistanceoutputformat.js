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
export var GetDistanceOutputFormatOutputFormatEnum;
(function (GetDistanceOutputFormatOutputFormatEnum) {
    GetDistanceOutputFormatOutputFormatEnum["Json"] = "json";
    GetDistanceOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetDistanceOutputFormatOutputFormatEnum["Html"] = "html";
})(GetDistanceOutputFormatOutputFormatEnum || (GetDistanceOutputFormatOutputFormatEnum = {}));
var GetDistanceOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetDistanceOutputFormatPathParams, _super);
    function GetDistanceOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetDistanceOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetDistanceOutputFormatPathParams;
}(SpeakeasyBase));
export { GetDistanceOutputFormatPathParams };
export var GetDistanceOutputFormatCriteriaEnum;
(function (GetDistanceOutputFormatCriteriaEnum) {
    GetDistanceOutputFormatCriteriaEnum["Shortest"] = "shortest";
    GetDistanceOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(GetDistanceOutputFormatCriteriaEnum || (GetDistanceOutputFormatCriteriaEnum = {}));
export var GetDistanceOutputFormatDistanceUnitEnum;
(function (GetDistanceOutputFormatDistanceUnitEnum) {
    GetDistanceOutputFormatDistanceUnitEnum["Km"] = "km";
    GetDistanceOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(GetDistanceOutputFormatDistanceUnitEnum || (GetDistanceOutputFormatDistanceUnitEnum = {}));
var GetDistanceOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetDistanceOutputFormatQueryParams, _super);
    function GetDistanceOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], GetDistanceOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], GetDistanceOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], GetDistanceOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], GetDistanceOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], GetDistanceOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetDistanceOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], GetDistanceOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], GetDistanceOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], GetDistanceOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return GetDistanceOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetDistanceOutputFormatQueryParams };
var GetDistanceOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetDistanceOutputFormatRequest, _super);
    function GetDistanceOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistanceOutputFormatPathParams)
    ], GetDistanceOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistanceOutputFormatQueryParams)
    ], GetDistanceOutputFormatRequest.prototype, "queryParams", void 0);
    return GetDistanceOutputFormatRequest;
}(SpeakeasyBase));
export { GetDistanceOutputFormatRequest };
var GetDistanceOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetDistanceOutputFormatResponse, _super);
    function GetDistanceOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDistanceOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDistanceOutputFormatResponse.prototype, "statusCode", void 0);
    return GetDistanceOutputFormatResponse;
}(SpeakeasyBase));
export { GetDistanceOutputFormatResponse };
