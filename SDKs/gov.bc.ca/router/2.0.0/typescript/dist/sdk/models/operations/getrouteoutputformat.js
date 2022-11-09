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
export var GetRouteOutputFormatOutputFormatEnum;
(function (GetRouteOutputFormatOutputFormatEnum) {
    GetRouteOutputFormatOutputFormatEnum["Json"] = "json";
    GetRouteOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetRouteOutputFormatOutputFormatEnum["Html"] = "html";
})(GetRouteOutputFormatOutputFormatEnum || (GetRouteOutputFormatOutputFormatEnum = {}));
var GetRouteOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetRouteOutputFormatPathParams, _super);
    function GetRouteOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetRouteOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetRouteOutputFormatPathParams;
}(SpeakeasyBase));
export { GetRouteOutputFormatPathParams };
export var GetRouteOutputFormatCriteriaEnum;
(function (GetRouteOutputFormatCriteriaEnum) {
    GetRouteOutputFormatCriteriaEnum["Shortest"] = "shortest";
    GetRouteOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(GetRouteOutputFormatCriteriaEnum || (GetRouteOutputFormatCriteriaEnum = {}));
export var GetRouteOutputFormatDistanceUnitEnum;
(function (GetRouteOutputFormatDistanceUnitEnum) {
    GetRouteOutputFormatDistanceUnitEnum["Km"] = "km";
    GetRouteOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(GetRouteOutputFormatDistanceUnitEnum || (GetRouteOutputFormatDistanceUnitEnum = {}));
var GetRouteOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetRouteOutputFormatQueryParams, _super);
    function GetRouteOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], GetRouteOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], GetRouteOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], GetRouteOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], GetRouteOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], GetRouteOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetRouteOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], GetRouteOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], GetRouteOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], GetRouteOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return GetRouteOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetRouteOutputFormatQueryParams };
var GetRouteOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetRouteOutputFormatRequest, _super);
    function GetRouteOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRouteOutputFormatPathParams)
    ], GetRouteOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRouteOutputFormatQueryParams)
    ], GetRouteOutputFormatRequest.prototype, "queryParams", void 0);
    return GetRouteOutputFormatRequest;
}(SpeakeasyBase));
export { GetRouteOutputFormatRequest };
var GetRouteOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetRouteOutputFormatResponse, _super);
    function GetRouteOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRouteOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRouteOutputFormatResponse.prototype, "statusCode", void 0);
    return GetRouteOutputFormatResponse;
}(SpeakeasyBase));
export { GetRouteOutputFormatResponse };
