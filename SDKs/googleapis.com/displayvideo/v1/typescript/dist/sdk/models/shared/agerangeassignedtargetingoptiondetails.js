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
export var AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum;
(function (AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum) {
    AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum["AgeRangeUnspecified"] = "AGE_RANGE_UNSPECIFIED";
    AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum["AgeRange1824"] = "AGE_RANGE_18_24";
    AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum["AgeRange2534"] = "AGE_RANGE_25_34";
    AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum["AgeRange3544"] = "AGE_RANGE_35_44";
    AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum["AgeRange4554"] = "AGE_RANGE_45_54";
    AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum["AgeRange5564"] = "AGE_RANGE_55_64";
    AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum["AgeRange65Plus"] = "AGE_RANGE_65_PLUS";
    AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum["AgeRangeUnknown"] = "AGE_RANGE_UNKNOWN";
})(AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum || (AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = {}));
// AgeRangeAssignedTargetingOptionDetails
/**
 * Represents a targetable age range. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AGE_RANGE`.
**/
var AgeRangeAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(AgeRangeAssignedTargetingOptionDetails, _super);
    function AgeRangeAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageRange" }),
        __metadata("design:type", String)
    ], AgeRangeAssignedTargetingOptionDetails.prototype, "ageRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], AgeRangeAssignedTargetingOptionDetails.prototype, "targetingOptionId", void 0);
    return AgeRangeAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { AgeRangeAssignedTargetingOptionDetails };
