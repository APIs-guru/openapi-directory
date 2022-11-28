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
export var PostGeomarksCopyBufferCapEnum;
(function (PostGeomarksCopyBufferCapEnum) {
    PostGeomarksCopyBufferCapEnum["Round"] = "ROUND";
    PostGeomarksCopyBufferCapEnum["Square"] = "SQUARE";
    PostGeomarksCopyBufferCapEnum["Flat"] = "FLAT";
})(PostGeomarksCopyBufferCapEnum || (PostGeomarksCopyBufferCapEnum = {}));
export var PostGeomarksCopyBufferJoinEnum;
(function (PostGeomarksCopyBufferJoinEnum) {
    PostGeomarksCopyBufferJoinEnum["Round"] = "ROUND";
    PostGeomarksCopyBufferJoinEnum["Mitre"] = "MITRE";
    PostGeomarksCopyBufferJoinEnum["Bevel"] = "BEVEL";
})(PostGeomarksCopyBufferJoinEnum || (PostGeomarksCopyBufferJoinEnum = {}));
export var PostGeomarksCopyResultFormatEnum;
(function (PostGeomarksCopyResultFormatEnum) {
    PostGeomarksCopyResultFormatEnum["Json"] = "json";
    PostGeomarksCopyResultFormatEnum["Xml"] = "xml";
    PostGeomarksCopyResultFormatEnum["Kml"] = "kml";
    PostGeomarksCopyResultFormatEnum["Kmz"] = "kmz";
    PostGeomarksCopyResultFormatEnum["Shp"] = "shp";
    PostGeomarksCopyResultFormatEnum["Shpz"] = "shpz";
    PostGeomarksCopyResultFormatEnum["Geojson"] = "geojson";
    PostGeomarksCopyResultFormatEnum["Gml"] = "gml";
    PostGeomarksCopyResultFormatEnum["Wkt"] = "wkt";
})(PostGeomarksCopyResultFormatEnum || (PostGeomarksCopyResultFormatEnum = {}));
var PostGeomarksCopyQueryParams = /** @class */ (function (_super) {
    __extends(PostGeomarksCopyQueryParams, _super);
    function PostGeomarksCopyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowOverlap" }),
        __metadata("design:type", Boolean)
    ], PostGeomarksCopyQueryParams.prototype, "allowOverlap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bufferCap" }),
        __metadata("design:type", String)
    ], PostGeomarksCopyQueryParams.prototype, "bufferCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bufferJoin" }),
        __metadata("design:type", String)
    ], PostGeomarksCopyQueryParams.prototype, "bufferJoin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bufferMetres" }),
        __metadata("design:type", Number)
    ], PostGeomarksCopyQueryParams.prototype, "bufferMetres", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bufferMitreLimit" }),
        __metadata("design:type", Number)
    ], PostGeomarksCopyQueryParams.prototype, "bufferMitreLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bufferSegments" }),
        __metadata("design:type", Number)
    ], PostGeomarksCopyQueryParams.prototype, "bufferSegments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PostGeomarksCopyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=failureRedirectUrl" }),
        __metadata("design:type", String)
    ], PostGeomarksCopyQueryParams.prototype, "failureRedirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geomarkUrl" }),
        __metadata("design:type", String)
    ], PostGeomarksCopyQueryParams.prototype, "geomarkUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=redirectUrl" }),
        __metadata("design:type", String)
    ], PostGeomarksCopyQueryParams.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resultFormat" }),
        __metadata("design:type", String)
    ], PostGeomarksCopyQueryParams.prototype, "resultFormat", void 0);
    return PostGeomarksCopyQueryParams;
}(SpeakeasyBase));
export { PostGeomarksCopyQueryParams };
var PostGeomarksCopyRequest = /** @class */ (function (_super) {
    __extends(PostGeomarksCopyRequest, _super);
    function PostGeomarksCopyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGeomarksCopyQueryParams)
    ], PostGeomarksCopyRequest.prototype, "queryParams", void 0);
    return PostGeomarksCopyRequest;
}(SpeakeasyBase));
export { PostGeomarksCopyRequest };
var PostGeomarksCopyResponse = /** @class */ (function (_super) {
    __extends(PostGeomarksCopyResponse, _super);
    function PostGeomarksCopyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGeomarksCopyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGeomarksCopyResponse.prototype, "statusCode", void 0);
    return PostGeomarksCopyResponse;
}(SpeakeasyBase));
export { PostGeomarksCopyResponse };
