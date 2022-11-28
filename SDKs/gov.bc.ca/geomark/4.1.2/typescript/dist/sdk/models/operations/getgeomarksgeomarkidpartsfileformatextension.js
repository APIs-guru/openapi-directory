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
export var GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum;
(function (GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum) {
    GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum["Json"] = "json";
    GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum["Xml"] = "xml";
    GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum["Kml"] = "kml";
    GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum["Kmz"] = "kmz";
    GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum["Shp"] = "shp";
    GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum["Shpz"] = "shpz";
    GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum["Geojson"] = "geojson";
    GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum["Gml"] = "gml";
    GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum["Wkt"] = "wkt";
})(GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum || (GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum = {}));
var GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams, _super);
    function GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileFormatExtension" }),
        __metadata("design:type", String)
    ], GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams.prototype, "fileFormatExtension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=geomarkId" }),
        __metadata("design:type", String)
    ], GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams.prototype, "geomarkId", void 0);
    return GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams };
var GetGeomarksGeomarkIdPartsFileFormatExtensionQueryParams = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdPartsFileFormatExtensionQueryParams, _super);
    function GetGeomarksGeomarkIdPartsFileFormatExtensionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=srid" }),
        __metadata("design:type", Number)
    ], GetGeomarksGeomarkIdPartsFileFormatExtensionQueryParams.prototype, "srid", void 0);
    return GetGeomarksGeomarkIdPartsFileFormatExtensionQueryParams;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdPartsFileFormatExtensionQueryParams };
var GetGeomarksGeomarkIdPartsFileFormatExtensionRequest = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdPartsFileFormatExtensionRequest, _super);
    function GetGeomarksGeomarkIdPartsFileFormatExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams)
    ], GetGeomarksGeomarkIdPartsFileFormatExtensionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGeomarksGeomarkIdPartsFileFormatExtensionQueryParams)
    ], GetGeomarksGeomarkIdPartsFileFormatExtensionRequest.prototype, "queryParams", void 0);
    return GetGeomarksGeomarkIdPartsFileFormatExtensionRequest;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdPartsFileFormatExtensionRequest };
var GetGeomarksGeomarkIdPartsFileFormatExtensionResponse = /** @class */ (function (_super) {
    __extends(GetGeomarksGeomarkIdPartsFileFormatExtensionResponse, _super);
    function GetGeomarksGeomarkIdPartsFileFormatExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGeomarksGeomarkIdPartsFileFormatExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGeomarksGeomarkIdPartsFileFormatExtensionResponse.prototype, "statusCode", void 0);
    return GetGeomarksGeomarkIdPartsFileFormatExtensionResponse;
}(SpeakeasyBase));
export { GetGeomarksGeomarkIdPartsFileFormatExtensionResponse };
