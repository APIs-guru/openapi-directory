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
export var BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
(function (BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum) {
    BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum["DistanceUnitUnspecified"] = "DISTANCE_UNIT_UNSPECIFIED";
    BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum["DistanceUnitMiles"] = "DISTANCE_UNIT_MILES";
    BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum["DistanceUnitKilometers"] = "DISTANCE_UNIT_KILOMETERS";
})(BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum || (BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum = {}));
// BusinessChainAssignedTargetingOptionDetails
/**
 * Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
**/
var BusinessChainAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(BusinessChainAssignedTargetingOptionDetails, _super);
    function BusinessChainAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], BusinessChainAssignedTargetingOptionDetails.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proximityRadiusAmount" }),
        __metadata("design:type", Number)
    ], BusinessChainAssignedTargetingOptionDetails.prototype, "proximityRadiusAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proximityRadiusUnit" }),
        __metadata("design:type", String)
    ], BusinessChainAssignedTargetingOptionDetails.prototype, "proximityRadiusUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], BusinessChainAssignedTargetingOptionDetails.prototype, "targetingOptionId", void 0);
    return BusinessChainAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { BusinessChainAssignedTargetingOptionDetails };
// BusinessChainAssignedTargetingOptionDetailsInput
/**
 * Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
**/
var BusinessChainAssignedTargetingOptionDetailsInput = /** @class */ (function (_super) {
    __extends(BusinessChainAssignedTargetingOptionDetailsInput, _super);
    function BusinessChainAssignedTargetingOptionDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proximityRadiusAmount" }),
        __metadata("design:type", Number)
    ], BusinessChainAssignedTargetingOptionDetailsInput.prototype, "proximityRadiusAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proximityRadiusUnit" }),
        __metadata("design:type", String)
    ], BusinessChainAssignedTargetingOptionDetailsInput.prototype, "proximityRadiusUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], BusinessChainAssignedTargetingOptionDetailsInput.prototype, "targetingOptionId", void 0);
    return BusinessChainAssignedTargetingOptionDetailsInput;
}(SpeakeasyBase));
export { BusinessChainAssignedTargetingOptionDetailsInput };
