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
export var HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum;
(function (HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum) {
    HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum["HouseholdIncomeUnspecified"] = "HOUSEHOLD_INCOME_UNSPECIFIED";
    HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum["HouseholdIncomeUnknown"] = "HOUSEHOLD_INCOME_UNKNOWN";
    HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum["HouseholdIncomeLower50Percent"] = "HOUSEHOLD_INCOME_LOWER_50_PERCENT";
    HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum["HouseholdIncomeTop41To50Percent"] = "HOUSEHOLD_INCOME_TOP_41_TO_50_PERCENT";
    HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum["HouseholdIncomeTop31To40Percent"] = "HOUSEHOLD_INCOME_TOP_31_TO_40_PERCENT";
    HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum["HouseholdIncomeTop21To30Percent"] = "HOUSEHOLD_INCOME_TOP_21_TO_30_PERCENT";
    HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum["HouseholdIncomeTop11To20Percent"] = "HOUSEHOLD_INCOME_TOP_11_TO_20_PERCENT";
    HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum["HouseholdIncomeTop10Percent"] = "HOUSEHOLD_INCOME_TOP_10_PERCENT";
})(HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum || (HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum = {}));
// HouseholdIncomeAssignedTargetingOptionDetails
/**
 * Details for assigned household income targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`.
**/
var HouseholdIncomeAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(HouseholdIncomeAssignedTargetingOptionDetails, _super);
    function HouseholdIncomeAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=householdIncome" }),
        __metadata("design:type", String)
    ], HouseholdIncomeAssignedTargetingOptionDetails.prototype, "householdIncome", void 0);
    return HouseholdIncomeAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { HouseholdIncomeAssignedTargetingOptionDetails };
