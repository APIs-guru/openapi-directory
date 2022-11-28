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
import { EnergyEfficiency } from "./energyefficiency";
import { SustainabilityCertifications } from "./sustainabilitycertifications";
import { SustainableSourcing } from "./sustainablesourcing";
import { WasteReduction } from "./wastereduction";
import { WaterConservation } from "./waterconservation";
import { EnergyEfficiencyInput } from "./energyefficiency";
// Sustainability
/**
 * Sustainability practices implemented at the hotel.
**/
var Sustainability = /** @class */ (function (_super) {
    __extends(Sustainability, _super);
    function Sustainability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energyEfficiency" }),
        __metadata("design:type", EnergyEfficiency)
    ], Sustainability.prototype, "energyEfficiency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sustainabilityCertifications" }),
        __metadata("design:type", SustainabilityCertifications)
    ], Sustainability.prototype, "sustainabilityCertifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sustainableSourcing" }),
        __metadata("design:type", SustainableSourcing)
    ], Sustainability.prototype, "sustainableSourcing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wasteReduction" }),
        __metadata("design:type", WasteReduction)
    ], Sustainability.prototype, "wasteReduction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waterConservation" }),
        __metadata("design:type", WaterConservation)
    ], Sustainability.prototype, "waterConservation", void 0);
    return Sustainability;
}(SpeakeasyBase));
export { Sustainability };
// SustainabilityInput
/**
 * Sustainability practices implemented at the hotel.
**/
var SustainabilityInput = /** @class */ (function (_super) {
    __extends(SustainabilityInput, _super);
    function SustainabilityInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energyEfficiency" }),
        __metadata("design:type", EnergyEfficiencyInput)
    ], SustainabilityInput.prototype, "energyEfficiency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sustainabilityCertifications" }),
        __metadata("design:type", SustainabilityCertifications)
    ], SustainabilityInput.prototype, "sustainabilityCertifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sustainableSourcing" }),
        __metadata("design:type", SustainableSourcing)
    ], SustainabilityInput.prototype, "sustainableSourcing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wasteReduction" }),
        __metadata("design:type", WasteReduction)
    ], SustainabilityInput.prototype, "wasteReduction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waterConservation" }),
        __metadata("design:type", WaterConservation)
    ], SustainabilityInput.prototype, "waterConservation", void 0);
    return SustainabilityInput;
}(SpeakeasyBase));
export { SustainabilityInput };
