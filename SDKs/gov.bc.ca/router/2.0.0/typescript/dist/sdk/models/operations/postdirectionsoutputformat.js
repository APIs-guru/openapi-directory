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
export var PostDirectionsOutputFormatOutputFormatEnum;
(function (PostDirectionsOutputFormatOutputFormatEnum) {
    PostDirectionsOutputFormatOutputFormatEnum["Json"] = "json";
    PostDirectionsOutputFormatOutputFormatEnum["Kml"] = "kml";
    PostDirectionsOutputFormatOutputFormatEnum["Html"] = "html";
})(PostDirectionsOutputFormatOutputFormatEnum || (PostDirectionsOutputFormatOutputFormatEnum = {}));
var PostDirectionsOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(PostDirectionsOutputFormatPathParams, _super);
    function PostDirectionsOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], PostDirectionsOutputFormatPathParams.prototype, "outputFormat", void 0);
    return PostDirectionsOutputFormatPathParams;
}(SpeakeasyBase));
export { PostDirectionsOutputFormatPathParams };
export var PostDirectionsOutputFormatCriteriaEnum;
(function (PostDirectionsOutputFormatCriteriaEnum) {
    PostDirectionsOutputFormatCriteriaEnum["Shortest"] = "shortest";
    PostDirectionsOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(PostDirectionsOutputFormatCriteriaEnum || (PostDirectionsOutputFormatCriteriaEnum = {}));
export var PostDirectionsOutputFormatDistanceUnitEnum;
(function (PostDirectionsOutputFormatDistanceUnitEnum) {
    PostDirectionsOutputFormatDistanceUnitEnum["Km"] = "km";
    PostDirectionsOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(PostDirectionsOutputFormatDistanceUnitEnum || (PostDirectionsOutputFormatDistanceUnitEnum = {}));
var PostDirectionsOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(PostDirectionsOutputFormatQueryParams, _super);
    function PostDirectionsOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], PostDirectionsOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], PostDirectionsOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], PostDirectionsOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], PostDirectionsOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], PostDirectionsOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], PostDirectionsOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], PostDirectionsOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], PostDirectionsOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], PostDirectionsOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return PostDirectionsOutputFormatQueryParams;
}(SpeakeasyBase));
export { PostDirectionsOutputFormatQueryParams };
var PostDirectionsOutputFormatRequest = /** @class */ (function (_super) {
    __extends(PostDirectionsOutputFormatRequest, _super);
    function PostDirectionsOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDirectionsOutputFormatPathParams)
    ], PostDirectionsOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDirectionsOutputFormatQueryParams)
    ], PostDirectionsOutputFormatRequest.prototype, "queryParams", void 0);
    return PostDirectionsOutputFormatRequest;
}(SpeakeasyBase));
export { PostDirectionsOutputFormatRequest };
var PostDirectionsOutputFormatResponse = /** @class */ (function (_super) {
    __extends(PostDirectionsOutputFormatResponse, _super);
    function PostDirectionsOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDirectionsOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDirectionsOutputFormatResponse.prototype, "statusCode", void 0);
    return PostDirectionsOutputFormatResponse;
}(SpeakeasyBase));
export { PostDirectionsOutputFormatResponse };
