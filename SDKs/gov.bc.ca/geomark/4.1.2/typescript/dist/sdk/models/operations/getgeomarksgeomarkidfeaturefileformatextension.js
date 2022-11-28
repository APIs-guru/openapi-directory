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
export var GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum;
(function (GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum) {
    GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum["Json"] = "json";
    GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum["Xml"] = "xml";
    GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum["Kml"] = "kml";
    GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum["Kmz"] = "kmz";
    GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum["Shp"] = "shp";
    GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum["Shpz"] = "shpz";
    GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum["Geojson"] = "geojson";
    GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum["Gml"] = "gml";
    GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum["Wkt"] = "wkt";
})(GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum || (GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum = {}));
var GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams, _super);
    function GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileFormatExtension" }),
        __metadata("design:type", String)
    ], GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams.prototype, "fileFormatExtension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=geomarkId" }),
        __metadata("design:type", String)
    ], GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams.prototype, "geomarkId", void 0);
    return GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams };
var GetGeomarksGeomarkIdFeatureFileFormatExtensionQueryParams = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdFeatureFileFormatExtensionQueryParams, _super);
    function GetGeomarksGeomarkIdFeatureFileFormatExtensionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=srid" }),
        __metadata("design:type", Number)
    ], GetGeomarksGeomarkIdFeatureFileFormatExtensionQueryParams.prototype, "srid", void 0);
    return GetGeomarksGeomarkIdFeatureFileFormatExtensionQueryParams;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdFeatureFileFormatExtensionQueryParams };
var GetGeomarksGeomarkIdFeatureFileFormatExtensionRequest = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdFeatureFileFormatExtensionRequest, _super);
    function GetGeomarksGeomarkIdFeatureFileFormatExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams)
    ], GetGeomarksGeomarkIdFeatureFileFormatExtensionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGeomarksGeomarkIdFeatureFileFormatExtensionQueryParams)
    ], GetGeomarksGeomarkIdFeatureFileFormatExtensionRequest.prototype, "queryParams", void 0);
    return GetGeomarksGeomarkIdFeatureFileFormatExtensionRequest;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdFeatureFileFormatExtensionRequest };
var GetGeomarksGeomarkIdFeatureFileFormatExtensionResponse = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdFeatureFileFormatExtensionResponse, _super);
    function GetGeomarksGeomarkIdFeatureFileFormatExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGeomarksGeomarkIdFeatureFileFormatExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGeomarksGeomarkIdFeatureFileFormatExtensionResponse.prototype, "statusCode", void 0);
    return GetGeomarksGeomarkIdFeatureFileFormatExtensionResponse;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdFeatureFileFormatExtensionResponse };
