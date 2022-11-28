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
var LithologyDescription = /** @class */ (function (_super) {
    __extends(LithologyDescription, _super);
    function LithologyDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lithology_colour" }),
        __metadata("design:type", String)
    ], LithologyDescription.prototype, "lithologyColour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lithology_from" }),
        __metadata("design:type", String)
    ], LithologyDescription.prototype, "lithologyFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lithology_hardness" }),
        __metadata("design:type", String)
    ], LithologyDescription.prototype, "lithologyHardness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lithology_moisture" }),
        __metadata("design:type", String)
    ], LithologyDescription.prototype, "lithologyMoisture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lithology_raw_data" }),
        __metadata("design:type", String)
    ], LithologyDescription.prototype, "lithologyRawData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lithology_to" }),
        __metadata("design:type", String)
    ], LithologyDescription.prototype, "lithologyTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=water_bearing_estimated_flow" }),
        __metadata("design:type", String)
    ], LithologyDescription.prototype, "waterBearingEstimatedFlow", void 0);
    return LithologyDescription;
}(SpeakeasyBase));
export { LithologyDescription };
