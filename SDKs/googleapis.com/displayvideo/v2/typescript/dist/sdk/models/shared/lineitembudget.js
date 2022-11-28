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
export var LineItemBudgetBudgetAllocationTypeEnum;
(function (LineItemBudgetBudgetAllocationTypeEnum) {
    LineItemBudgetBudgetAllocationTypeEnum["LineItemBudgetAllocationTypeUnspecified"] = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNSPECIFIED";
    LineItemBudgetBudgetAllocationTypeEnum["LineItemBudgetAllocationTypeAutomatic"] = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC";
    LineItemBudgetBudgetAllocationTypeEnum["LineItemBudgetAllocationTypeFixed"] = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED";
    LineItemBudgetBudgetAllocationTypeEnum["LineItemBudgetAllocationTypeUnlimited"] = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED";
})(LineItemBudgetBudgetAllocationTypeEnum || (LineItemBudgetBudgetAllocationTypeEnum = {}));
export var LineItemBudgetBudgetUnitEnum;
(function (LineItemBudgetBudgetUnitEnum) {
    LineItemBudgetBudgetUnitEnum["BudgetUnitUnspecified"] = "BUDGET_UNIT_UNSPECIFIED";
    LineItemBudgetBudgetUnitEnum["BudgetUnitCurrency"] = "BUDGET_UNIT_CURRENCY";
    LineItemBudgetBudgetUnitEnum["BudgetUnitImpressions"] = "BUDGET_UNIT_IMPRESSIONS";
})(LineItemBudgetBudgetUnitEnum || (LineItemBudgetBudgetUnitEnum = {}));
// LineItemBudget
/**
 * Settings that control how budget is allocated.
**/
var LineItemBudget = /** @class */ (function (_super) {
    __extends(LineItemBudget, _super);
    function LineItemBudget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=budgetAllocationType" }),
        __metadata("design:type", String)
    ], LineItemBudget.prototype, "budgetAllocationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=budgetUnit" }),
        __metadata("design:type", String)
    ], LineItemBudget.prototype, "budgetUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxAmount" }),
        __metadata("design:type", String)
    ], LineItemBudget.prototype, "maxAmount", void 0);
    return LineItemBudget;
}(SpeakeasyBase));
export { LineItemBudget };
// LineItemBudgetInput
/**
 * Settings that control how budget is allocated.
**/
var LineItemBudgetInput = /** @class */ (function (_super) {
    __extends(LineItemBudgetInput, _super);
    function LineItemBudgetInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=budgetAllocationType" }),
        __metadata("design:type", String)
    ], LineItemBudgetInput.prototype, "budgetAllocationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxAmount" }),
        __metadata("design:type", String)
    ], LineItemBudgetInput.prototype, "maxAmount", void 0);
    return LineItemBudgetInput;
}(SpeakeasyBase));
export { LineItemBudgetInput };
