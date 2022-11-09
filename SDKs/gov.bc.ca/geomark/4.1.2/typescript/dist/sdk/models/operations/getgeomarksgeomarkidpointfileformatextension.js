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
export var GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum;
(function (GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum) {
    GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum["Json"] = "json";
    GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum["Xml"] = "xml";
    GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum["Kml"] = "kml";
    GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum["Kmz"] = "kmz";
    GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum["Shp"] = "shp";
    GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum["Shpz"] = "shpz";
    GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum["Geojson"] = "geojson";
    GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum["Gml"] = "gml";
    GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum["Wkt"] = "wkt";
})(GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum || (GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum = {}));
var GetGeomarksGeomarkIdPointFileFormatExtensionPathParams = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdPointFileFormatExtensionPathParams, _super);
    function GetGeomarksGeomarkIdPointFileFormatExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=fileFormatExtension" }),
        __metadata("design:type", String)
    ], GetGeomarksGeomarkIdPointFileFormatExtensionPathParams.prototype, "fileFormatExtension", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=geomarkId" }),
        __metadata("design:type", String)
    ], GetGeomarksGeomarkIdPointFileFormatExtensionPathParams.prototype, "geomarkId", void 0);
    return GetGeomarksGeomarkIdPointFileFormatExtensionPathParams;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdPointFileFormatExtensionPathParams };
var GetGeomarksGeomarkIdPointFileFormatExtensionQueryParams = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdPointFileFormatExtensionQueryParams, _super);
    function GetGeomarksGeomarkIdPointFileFormatExtensionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=srid" }),
        __metadata("design:type", Number)
    ], GetGeomarksGeomarkIdPointFileFormatExtensionQueryParams.prototype, "srid", void 0);
    return GetGeomarksGeomarkIdPointFileFormatExtensionQueryParams;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdPointFileFormatExtensionQueryParams };
var GetGeomarksGeomarkIdPointFileFormatExtensionRequest = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdPointFileFormatExtensionRequest, _super);
    function GetGeomarksGeomarkIdPointFileFormatExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGeomarksGeomarkIdPointFileFormatExtensionPathParams)
    ], GetGeomarksGeomarkIdPointFileFormatExtensionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGeomarksGeomarkIdPointFileFormatExtensionQueryParams)
    ], GetGeomarksGeomarkIdPointFileFormatExtensionRequest.prototype, "queryParams", void 0);
    return GetGeomarksGeomarkIdPointFileFormatExtensionRequest;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdPointFileFormatExtensionRequest };
var GetGeomarksGeomarkIdPointFileFormatExtensionResponse = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdPointFileFormatExtensionResponse, _super);
    function GetGeomarksGeomarkIdPointFileFormatExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGeomarksGeomarkIdPointFileFormatExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGeomarksGeomarkIdPointFileFormatExtensionResponse.prototype, "statusCode", void 0);
    return GetGeomarksGeomarkIdPointFileFormatExtensionResponse;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdPointFileFormatExtensionResponse };
