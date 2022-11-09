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
export var GetOptimalRouteOutputFormatOutputFormatEnum;
(function (GetOptimalRouteOutputFormatOutputFormatEnum) {
    GetOptimalRouteOutputFormatOutputFormatEnum["Json"] = "json";
    GetOptimalRouteOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetOptimalRouteOutputFormatOutputFormatEnum["Html"] = "html";
})(GetOptimalRouteOutputFormatOutputFormatEnum || (GetOptimalRouteOutputFormatOutputFormatEnum = {}));
var GetOptimalRouteOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetOptimalRouteOutputFormatPathParams, _super);
    function GetOptimalRouteOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetOptimalRouteOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetOptimalRouteOutputFormatPathParams;
}(SpeakeasyBase));
export { GetOptimalRouteOutputFormatPathParams };
export var GetOptimalRouteOutputFormatCriteriaEnum;
(function (GetOptimalRouteOutputFormatCriteriaEnum) {
    GetOptimalRouteOutputFormatCriteriaEnum["Shortest"] = "shortest";
    GetOptimalRouteOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(GetOptimalRouteOutputFormatCriteriaEnum || (GetOptimalRouteOutputFormatCriteriaEnum = {}));
export var GetOptimalRouteOutputFormatDistanceUnitEnum;
(function (GetOptimalRouteOutputFormatDistanceUnitEnum) {
    GetOptimalRouteOutputFormatDistanceUnitEnum["Km"] = "km";
    GetOptimalRouteOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(GetOptimalRouteOutputFormatDistanceUnitEnum || (GetOptimalRouteOutputFormatDistanceUnitEnum = {}));
var GetOptimalRouteOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetOptimalRouteOutputFormatQueryParams, _super);
    function GetOptimalRouteOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], GetOptimalRouteOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], GetOptimalRouteOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], GetOptimalRouteOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], GetOptimalRouteOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], GetOptimalRouteOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetOptimalRouteOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], GetOptimalRouteOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], GetOptimalRouteOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], GetOptimalRouteOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return GetOptimalRouteOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetOptimalRouteOutputFormatQueryParams };
var GetOptimalRouteOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetOptimalRouteOutputFormatRequest, _super);
    function GetOptimalRouteOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetOptimalRouteOutputFormatPathParams)
    ], GetOptimalRouteOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetOptimalRouteOutputFormatQueryParams)
    ], GetOptimalRouteOutputFormatRequest.prototype, "queryParams", void 0);
    return GetOptimalRouteOutputFormatRequest;
}(SpeakeasyBase));
export { GetOptimalRouteOutputFormatRequest };
var GetOptimalRouteOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetOptimalRouteOutputFormatResponse, _super);
    function GetOptimalRouteOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetOptimalRouteOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetOptimalRouteOutputFormatResponse.prototype, "statusCode", void 0);
    return GetOptimalRouteOutputFormatResponse;
}(SpeakeasyBase));
export { GetOptimalRouteOutputFormatResponse };
