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
export var GetDistanceBetweenPairsOutputFormatOutputFormatEnum;
(function (GetDistanceBetweenPairsOutputFormatOutputFormatEnum) {
    GetDistanceBetweenPairsOutputFormatOutputFormatEnum["Json"] = "json";
    GetDistanceBetweenPairsOutputFormatOutputFormatEnum["Html"] = "html";
})(GetDistanceBetweenPairsOutputFormatOutputFormatEnum || (GetDistanceBetweenPairsOutputFormatOutputFormatEnum = {}));
var GetDistanceBetweenPairsOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetDistanceBetweenPairsOutputFormatPathParams, _super);
    function GetDistanceBetweenPairsOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetDistanceBetweenPairsOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetDistanceBetweenPairsOutputFormatPathParams;
}(SpeakeasyBase));
export { GetDistanceBetweenPairsOutputFormatPathParams };
export var GetDistanceBetweenPairsOutputFormatCriteriaEnum;
(function (GetDistanceBetweenPairsOutputFormatCriteriaEnum) {
    GetDistanceBetweenPairsOutputFormatCriteriaEnum["Shortest"] = "shortest";
    GetDistanceBetweenPairsOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(GetDistanceBetweenPairsOutputFormatCriteriaEnum || (GetDistanceBetweenPairsOutputFormatCriteriaEnum = {}));
export var GetDistanceBetweenPairsOutputFormatDistanceUnitEnum;
(function (GetDistanceBetweenPairsOutputFormatDistanceUnitEnum) {
    GetDistanceBetweenPairsOutputFormatDistanceUnitEnum["Km"] = "km";
    GetDistanceBetweenPairsOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(GetDistanceBetweenPairsOutputFormatDistanceUnitEnum || (GetDistanceBetweenPairsOutputFormatDistanceUnitEnum = {}));
var GetDistanceBetweenPairsOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetDistanceBetweenPairsOutputFormatQueryParams, _super);
    function GetDistanceBetweenPairsOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], GetDistanceBetweenPairsOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], GetDistanceBetweenPairsOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], GetDistanceBetweenPairsOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], GetDistanceBetweenPairsOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], GetDistanceBetweenPairsOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromPoints" }),
        __metadata("design:type", String)
    ], GetDistanceBetweenPairsOutputFormatQueryParams.prototype, "fromPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxPairs" }),
        __metadata("design:type", Number)
    ], GetDistanceBetweenPairsOutputFormatQueryParams.prototype, "maxPairs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetDistanceBetweenPairsOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], GetDistanceBetweenPairsOutputFormatQueryParams.prototype, "routeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toPoints" }),
        __metadata("design:type", String)
    ], GetDistanceBetweenPairsOutputFormatQueryParams.prototype, "toPoints", void 0);
    return GetDistanceBetweenPairsOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetDistanceBetweenPairsOutputFormatQueryParams };
var GetDistanceBetweenPairsOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetDistanceBetweenPairsOutputFormatRequest, _super);
    function GetDistanceBetweenPairsOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistanceBetweenPairsOutputFormatPathParams)
    ], GetDistanceBetweenPairsOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistanceBetweenPairsOutputFormatQueryParams)
    ], GetDistanceBetweenPairsOutputFormatRequest.prototype, "queryParams", void 0);
    return GetDistanceBetweenPairsOutputFormatRequest;
}(SpeakeasyBase));
export { GetDistanceBetweenPairsOutputFormatRequest };
var GetDistanceBetweenPairsOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetDistanceBetweenPairsOutputFormatResponse, _super);
    function GetDistanceBetweenPairsOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDistanceBetweenPairsOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDistanceBetweenPairsOutputFormatResponse.prototype, "statusCode", void 0);
    return GetDistanceBetweenPairsOutputFormatResponse;
}(SpeakeasyBase));
export { GetDistanceBetweenPairsOutputFormatResponse };
