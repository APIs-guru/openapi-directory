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
export var PostOptimalDirectionsOutputFormatOutputFormatEnum;
(function (PostOptimalDirectionsOutputFormatOutputFormatEnum) {
    PostOptimalDirectionsOutputFormatOutputFormatEnum["Json"] = "json";
    PostOptimalDirectionsOutputFormatOutputFormatEnum["Kml"] = "kml";
    PostOptimalDirectionsOutputFormatOutputFormatEnum["Html"] = "html";
})(PostOptimalDirectionsOutputFormatOutputFormatEnum || (PostOptimalDirectionsOutputFormatOutputFormatEnum = {}));
var PostOptimalDirectionsOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(PostOptimalDirectionsOutputFormatPathParams, _super);
    function PostOptimalDirectionsOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], PostOptimalDirectionsOutputFormatPathParams.prototype, "outputFormat", void 0);
    return PostOptimalDirectionsOutputFormatPathParams;
}(SpeakeasyBase));
export { PostOptimalDirectionsOutputFormatPathParams };
export var PostOptimalDirectionsOutputFormatCriteriaEnum;
(function (PostOptimalDirectionsOutputFormatCriteriaEnum) {
    PostOptimalDirectionsOutputFormatCriteriaEnum["Shortest"] = "shortest";
    PostOptimalDirectionsOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(PostOptimalDirectionsOutputFormatCriteriaEnum || (PostOptimalDirectionsOutputFormatCriteriaEnum = {}));
export var PostOptimalDirectionsOutputFormatDistanceUnitEnum;
(function (PostOptimalDirectionsOutputFormatDistanceUnitEnum) {
    PostOptimalDirectionsOutputFormatDistanceUnitEnum["Km"] = "km";
    PostOptimalDirectionsOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(PostOptimalDirectionsOutputFormatDistanceUnitEnum || (PostOptimalDirectionsOutputFormatDistanceUnitEnum = {}));
var PostOptimalDirectionsOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(PostOptimalDirectionsOutputFormatQueryParams, _super);
    function PostOptimalDirectionsOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], PostOptimalDirectionsOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], PostOptimalDirectionsOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], PostOptimalDirectionsOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], PostOptimalDirectionsOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], PostOptimalDirectionsOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], PostOptimalDirectionsOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], PostOptimalDirectionsOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], PostOptimalDirectionsOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], PostOptimalDirectionsOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return PostOptimalDirectionsOutputFormatQueryParams;
}(SpeakeasyBase));
export { PostOptimalDirectionsOutputFormatQueryParams };
var PostOptimalDirectionsOutputFormatRequest = /** @class */ (function (_super) {
    __extends(PostOptimalDirectionsOutputFormatRequest, _super);
    function PostOptimalDirectionsOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostOptimalDirectionsOutputFormatPathParams)
    ], PostOptimalDirectionsOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostOptimalDirectionsOutputFormatQueryParams)
    ], PostOptimalDirectionsOutputFormatRequest.prototype, "queryParams", void 0);
    return PostOptimalDirectionsOutputFormatRequest;
}(SpeakeasyBase));
export { PostOptimalDirectionsOutputFormatRequest };
var PostOptimalDirectionsOutputFormatResponse = /** @class */ (function (_super) {
    __extends(PostOptimalDirectionsOutputFormatResponse, _super);
    function PostOptimalDirectionsOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostOptimalDirectionsOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostOptimalDirectionsOutputFormatResponse.prototype, "statusCode", void 0);
    return PostOptimalDirectionsOutputFormatResponse;
}(SpeakeasyBase));
export { PostOptimalDirectionsOutputFormatResponse };
