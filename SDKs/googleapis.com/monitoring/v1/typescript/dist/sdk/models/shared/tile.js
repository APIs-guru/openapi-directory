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
import { Widget } from "./widget";
// Tile
/**
 * A single tile in the mosaic. The placement and size of the tile are configurable.
**/
var Tile = /** @class */ (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], Tile.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=widget" }),
        __metadata("design:type", Widget)
    ], Tile.prototype, "widget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], Tile.prototype, "width", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xPos" }),
        __metadata("design:type", Number)
    ], Tile.prototype, "xPos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yPos" }),
        __metadata("design:type", Number)
    ], Tile.prototype, "yPos", void 0);
    return Tile;
}(SpeakeasyBase));
export { Tile };
