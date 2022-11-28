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
export var PostTruckDistanceOutputFormatOutputFormatEnum;
(function (PostTruckDistanceOutputFormatOutputFormatEnum) {
    PostTruckDistanceOutputFormatOutputFormatEnum["Json"] = "json";
    PostTruckDistanceOutputFormatOutputFormatEnum["Kml"] = "kml";
    PostTruckDistanceOutputFormatOutputFormatEnum["Html"] = "html";
})(PostTruckDistanceOutputFormatOutputFormatEnum || (PostTruckDistanceOutputFormatOutputFormatEnum = {}));
var PostTruckDistanceOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(PostTruckDistanceOutputFormatPathParams, _super);
    function PostTruckDistanceOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], PostTruckDistanceOutputFormatPathParams.prototype, "outputFormat", void 0);
    return PostTruckDistanceOutputFormatPathParams;
}(SpeakeasyBase));
export { PostTruckDistanceOutputFormatPathParams };
export var PostTruckDistanceOutputFormatCriteriaEnum;
(function (PostTruckDistanceOutputFormatCriteriaEnum) {
    PostTruckDistanceOutputFormatCriteriaEnum["Shortest"] = "shortest";
    PostTruckDistanceOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(PostTruckDistanceOutputFormatCriteriaEnum || (PostTruckDistanceOutputFormatCriteriaEnum = {}));
export var PostTruckDistanceOutputFormatDistanceUnitEnum;
(function (PostTruckDistanceOutputFormatDistanceUnitEnum) {
    PostTruckDistanceOutputFormatDistanceUnitEnum["Km"] = "km";
    PostTruckDistanceOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(PostTruckDistanceOutputFormatDistanceUnitEnum || (PostTruckDistanceOutputFormatDistanceUnitEnum = {}));
var PostTruckDistanceOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(PostTruckDistanceOutputFormatQueryParams, _super);
    function PostTruckDistanceOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], PostTruckDistanceOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], PostTruckDistanceOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], PostTruckDistanceOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], PostTruckDistanceOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], PostTruckDistanceOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], PostTruckDistanceOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], PostTruckDistanceOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], PostTruckDistanceOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], PostTruckDistanceOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return PostTruckDistanceOutputFormatQueryParams;
}(SpeakeasyBase));
export { PostTruckDistanceOutputFormatQueryParams };
var PostTruckDistanceOutputFormatRequest = /** @class */ (function (_super) {
    __extends(PostTruckDistanceOutputFormatRequest, _super);
    function PostTruckDistanceOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTruckDistanceOutputFormatPathParams)
    ], PostTruckDistanceOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTruckDistanceOutputFormatQueryParams)
    ], PostTruckDistanceOutputFormatRequest.prototype, "queryParams", void 0);
    return PostTruckDistanceOutputFormatRequest;
}(SpeakeasyBase));
export { PostTruckDistanceOutputFormatRequest };
var PostTruckDistanceOutputFormatResponse = /** @class */ (function (_super) {
    __extends(PostTruckDistanceOutputFormatResponse, _super);
    function PostTruckDistanceOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTruckDistanceOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTruckDistanceOutputFormatResponse.prototype, "statusCode", void 0);
    return PostTruckDistanceOutputFormatResponse;
}(SpeakeasyBase));
export { PostTruckDistanceOutputFormatResponse };
