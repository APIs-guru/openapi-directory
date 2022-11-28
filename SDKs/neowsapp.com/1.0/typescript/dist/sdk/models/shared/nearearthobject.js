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
import { CloseApproachData } from "./closeapproachdata";
import { EstimatedDiameterContainer } from "./estimateddiametercontainer";
import { OrbitalData } from "./orbitaldata";
var NearEarthObject = /** @class */ (function (_super) {
    __extends(NearEarthObject, _super);
    function NearEarthObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=absolute_magnitude_h" }),
        __metadata("design:type", Number)
    ], NearEarthObject.prototype, "absoluteMagnitudeH", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=close_approach_data", elemType: CloseApproachData }),
        __metadata("design:type", Array)
    ], NearEarthObject.prototype, "closeApproachData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=designation" }),
        __metadata("design:type", String)
    ], NearEarthObject.prototype, "designation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimated_diameter" }),
        __metadata("design:type", EstimatedDiameterContainer)
    ], NearEarthObject.prototype, "estimatedDiameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_potentially_hazardous_asteroid" }),
        __metadata("design:type", Boolean)
    ], NearEarthObject.prototype, "isPotentiallyHazardousAsteroid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_sentry_object" }),
        __metadata("design:type", Boolean)
    ], NearEarthObject.prototype, "isSentryObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NearEarthObject.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name_limited" }),
        __metadata("design:type", String)
    ], NearEarthObject.prototype, "nameLimited", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nasa_jpl_url" }),
        __metadata("design:type", String)
    ], NearEarthObject.prototype, "nasaJplUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=neo_reference_id" }),
        __metadata("design:type", String)
    ], NearEarthObject.prototype, "neoReferenceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orbital_data" }),
        __metadata("design:type", OrbitalData)
    ], NearEarthObject.prototype, "orbitalData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sentry_data" }),
        __metadata("design:type", String)
    ], NearEarthObject.prototype, "sentryData", void 0);
    return NearEarthObject;
}(SpeakeasyBase));
export { NearEarthObject };
