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
export var GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum;
(function (GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum) {
    GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum["Json"] = "json";
    GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum["Xml"] = "xml";
    GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum["Kml"] = "kml";
    GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum["Kmz"] = "kmz";
    GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum["Shp"] = "shp";
    GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum["Shpz"] = "shpz";
    GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum["Geojson"] = "geojson";
    GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum["Gml"] = "gml";
    GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum["Wkt"] = "wkt";
})(GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum || (GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum = {}));
var GetGeomarksGeomarkIdFileFormatExtensionPathParams = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdFileFormatExtensionPathParams, _super);
    function GetGeomarksGeomarkIdFileFormatExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileFormatExtension" }),
        __metadata("design:type", String)
    ], GetGeomarksGeomarkIdFileFormatExtensionPathParams.prototype, "fileFormatExtension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=geomarkId" }),
        __metadata("design:type", String)
    ], GetGeomarksGeomarkIdFileFormatExtensionPathParams.prototype, "geomarkId", void 0);
    return GetGeomarksGeomarkIdFileFormatExtensionPathParams;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdFileFormatExtensionPathParams };
var GetGeomarksGeomarkIdFileFormatExtensionQueryParams = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdFileFormatExtensionQueryParams, _super);
    function GetGeomarksGeomarkIdFileFormatExtensionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=srid" }),
        __metadata("design:type", Number)
    ], GetGeomarksGeomarkIdFileFormatExtensionQueryParams.prototype, "srid", void 0);
    return GetGeomarksGeomarkIdFileFormatExtensionQueryParams;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdFileFormatExtensionQueryParams };
var GetGeomarksGeomarkIdFileFormatExtensionRequest = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdFileFormatExtensionRequest, _super);
    function GetGeomarksGeomarkIdFileFormatExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGeomarksGeomarkIdFileFormatExtensionPathParams)
    ], GetGeomarksGeomarkIdFileFormatExtensionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGeomarksGeomarkIdFileFormatExtensionQueryParams)
    ], GetGeomarksGeomarkIdFileFormatExtensionRequest.prototype, "queryParams", void 0);
    return GetGeomarksGeomarkIdFileFormatExtensionRequest;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdFileFormatExtensionRequest };
var GetGeomarksGeomarkIdFileFormatExtensionResponse = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdFileFormatExtensionResponse, _super);
    function GetGeomarksGeomarkIdFileFormatExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGeomarksGeomarkIdFileFormatExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGeomarksGeomarkIdFileFormatExtensionResponse.prototype, "statusCode", void 0);
    return GetGeomarksGeomarkIdFileFormatExtensionResponse;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdFileFormatExtensionResponse };
