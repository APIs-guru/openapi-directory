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
export var GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum;
(function (GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum) {
    GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum["Json"] = "json";
    GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum || (GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum = {}));
var GetIntersectionsIntersectionIdOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetIntersectionsIntersectionIdOutputFormatPathParams, _super);
    function GetIntersectionsIntersectionIdOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=intersectionID" }),
        __metadata("design:type", String)
    ], GetIntersectionsIntersectionIdOutputFormatPathParams.prototype, "intersectionId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetIntersectionsIntersectionIdOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetIntersectionsIntersectionIdOutputFormatPathParams;
}(SpeakeasyBase));
export { GetIntersectionsIntersectionIdOutputFormatPathParams };
var GetIntersectionsIntersectionIdOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetIntersectionsIntersectionIdOutputFormatQueryParams, _super);
    function GetIntersectionsIntersectionIdOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetIntersectionsIntersectionIdOutputFormatQueryParams.prototype, "outputSrs", void 0);
    return GetIntersectionsIntersectionIdOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetIntersectionsIntersectionIdOutputFormatQueryParams };
var GetIntersectionsIntersectionIdOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetIntersectionsIntersectionIdOutputFormatRequest, _super);
    function GetIntersectionsIntersectionIdOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetIntersectionsIntersectionIdOutputFormatPathParams)
    ], GetIntersectionsIntersectionIdOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetIntersectionsIntersectionIdOutputFormatQueryParams)
    ], GetIntersectionsIntersectionIdOutputFormatRequest.prototype, "queryParams", void 0);
    return GetIntersectionsIntersectionIdOutputFormatRequest;
}(SpeakeasyBase));
export { GetIntersectionsIntersectionIdOutputFormatRequest };
var GetIntersectionsIntersectionIdOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetIntersectionsIntersectionIdOutputFormatResponse, _super);
    function GetIntersectionsIntersectionIdOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetIntersectionsIntersectionIdOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetIntersectionsIntersectionIdOutputFormatResponse.prototype, "statusCode", void 0);
    return GetIntersectionsIntersectionIdOutputFormatResponse;
}(SpeakeasyBase));
export { GetIntersectionsIntersectionIdOutputFormatResponse };
