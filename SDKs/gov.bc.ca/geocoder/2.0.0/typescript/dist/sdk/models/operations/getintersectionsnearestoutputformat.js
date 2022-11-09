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
export var GetIntersectionsNearestOutputFormatOutputFormatEnum;
(function (GetIntersectionsNearestOutputFormatOutputFormatEnum) {
    GetIntersectionsNearestOutputFormatOutputFormatEnum["Json"] = "json";
    GetIntersectionsNearestOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetIntersectionsNearestOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetIntersectionsNearestOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetIntersectionsNearestOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetIntersectionsNearestOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetIntersectionsNearestOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetIntersectionsNearestOutputFormatOutputFormatEnum || (GetIntersectionsNearestOutputFormatOutputFormatEnum = {}));
var GetIntersectionsNearestOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetIntersectionsNearestOutputFormatPathParams, _super);
    function GetIntersectionsNearestOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetIntersectionsNearestOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetIntersectionsNearestOutputFormatPathParams;
}(SpeakeasyBase));
export { GetIntersectionsNearestOutputFormatPathParams };
var GetIntersectionsNearestOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetIntersectionsNearestOutputFormatQueryParams, _super);
    function GetIntersectionsNearestOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxDegree" }),
        __metadata("design:type", Number)
    ], GetIntersectionsNearestOutputFormatQueryParams.prototype, "maxDegree", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxDistance" }),
        __metadata("design:type", Number)
    ], GetIntersectionsNearestOutputFormatQueryParams.prototype, "maxDistance", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minDegree" }),
        __metadata("design:type", Number)
    ], GetIntersectionsNearestOutputFormatQueryParams.prototype, "minDegree", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetIntersectionsNearestOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=point" }),
        __metadata("design:type", String)
    ], GetIntersectionsNearestOutputFormatQueryParams.prototype, "point", void 0);
    return GetIntersectionsNearestOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetIntersectionsNearestOutputFormatQueryParams };
var GetIntersectionsNearestOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetIntersectionsNearestOutputFormatRequest, _super);
    function GetIntersectionsNearestOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetIntersectionsNearestOutputFormatPathParams)
    ], GetIntersectionsNearestOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetIntersectionsNearestOutputFormatQueryParams)
    ], GetIntersectionsNearestOutputFormatRequest.prototype, "queryParams", void 0);
    return GetIntersectionsNearestOutputFormatRequest;
}(SpeakeasyBase));
export { GetIntersectionsNearestOutputFormatRequest };
var GetIntersectionsNearestOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetIntersectionsNearestOutputFormatResponse, _super);
    function GetIntersectionsNearestOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetIntersectionsNearestOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetIntersectionsNearestOutputFormatResponse.prototype, "statusCode", void 0);
    return GetIntersectionsNearestOutputFormatResponse;
}(SpeakeasyBase));
export { GetIntersectionsNearestOutputFormatResponse };
