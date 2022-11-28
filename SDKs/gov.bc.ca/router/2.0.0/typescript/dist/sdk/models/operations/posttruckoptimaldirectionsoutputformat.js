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
export var PostTruckOptimalDirectionsOutputFormatOutputFormatEnum;
(function (PostTruckOptimalDirectionsOutputFormatOutputFormatEnum) {
    PostTruckOptimalDirectionsOutputFormatOutputFormatEnum["Json"] = "json";
    PostTruckOptimalDirectionsOutputFormatOutputFormatEnum["Kml"] = "kml";
    PostTruckOptimalDirectionsOutputFormatOutputFormatEnum["Html"] = "html";
})(PostTruckOptimalDirectionsOutputFormatOutputFormatEnum || (PostTruckOptimalDirectionsOutputFormatOutputFormatEnum = {}));
var PostTruckOptimalDirectionsOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(PostTruckOptimalDirectionsOutputFormatPathParams, _super);
    function PostTruckOptimalDirectionsOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], PostTruckOptimalDirectionsOutputFormatPathParams.prototype, "outputFormat", void 0);
    return PostTruckOptimalDirectionsOutputFormatPathParams;
}(SpeakeasyBase));
export { PostTruckOptimalDirectionsOutputFormatPathParams };
export var PostTruckOptimalDirectionsOutputFormatCriteriaEnum;
(function (PostTruckOptimalDirectionsOutputFormatCriteriaEnum) {
    PostTruckOptimalDirectionsOutputFormatCriteriaEnum["Shortest"] = "shortest";
    PostTruckOptimalDirectionsOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(PostTruckOptimalDirectionsOutputFormatCriteriaEnum || (PostTruckOptimalDirectionsOutputFormatCriteriaEnum = {}));
export var PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum;
(function (PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum) {
    PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum["Km"] = "km";
    PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum || (PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum = {}));
var PostTruckOptimalDirectionsOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(PostTruckOptimalDirectionsOutputFormatQueryParams, _super);
    function PostTruckOptimalDirectionsOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], PostTruckOptimalDirectionsOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], PostTruckOptimalDirectionsOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], PostTruckOptimalDirectionsOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], PostTruckOptimalDirectionsOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], PostTruckOptimalDirectionsOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], PostTruckOptimalDirectionsOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], PostTruckOptimalDirectionsOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], PostTruckOptimalDirectionsOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], PostTruckOptimalDirectionsOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return PostTruckOptimalDirectionsOutputFormatQueryParams;
}(SpeakeasyBase));
export { PostTruckOptimalDirectionsOutputFormatQueryParams };
var PostTruckOptimalDirectionsOutputFormatRequest = /** @class */ (function (_super) {
    __extends(PostTruckOptimalDirectionsOutputFormatRequest, _super);
    function PostTruckOptimalDirectionsOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTruckOptimalDirectionsOutputFormatPathParams)
    ], PostTruckOptimalDirectionsOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTruckOptimalDirectionsOutputFormatQueryParams)
    ], PostTruckOptimalDirectionsOutputFormatRequest.prototype, "queryParams", void 0);
    return PostTruckOptimalDirectionsOutputFormatRequest;
}(SpeakeasyBase));
export { PostTruckOptimalDirectionsOutputFormatRequest };
var PostTruckOptimalDirectionsOutputFormatResponse = /** @class */ (function (_super) {
    __extends(PostTruckOptimalDirectionsOutputFormatResponse, _super);
    function PostTruckOptimalDirectionsOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTruckOptimalDirectionsOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTruckOptimalDirectionsOutputFormatResponse.prototype, "statusCode", void 0);
    return PostTruckOptimalDirectionsOutputFormatResponse;
}(SpeakeasyBase));
export { PostTruckOptimalDirectionsOutputFormatResponse };
