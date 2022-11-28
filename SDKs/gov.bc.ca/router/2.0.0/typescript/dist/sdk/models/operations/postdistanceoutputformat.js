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
export var PostDistanceOutputFormatOutputFormatEnum;
(function (PostDistanceOutputFormatOutputFormatEnum) {
    PostDistanceOutputFormatOutputFormatEnum["Json"] = "json";
    PostDistanceOutputFormatOutputFormatEnum["Kml"] = "kml";
    PostDistanceOutputFormatOutputFormatEnum["Html"] = "html";
})(PostDistanceOutputFormatOutputFormatEnum || (PostDistanceOutputFormatOutputFormatEnum = {}));
var PostDistanceOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(PostDistanceOutputFormatPathParams, _super);
    function PostDistanceOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], PostDistanceOutputFormatPathParams.prototype, "outputFormat", void 0);
    return PostDistanceOutputFormatPathParams;
}(SpeakeasyBase));
export { PostDistanceOutputFormatPathParams };
export var PostDistanceOutputFormatCriteriaEnum;
(function (PostDistanceOutputFormatCriteriaEnum) {
    PostDistanceOutputFormatCriteriaEnum["Shortest"] = "shortest";
    PostDistanceOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(PostDistanceOutputFormatCriteriaEnum || (PostDistanceOutputFormatCriteriaEnum = {}));
export var PostDistanceOutputFormatDistanceUnitEnum;
(function (PostDistanceOutputFormatDistanceUnitEnum) {
    PostDistanceOutputFormatDistanceUnitEnum["Km"] = "km";
    PostDistanceOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(PostDistanceOutputFormatDistanceUnitEnum || (PostDistanceOutputFormatDistanceUnitEnum = {}));
var PostDistanceOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(PostDistanceOutputFormatQueryParams, _super);
    function PostDistanceOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], PostDistanceOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], PostDistanceOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], PostDistanceOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], PostDistanceOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], PostDistanceOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], PostDistanceOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], PostDistanceOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], PostDistanceOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], PostDistanceOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return PostDistanceOutputFormatQueryParams;
}(SpeakeasyBase));
export { PostDistanceOutputFormatQueryParams };
var PostDistanceOutputFormatRequest = /** @class */ (function (_super) {
    __extends(PostDistanceOutputFormatRequest, _super);
    function PostDistanceOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDistanceOutputFormatPathParams)
    ], PostDistanceOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDistanceOutputFormatQueryParams)
    ], PostDistanceOutputFormatRequest.prototype, "queryParams", void 0);
    return PostDistanceOutputFormatRequest;
}(SpeakeasyBase));
export { PostDistanceOutputFormatRequest };
var PostDistanceOutputFormatResponse = /** @class */ (function (_super) {
    __extends(PostDistanceOutputFormatResponse, _super);
    function PostDistanceOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDistanceOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDistanceOutputFormatResponse.prototype, "statusCode", void 0);
    return PostDistanceOutputFormatResponse;
}(SpeakeasyBase));
export { PostDistanceOutputFormatResponse };
