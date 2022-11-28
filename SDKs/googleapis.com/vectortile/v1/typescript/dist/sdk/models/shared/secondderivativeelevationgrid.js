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
// SecondDerivativeElevationGrid
/**
 * A packed representation of a 2D grid of uniformly spaced points containing elevation data. Each point within the grid represents the altitude in meters above average sea level at that location within the tile. Elevations provided are (generally) relative to the EGM96 geoid, however some areas will be relative to NAVD88. EGM96 and NAVD88 are off by no more than 2 meters. The grid is oriented north-west to south-east, as illustrated: rows[0].a[0] rows[0].a[m] +-----------------+ | | | N | | ^ | | | | | W <-----> E | | | | | v | | S | | | +-----------------+ rows[n].a[0] rows[n].a[m] Rather than storing the altitudes directly, we store the diffs of the diffs between them as integers at some requested level of precision to take advantage of integer packing. Note that the data is packed in such a way that is fast to decode in Unity and that further optimizes wire size.
**/
var SecondDerivativeElevationGrid = /** @class */ (function (_super) {
    __extends(SecondDerivativeElevationGrid, _super);
    function SecondDerivativeElevationGrid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=altitudeMultiplier" }),
        __metadata("design:type", Number)
    ], SecondDerivativeElevationGrid.prototype, "altitudeMultiplier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnCount" }),
        __metadata("design:type", Number)
    ], SecondDerivativeElevationGrid.prototype, "columnCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encodedData" }),
        __metadata("design:type", String)
    ], SecondDerivativeElevationGrid.prototype, "encodedData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowCount" }),
        __metadata("design:type", Number)
    ], SecondDerivativeElevationGrid.prototype, "rowCount", void 0);
    return SecondDerivativeElevationGrid;
}(SpeakeasyBase));
export { SecondDerivativeElevationGrid };
