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
export var PostTruckDirectionsOutputFormatOutputFormatEnum;
(function (PostTruckDirectionsOutputFormatOutputFormatEnum) {
    PostTruckDirectionsOutputFormatOutputFormatEnum["Json"] = "json";
    PostTruckDirectionsOutputFormatOutputFormatEnum["Kml"] = "kml";
    PostTruckDirectionsOutputFormatOutputFormatEnum["Html"] = "html";
})(PostTruckDirectionsOutputFormatOutputFormatEnum || (PostTruckDirectionsOutputFormatOutputFormatEnum = {}));
var PostTruckDirectionsOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(PostTruckDirectionsOutputFormatPathParams, _super);
    function PostTruckDirectionsOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], PostTruckDirectionsOutputFormatPathParams.prototype, "outputFormat", void 0);
    return PostTruckDirectionsOutputFormatPathParams;
}(SpeakeasyBase));
export { PostTruckDirectionsOutputFormatPathParams };
export var PostTruckDirectionsOutputFormatCriteriaEnum;
(function (PostTruckDirectionsOutputFormatCriteriaEnum) {
    PostTruckDirectionsOutputFormatCriteriaEnum["Shortest"] = "shortest";
    PostTruckDirectionsOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(PostTruckDirectionsOutputFormatCriteriaEnum || (PostTruckDirectionsOutputFormatCriteriaEnum = {}));
export var PostTruckDirectionsOutputFormatDistanceUnitEnum;
(function (PostTruckDirectionsOutputFormatDistanceUnitEnum) {
    PostTruckDirectionsOutputFormatDistanceUnitEnum["Km"] = "km";
    PostTruckDirectionsOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(PostTruckDirectionsOutputFormatDistanceUnitEnum || (PostTruckDirectionsOutputFormatDistanceUnitEnum = {}));
var PostTruckDirectionsOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(PostTruckDirectionsOutputFormatQueryParams, _super);
    function PostTruckDirectionsOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], PostTruckDirectionsOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], PostTruckDirectionsOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], PostTruckDirectionsOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], PostTruckDirectionsOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], PostTruckDirectionsOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], PostTruckDirectionsOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], PostTruckDirectionsOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], PostTruckDirectionsOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], PostTruckDirectionsOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return PostTruckDirectionsOutputFormatQueryParams;
}(SpeakeasyBase));
export { PostTruckDirectionsOutputFormatQueryParams };
var PostTruckDirectionsOutputFormatRequest = /** @class */ (function (_super) {
    __extends(PostTruckDirectionsOutputFormatRequest, _super);
    function PostTruckDirectionsOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTruckDirectionsOutputFormatPathParams)
    ], PostTruckDirectionsOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTruckDirectionsOutputFormatQueryParams)
    ], PostTruckDirectionsOutputFormatRequest.prototype, "queryParams", void 0);
    return PostTruckDirectionsOutputFormatRequest;
}(SpeakeasyBase));
export { PostTruckDirectionsOutputFormatRequest };
var PostTruckDirectionsOutputFormatResponse = /** @class */ (function (_super) {
    __extends(PostTruckDirectionsOutputFormatResponse, _super);
    function PostTruckDirectionsOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTruckDirectionsOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTruckDirectionsOutputFormatResponse.prototype, "statusCode", void 0);
    return PostTruckDirectionsOutputFormatResponse;
}(SpeakeasyBase));
export { PostTruckDirectionsOutputFormatResponse };
