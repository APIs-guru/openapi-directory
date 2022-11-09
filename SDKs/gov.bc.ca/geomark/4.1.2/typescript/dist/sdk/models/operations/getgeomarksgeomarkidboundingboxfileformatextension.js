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
export var GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum;
(function (GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum) {
    GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum["Json"] = "json";
    GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum["Xml"] = "xml";
    GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum["Kml"] = "kml";
    GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum["Kmz"] = "kmz";
    GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum["Shp"] = "shp";
    GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum["Shpz"] = "shpz";
    GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum["Geojson"] = "geojson";
    GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum["Gml"] = "gml";
    GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum["Wkt"] = "wkt";
})(GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum || (GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum = {}));
var GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams, _super);
    function GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=fileFormatExtension" }),
        __metadata("design:type", String)
    ], GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams.prototype, "fileFormatExtension", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=geomarkId" }),
        __metadata("design:type", String)
    ], GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams.prototype, "geomarkId", void 0);
    return GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams };
var GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams, _super);
    function GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=srid" }),
        __metadata("design:type", Number)
    ], GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams.prototype, "srid", void 0);
    return GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams };
var GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest, _super);
    function GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams)
    ], GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams)
    ], GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest.prototype, "queryParams", void 0);
    return GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest };
var GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse, _super);
    function GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse.prototype, "statusCode", void 0);
    return GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse };
