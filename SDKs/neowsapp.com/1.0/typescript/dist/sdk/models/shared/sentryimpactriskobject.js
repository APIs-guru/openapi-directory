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
var SentryImpactRiskObject = /** @class */ (function (_super) {
    __extends(SentryImpactRiskObject, _super);
    function SentryImpactRiskObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Palermo_scale_max" }),
        __metadata("design:type", String)
    ], SentryImpactRiskObject.prototype, "palermoScaleMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=absolute_magnitude" }),
        __metadata("design:type", String)
    ], SentryImpactRiskObject.prototype, "absoluteMagnitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=average_lunar_distance" }),
        __metadata("design:type", Number)
    ], SentryImpactRiskObject.prototype, "averageLunarDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=designation" }),
        __metadata("design:type", String)
    ], SentryImpactRiskObject.prototype, "designation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimated_diameter" }),
        __metadata("design:type", String)
    ], SentryImpactRiskObject.prototype, "estimatedDiameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullname" }),
        __metadata("design:type", String)
    ], SentryImpactRiskObject.prototype, "fullname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impact_probability" }),
        __metadata("design:type", String)
    ], SentryImpactRiskObject.prototype, "impactProbability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_active_sentry_object" }),
        __metadata("design:type", Boolean)
    ], SentryImpactRiskObject.prototype, "isActiveSentryObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_obs" }),
        __metadata("design:type", String)
    ], SentryImpactRiskObject.prototype, "lastObs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_obs_jd" }),
        __metadata("design:type", String)
    ], SentryImpactRiskObject.prototype, "lastObsJd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=palermo_scale_ave" }),
        __metadata("design:type", String)
    ], SentryImpactRiskObject.prototype, "palermoScaleAve", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=potential_impacts" }),
        __metadata("design:type", String)
    ], SentryImpactRiskObject.prototype, "potentialImpacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=removal_date" }),
        __metadata("design:type", String)
    ], SentryImpactRiskObject.prototype, "removalDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sentryId" }),
        __metadata("design:type", String)
    ], SentryImpactRiskObject.prototype, "sentryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=torino_scale" }),
        __metadata("design:type", String)
    ], SentryImpactRiskObject.prototype, "torinoScale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=v_infinity" }),
        __metadata("design:type", String)
    ], SentryImpactRiskObject.prototype, "vInfinity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year_range_max" }),
        __metadata("design:type", String)
    ], SentryImpactRiskObject.prototype, "yearRangeMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year_range_min" }),
        __metadata("design:type", String)
    ], SentryImpactRiskObject.prototype, "yearRangeMin", void 0);
    return SentryImpactRiskObject;
}(SpeakeasyBase));
export { SentryImpactRiskObject };
