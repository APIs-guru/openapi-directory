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
export var PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
(function (PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum) {
    PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum["DistanceUnitUnspecified"] = "DISTANCE_UNIT_UNSPECIFIED";
    PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum["DistanceUnitMiles"] = "DISTANCE_UNIT_MILES";
    PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum["DistanceUnitKilometers"] = "DISTANCE_UNIT_KILOMETERS";
})(PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum || (PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum = {}));
// PoiAssignedTargetingOptionDetails
/**
 * Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
**/
var PoiAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(PoiAssignedTargetingOptionDetails, _super);
    function PoiAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], PoiAssignedTargetingOptionDetails.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], PoiAssignedTargetingOptionDetails.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], PoiAssignedTargetingOptionDetails.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proximityRadiusAmount" }),
        __metadata("design:type", Number)
    ], PoiAssignedTargetingOptionDetails.prototype, "proximityRadiusAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proximityRadiusUnit" }),
        __metadata("design:type", String)
    ], PoiAssignedTargetingOptionDetails.prototype, "proximityRadiusUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], PoiAssignedTargetingOptionDetails.prototype, "targetingOptionId", void 0);
    return PoiAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { PoiAssignedTargetingOptionDetails };
// PoiAssignedTargetingOptionDetailsInput
/**
 * Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
**/
var PoiAssignedTargetingOptionDetailsInput = /** @class */ (function (_super) {
    __extends(PoiAssignedTargetingOptionDetailsInput, _super);
    function PoiAssignedTargetingOptionDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proximityRadiusAmount" }),
        __metadata("design:type", Number)
    ], PoiAssignedTargetingOptionDetailsInput.prototype, "proximityRadiusAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proximityRadiusUnit" }),
        __metadata("design:type", String)
    ], PoiAssignedTargetingOptionDetailsInput.prototype, "proximityRadiusUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], PoiAssignedTargetingOptionDetailsInput.prototype, "targetingOptionId", void 0);
    return PoiAssignedTargetingOptionDetailsInput;
}(SpeakeasyBase));
export { PoiAssignedTargetingOptionDetailsInput };
