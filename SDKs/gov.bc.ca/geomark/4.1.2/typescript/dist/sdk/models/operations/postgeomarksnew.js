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
export var PostGeomarksNewRequestBodyBufferCapEnum;
(function (PostGeomarksNewRequestBodyBufferCapEnum) {
    PostGeomarksNewRequestBodyBufferCapEnum["Round"] = "ROUND";
    PostGeomarksNewRequestBodyBufferCapEnum["Square"] = "SQUARE";
    PostGeomarksNewRequestBodyBufferCapEnum["Flat"] = "FLAT";
})(PostGeomarksNewRequestBodyBufferCapEnum || (PostGeomarksNewRequestBodyBufferCapEnum = {}));
export var PostGeomarksNewRequestBodyBufferJoinEnum;
(function (PostGeomarksNewRequestBodyBufferJoinEnum) {
    PostGeomarksNewRequestBodyBufferJoinEnum["Round"] = "ROUND";
    PostGeomarksNewRequestBodyBufferJoinEnum["Mitre"] = "MITRE";
    PostGeomarksNewRequestBodyBufferJoinEnum["Bevel"] = "BEVEL";
})(PostGeomarksNewRequestBodyBufferJoinEnum || (PostGeomarksNewRequestBodyBufferJoinEnum = {}));
export var PostGeomarksNewRequestBodyFormatEnum;
(function (PostGeomarksNewRequestBodyFormatEnum) {
    PostGeomarksNewRequestBodyFormatEnum["Json"] = "json";
    PostGeomarksNewRequestBodyFormatEnum["Xml"] = "xml";
    PostGeomarksNewRequestBodyFormatEnum["Kml"] = "kml";
    PostGeomarksNewRequestBodyFormatEnum["Kmz"] = "kmz";
    PostGeomarksNewRequestBodyFormatEnum["Shp"] = "shp";
    PostGeomarksNewRequestBodyFormatEnum["Shpz"] = "shpz";
    PostGeomarksNewRequestBodyFormatEnum["Geojson"] = "geojson";
    PostGeomarksNewRequestBodyFormatEnum["Gml"] = "gml";
    PostGeomarksNewRequestBodyFormatEnum["Wkt"] = "wkt";
})(PostGeomarksNewRequestBodyFormatEnum || (PostGeomarksNewRequestBodyFormatEnum = {}));
export var PostGeomarksNewRequestBodyResultFormatEnum;
(function (PostGeomarksNewRequestBodyResultFormatEnum) {
    PostGeomarksNewRequestBodyResultFormatEnum["Json"] = "json";
    PostGeomarksNewRequestBodyResultFormatEnum["Xml"] = "xml";
    PostGeomarksNewRequestBodyResultFormatEnum["Kml"] = "kml";
    PostGeomarksNewRequestBodyResultFormatEnum["Kmz"] = "kmz";
    PostGeomarksNewRequestBodyResultFormatEnum["Shp"] = "shp";
    PostGeomarksNewRequestBodyResultFormatEnum["Shpz"] = "shpz";
    PostGeomarksNewRequestBodyResultFormatEnum["Geojson"] = "geojson";
    PostGeomarksNewRequestBodyResultFormatEnum["Gml"] = "gml";
    PostGeomarksNewRequestBodyResultFormatEnum["Wkt"] = "wkt";
})(PostGeomarksNewRequestBodyResultFormatEnum || (PostGeomarksNewRequestBodyResultFormatEnum = {}));
var PostGeomarksNewRequestBody = /** @class */ (function (_super) {
    __extends(PostGeomarksNewRequestBody, _super);
    function PostGeomarksNewRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=allowOverlap;" }),
        __metadata("design:type", Boolean)
    ], PostGeomarksNewRequestBody.prototype, "allowOverlap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=body;" }),
        __metadata("design:type", String)
    ], PostGeomarksNewRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=bufferCap;" }),
        __metadata("design:type", String)
    ], PostGeomarksNewRequestBody.prototype, "bufferCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=bufferJoin;" }),
        __metadata("design:type", String)
    ], PostGeomarksNewRequestBody.prototype, "bufferJoin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=bufferMetres;" }),
        __metadata("design:type", Number)
    ], PostGeomarksNewRequestBody.prototype, "bufferMetres", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=bufferMitreLimit;" }),
        __metadata("design:type", Number)
    ], PostGeomarksNewRequestBody.prototype, "bufferMitreLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=bufferSegments;" }),
        __metadata("design:type", Number)
    ], PostGeomarksNewRequestBody.prototype, "bufferSegments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=callback;" }),
        __metadata("design:type", String)
    ], PostGeomarksNewRequestBody.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=failureRedirectUrl;" }),
        __metadata("design:type", String)
    ], PostGeomarksNewRequestBody.prototype, "failureRedirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=format;" }),
        __metadata("design:type", String)
    ], PostGeomarksNewRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=multiple;" }),
        __metadata("design:type", Boolean)
    ], PostGeomarksNewRequestBody.prototype, "multiple", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=redirectUrl;" }),
        __metadata("design:type", String)
    ], PostGeomarksNewRequestBody.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=resultFormat;" }),
        __metadata("design:type", String)
    ], PostGeomarksNewRequestBody.prototype, "resultFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=srid;" }),
        __metadata("design:type", Number)
    ], PostGeomarksNewRequestBody.prototype, "srid", void 0);
    return PostGeomarksNewRequestBody;
}(SpeakeasyBase));
export { PostGeomarksNewRequestBody };
var PostGeomarksNewRequest = /** @class */ (function (_super) {
    __extends(PostGeomarksNewRequest, _super);
    function PostGeomarksNewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", PostGeomarksNewRequestBody)
    ], PostGeomarksNewRequest.prototype, "request", void 0);
    return PostGeomarksNewRequest;
}(SpeakeasyBase));
export { PostGeomarksNewRequest };
var PostGeomarksNewResponse = /** @class */ (function (_super) {
    __extends(PostGeomarksNewResponse, _super);
    function PostGeomarksNewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGeomarksNewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGeomarksNewResponse.prototype, "statusCode", void 0);
    return PostGeomarksNewResponse;
}(SpeakeasyBase));
export { PostGeomarksNewResponse };
