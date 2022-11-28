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
var GeolayerdataCommon = /** @class */ (function (_super) {
    __extends(GeolayerdataCommon, _super);
    function GeolayerdataCommon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lang" }),
        __metadata("design:type", String)
    ], GeolayerdataCommon.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previewImageUrl" }),
        __metadata("design:type", String)
    ], GeolayerdataCommon.prototype, "previewImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snippet" }),
        __metadata("design:type", String)
    ], GeolayerdataCommon.prototype, "snippet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snippetUrl" }),
        __metadata("design:type", String)
    ], GeolayerdataCommon.prototype, "snippetUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GeolayerdataCommon.prototype, "title", void 0);
    return GeolayerdataCommon;
}(SpeakeasyBase));
export { GeolayerdataCommon };
var GeolayerdataGeoViewportHi = /** @class */ (function (_super) {
    __extends(GeolayerdataGeoViewportHi, _super);
    function GeolayerdataGeoViewportHi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GeolayerdataGeoViewportHi.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GeolayerdataGeoViewportHi.prototype, "longitude", void 0);
    return GeolayerdataGeoViewportHi;
}(SpeakeasyBase));
export { GeolayerdataGeoViewportHi };
var GeolayerdataGeoViewportLo = /** @class */ (function (_super) {
    __extends(GeolayerdataGeoViewportLo, _super);
    function GeolayerdataGeoViewportLo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GeolayerdataGeoViewportLo.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GeolayerdataGeoViewportLo.prototype, "longitude", void 0);
    return GeolayerdataGeoViewportLo;
}(SpeakeasyBase));
export { GeolayerdataGeoViewportLo };
// GeolayerdataGeoViewport
/**
 * The viewport for showing this location. This is a latitude, longitude rectangle.
**/
var GeolayerdataGeoViewport = /** @class */ (function (_super) {
    __extends(GeolayerdataGeoViewport, _super);
    function GeolayerdataGeoViewport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hi" }),
        __metadata("design:type", GeolayerdataGeoViewportHi)
    ], GeolayerdataGeoViewport.prototype, "hi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lo" }),
        __metadata("design:type", GeolayerdataGeoViewportLo)
    ], GeolayerdataGeoViewport.prototype, "lo", void 0);
    return GeolayerdataGeoViewport;
}(SpeakeasyBase));
export { GeolayerdataGeoViewport };
var GeolayerdataGeo = /** @class */ (function (_super) {
    __extends(GeolayerdataGeo, _super);
    function GeolayerdataGeo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundary" }),
        __metadata("design:type", Array)
    ], GeolayerdataGeo.prototype, "boundary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cachePolicy" }),
        __metadata("design:type", String)
    ], GeolayerdataGeo.prototype, "cachePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], GeolayerdataGeo.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GeolayerdataGeo.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GeolayerdataGeo.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mapType" }),
        __metadata("design:type", String)
    ], GeolayerdataGeo.prototype, "mapType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewport" }),
        __metadata("design:type", GeolayerdataGeoViewport)
    ], GeolayerdataGeo.prototype, "viewport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zoom" }),
        __metadata("design:type", Number)
    ], GeolayerdataGeo.prototype, "zoom", void 0);
    return GeolayerdataGeo;
}(SpeakeasyBase));
export { GeolayerdataGeo };
var Geolayerdata = /** @class */ (function (_super) {
    __extends(Geolayerdata, _super);
    function Geolayerdata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=common" }),
        __metadata("design:type", GeolayerdataCommon)
    ], Geolayerdata.prototype, "common", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geo" }),
        __metadata("design:type", GeolayerdataGeo)
    ], Geolayerdata.prototype, "geo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Geolayerdata.prototype, "kind", void 0);
    return Geolayerdata;
}(SpeakeasyBase));
export { Geolayerdata };
