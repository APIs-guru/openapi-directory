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
// TileJson
/**
 * TileJSON model.
 * Based on https://github.com/mapbox/tilejson-spec/tree/master/2.2.0
**/
var TileJson = /** @class */ (function (_super) {
    __extends(TileJson, _super);
    function TileJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribution" }),
        __metadata("design:type", String)
    ], TileJson.prototype, "attribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bounds" }),
        __metadata("design:type", Array)
    ], TileJson.prototype, "bounds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], TileJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TileJson.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grids" }),
        __metadata("design:type", Array)
    ], TileJson.prototype, "grids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legend" }),
        __metadata("design:type", String)
    ], TileJson.prototype, "legend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxzoom" }),
        __metadata("design:type", Number)
    ], TileJson.prototype, "maxzoom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minzoom" }),
        __metadata("design:type", Number)
    ], TileJson.prototype, "minzoom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TileJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheme" }),
        __metadata("design:type", String)
    ], TileJson.prototype, "scheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", String)
    ], TileJson.prototype, "template", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tilejson" }),
        __metadata("design:type", String)
    ], TileJson.prototype, "tilejson", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tiles" }),
        __metadata("design:type", Array)
    ], TileJson.prototype, "tiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], TileJson.prototype, "version", void 0);
    return TileJson;
}(SpeakeasyBase));
export { TileJson };
