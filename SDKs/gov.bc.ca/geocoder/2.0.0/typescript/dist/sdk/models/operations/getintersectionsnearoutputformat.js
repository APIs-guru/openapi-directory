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
export var GetIntersectionsNearOutputFormatOutputFormatEnum;
(function (GetIntersectionsNearOutputFormatOutputFormatEnum) {
    GetIntersectionsNearOutputFormatOutputFormatEnum["Json"] = "json";
    GetIntersectionsNearOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetIntersectionsNearOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetIntersectionsNearOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetIntersectionsNearOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetIntersectionsNearOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetIntersectionsNearOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetIntersectionsNearOutputFormatOutputFormatEnum || (GetIntersectionsNearOutputFormatOutputFormatEnum = {}));
var GetIntersectionsNearOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetIntersectionsNearOutputFormatPathParams, _super);
    function GetIntersectionsNearOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetIntersectionsNearOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetIntersectionsNearOutputFormatPathParams;
}(SpeakeasyBase));
export { GetIntersectionsNearOutputFormatPathParams };
var GetIntersectionsNearOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetIntersectionsNearOutputFormatQueryParams, _super);
    function GetIntersectionsNearOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxDegree" }),
        __metadata("design:type", Number)
    ], GetIntersectionsNearOutputFormatQueryParams.prototype, "maxDegree", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxDistance" }),
        __metadata("design:type", Number)
    ], GetIntersectionsNearOutputFormatQueryParams.prototype, "maxDistance", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetIntersectionsNearOutputFormatQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minDegree" }),
        __metadata("design:type", Number)
    ], GetIntersectionsNearOutputFormatQueryParams.prototype, "minDegree", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetIntersectionsNearOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=point" }),
        __metadata("design:type", String)
    ], GetIntersectionsNearOutputFormatQueryParams.prototype, "point", void 0);
    return GetIntersectionsNearOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetIntersectionsNearOutputFormatQueryParams };
var GetIntersectionsNearOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetIntersectionsNearOutputFormatRequest, _super);
    function GetIntersectionsNearOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetIntersectionsNearOutputFormatPathParams)
    ], GetIntersectionsNearOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetIntersectionsNearOutputFormatQueryParams)
    ], GetIntersectionsNearOutputFormatRequest.prototype, "queryParams", void 0);
    return GetIntersectionsNearOutputFormatRequest;
}(SpeakeasyBase));
export { GetIntersectionsNearOutputFormatRequest };
var GetIntersectionsNearOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetIntersectionsNearOutputFormatResponse, _super);
    function GetIntersectionsNearOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetIntersectionsNearOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetIntersectionsNearOutputFormatResponse.prototype, "statusCode", void 0);
    return GetIntersectionsNearOutputFormatResponse;
}(SpeakeasyBase));
export { GetIntersectionsNearOutputFormatResponse };
