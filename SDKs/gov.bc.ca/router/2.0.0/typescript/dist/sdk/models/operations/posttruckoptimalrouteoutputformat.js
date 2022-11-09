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
export var PostTruckOptimalRouteOutputFormatOutputFormatEnum;
(function (PostTruckOptimalRouteOutputFormatOutputFormatEnum) {
    PostTruckOptimalRouteOutputFormatOutputFormatEnum["Json"] = "json";
    PostTruckOptimalRouteOutputFormatOutputFormatEnum["Kml"] = "kml";
    PostTruckOptimalRouteOutputFormatOutputFormatEnum["Html"] = "html";
})(PostTruckOptimalRouteOutputFormatOutputFormatEnum || (PostTruckOptimalRouteOutputFormatOutputFormatEnum = {}));
var PostTruckOptimalRouteOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(PostTruckOptimalRouteOutputFormatPathParams, _super);
    function PostTruckOptimalRouteOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], PostTruckOptimalRouteOutputFormatPathParams.prototype, "outputFormat", void 0);
    return PostTruckOptimalRouteOutputFormatPathParams;
}(SpeakeasyBase));
export { PostTruckOptimalRouteOutputFormatPathParams };
export var PostTruckOptimalRouteOutputFormatCriteriaEnum;
(function (PostTruckOptimalRouteOutputFormatCriteriaEnum) {
    PostTruckOptimalRouteOutputFormatCriteriaEnum["Shortest"] = "shortest";
    PostTruckOptimalRouteOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(PostTruckOptimalRouteOutputFormatCriteriaEnum || (PostTruckOptimalRouteOutputFormatCriteriaEnum = {}));
export var PostTruckOptimalRouteOutputFormatDistanceUnitEnum;
(function (PostTruckOptimalRouteOutputFormatDistanceUnitEnum) {
    PostTruckOptimalRouteOutputFormatDistanceUnitEnum["Km"] = "km";
    PostTruckOptimalRouteOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(PostTruckOptimalRouteOutputFormatDistanceUnitEnum || (PostTruckOptimalRouteOutputFormatDistanceUnitEnum = {}));
var PostTruckOptimalRouteOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(PostTruckOptimalRouteOutputFormatQueryParams, _super);
    function PostTruckOptimalRouteOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], PostTruckOptimalRouteOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], PostTruckOptimalRouteOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], PostTruckOptimalRouteOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], PostTruckOptimalRouteOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], PostTruckOptimalRouteOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], PostTruckOptimalRouteOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], PostTruckOptimalRouteOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], PostTruckOptimalRouteOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], PostTruckOptimalRouteOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return PostTruckOptimalRouteOutputFormatQueryParams;
}(SpeakeasyBase));
export { PostTruckOptimalRouteOutputFormatQueryParams };
var PostTruckOptimalRouteOutputFormatRequest = /** @class */ (function (_super) {
    __extends(PostTruckOptimalRouteOutputFormatRequest, _super);
    function PostTruckOptimalRouteOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostTruckOptimalRouteOutputFormatPathParams)
    ], PostTruckOptimalRouteOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostTruckOptimalRouteOutputFormatQueryParams)
    ], PostTruckOptimalRouteOutputFormatRequest.prototype, "queryParams", void 0);
    return PostTruckOptimalRouteOutputFormatRequest;
}(SpeakeasyBase));
export { PostTruckOptimalRouteOutputFormatRequest };
var PostTruckOptimalRouteOutputFormatResponse = /** @class */ (function (_super) {
    __extends(PostTruckOptimalRouteOutputFormatResponse, _super);
    function PostTruckOptimalRouteOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostTruckOptimalRouteOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostTruckOptimalRouteOutputFormatResponse.prototype, "statusCode", void 0);
    return PostTruckOptimalRouteOutputFormatResponse;
}(SpeakeasyBase));
export { PostTruckOptimalRouteOutputFormatResponse };
