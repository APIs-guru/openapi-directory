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
import { OrbitClass } from "./orbitclass";
var OrbitalData = /** @class */ (function (_super) {
    __extends(OrbitalData, _super);
    function OrbitalData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aphelion_distance" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "aphelionDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ascending_node_longitude" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "ascendingNodeLongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_arc_in_days" }),
        __metadata("design:type", Number)
    ], OrbitalData.prototype, "dataArcInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eccentricity" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "eccentricity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=epoch_osculation" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "epochOsculation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equinox" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "equinox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_observation_date" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "firstObservationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inclination" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "inclination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jupiter_tisserand_invariant" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "jupiterTisserandInvariant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_observation_date" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "lastObservationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mean_anomaly" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "meanAnomaly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mean_motion" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "meanMotion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimum_orbit_intersection" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "minimumOrbitIntersection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=observations_used" }),
        __metadata("design:type", Number)
    ], OrbitalData.prototype, "observationsUsed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orbit_class" }),
        __metadata("design:type", OrbitClass)
    ], OrbitalData.prototype, "orbitClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orbit_determination_date" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "orbitDeterminationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orbit_id" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "orbitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orbit_uncertainty" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "orbitUncertainty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orbital_period" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "orbitalPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perihelion_argument" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "perihelionArgument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perihelion_distance" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "perihelionDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perihelion_time" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "perihelionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=semi_major_axis" }),
        __metadata("design:type", String)
    ], OrbitalData.prototype, "semiMajorAxis", void 0);
    return OrbitalData;
}(SpeakeasyBase));
export { OrbitalData };
