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
export var PostOptimalRouteOutputFormatOutputFormatEnum;
(function (PostOptimalRouteOutputFormatOutputFormatEnum) {
    PostOptimalRouteOutputFormatOutputFormatEnum["Json"] = "json";
    PostOptimalRouteOutputFormatOutputFormatEnum["Kml"] = "kml";
    PostOptimalRouteOutputFormatOutputFormatEnum["Html"] = "html";
})(PostOptimalRouteOutputFormatOutputFormatEnum || (PostOptimalRouteOutputFormatOutputFormatEnum = {}));
var PostOptimalRouteOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(PostOptimalRouteOutputFormatPathParams, _super);
    function PostOptimalRouteOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], PostOptimalRouteOutputFormatPathParams.prototype, "outputFormat", void 0);
    return PostOptimalRouteOutputFormatPathParams;
}(SpeakeasyBase));
export { PostOptimalRouteOutputFormatPathParams };
export var PostOptimalRouteOutputFormatCriteriaEnum;
(function (PostOptimalRouteOutputFormatCriteriaEnum) {
    PostOptimalRouteOutputFormatCriteriaEnum["Shortest"] = "shortest";
    PostOptimalRouteOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(PostOptimalRouteOutputFormatCriteriaEnum || (PostOptimalRouteOutputFormatCriteriaEnum = {}));
export var PostOptimalRouteOutputFormatDistanceUnitEnum;
(function (PostOptimalRouteOutputFormatDistanceUnitEnum) {
    PostOptimalRouteOutputFormatDistanceUnitEnum["Km"] = "km";
    PostOptimalRouteOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(PostOptimalRouteOutputFormatDistanceUnitEnum || (PostOptimalRouteOutputFormatDistanceUnitEnum = {}));
var PostOptimalRouteOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(PostOptimalRouteOutputFormatQueryParams, _super);
    function PostOptimalRouteOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], PostOptimalRouteOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], PostOptimalRouteOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], PostOptimalRouteOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], PostOptimalRouteOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], PostOptimalRouteOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], PostOptimalRouteOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], PostOptimalRouteOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], PostOptimalRouteOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], PostOptimalRouteOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return PostOptimalRouteOutputFormatQueryParams;
}(SpeakeasyBase));
export { PostOptimalRouteOutputFormatQueryParams };
var PostOptimalRouteOutputFormatRequest = /** @class */ (function (_super) {
    __extends(PostOptimalRouteOutputFormatRequest, _super);
    function PostOptimalRouteOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostOptimalRouteOutputFormatPathParams)
    ], PostOptimalRouteOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostOptimalRouteOutputFormatQueryParams)
    ], PostOptimalRouteOutputFormatRequest.prototype, "queryParams", void 0);
    return PostOptimalRouteOutputFormatRequest;
}(SpeakeasyBase));
export { PostOptimalRouteOutputFormatRequest };
var PostOptimalRouteOutputFormatResponse = /** @class */ (function (_super) {
    __extends(PostOptimalRouteOutputFormatResponse, _super);
    function PostOptimalRouteOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostOptimalRouteOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostOptimalRouteOutputFormatResponse.prototype, "statusCode", void 0);
    return PostOptimalRouteOutputFormatResponse;
}(SpeakeasyBase));
export { PostOptimalRouteOutputFormatResponse };
