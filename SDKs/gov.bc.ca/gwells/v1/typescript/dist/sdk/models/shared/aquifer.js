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
var Aquifer = /** @class */ (function (_super) {
    __extends(Aquifer, _super);
    function Aquifer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aquifer_id" }),
        __metadata("design:type", Number)
    ], Aquifer.prototype, "aquiferId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aquifer_name" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "aquiferName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=area" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "area", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=demand" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "demand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=demand_description" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "demandDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=known_water_use" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "knownWaterUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=known_water_use_description" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "knownWaterUseDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=litho_stratographic_unit" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "lithoStratographicUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location_description" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "locationDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mapping_year" }),
        __metadata("design:type", Number)
    ], Aquifer.prototype, "mappingYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=material" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "material", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=material_description" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "materialDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productivity" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "productivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productivity_description" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "productivityDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quality_concern" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "qualityConcern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quality_concern_description" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "qualityConcernDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtype" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "subtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtype_description" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "subtypeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vulnerability" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "vulnerability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vulnerability_description" }),
        __metadata("design:type", String)
    ], Aquifer.prototype, "vulnerabilityDescription", void 0);
    return Aquifer;
}(SpeakeasyBase));
export { Aquifer };
