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
import { ConditionValue } from "./conditionvalue";
export var BooleanConditionTypeEnum;
(function (BooleanConditionTypeEnum) {
    BooleanConditionTypeEnum["ConditionTypeUnspecified"] = "CONDITION_TYPE_UNSPECIFIED";
    BooleanConditionTypeEnum["NumberGreater"] = "NUMBER_GREATER";
    BooleanConditionTypeEnum["NumberGreaterThanEq"] = "NUMBER_GREATER_THAN_EQ";
    BooleanConditionTypeEnum["NumberLess"] = "NUMBER_LESS";
    BooleanConditionTypeEnum["NumberLessThanEq"] = "NUMBER_LESS_THAN_EQ";
    BooleanConditionTypeEnum["NumberEq"] = "NUMBER_EQ";
    BooleanConditionTypeEnum["NumberNotEq"] = "NUMBER_NOT_EQ";
    BooleanConditionTypeEnum["NumberBetween"] = "NUMBER_BETWEEN";
    BooleanConditionTypeEnum["NumberNotBetween"] = "NUMBER_NOT_BETWEEN";
    BooleanConditionTypeEnum["TextContains"] = "TEXT_CONTAINS";
    BooleanConditionTypeEnum["TextNotContains"] = "TEXT_NOT_CONTAINS";
    BooleanConditionTypeEnum["TextStartsWith"] = "TEXT_STARTS_WITH";
    BooleanConditionTypeEnum["TextEndsWith"] = "TEXT_ENDS_WITH";
    BooleanConditionTypeEnum["TextEq"] = "TEXT_EQ";
    BooleanConditionTypeEnum["TextIsEmail"] = "TEXT_IS_EMAIL";
    BooleanConditionTypeEnum["TextIsUrl"] = "TEXT_IS_URL";
    BooleanConditionTypeEnum["DateEq"] = "DATE_EQ";
    BooleanConditionTypeEnum["DateBefore"] = "DATE_BEFORE";
    BooleanConditionTypeEnum["DateAfter"] = "DATE_AFTER";
    BooleanConditionTypeEnum["DateOnOrBefore"] = "DATE_ON_OR_BEFORE";
    BooleanConditionTypeEnum["DateOnOrAfter"] = "DATE_ON_OR_AFTER";
    BooleanConditionTypeEnum["DateBetween"] = "DATE_BETWEEN";
    BooleanConditionTypeEnum["DateNotBetween"] = "DATE_NOT_BETWEEN";
    BooleanConditionTypeEnum["DateIsValid"] = "DATE_IS_VALID";
    BooleanConditionTypeEnum["OneOfRange"] = "ONE_OF_RANGE";
    BooleanConditionTypeEnum["OneOfList"] = "ONE_OF_LIST";
    BooleanConditionTypeEnum["Blank"] = "BLANK";
    BooleanConditionTypeEnum["NotBlank"] = "NOT_BLANK";
    BooleanConditionTypeEnum["CustomFormula"] = "CUSTOM_FORMULA";
    BooleanConditionTypeEnum["Boolean"] = "BOOLEAN";
    BooleanConditionTypeEnum["TextNotEq"] = "TEXT_NOT_EQ";
    BooleanConditionTypeEnum["DateNotEq"] = "DATE_NOT_EQ";
})(BooleanConditionTypeEnum || (BooleanConditionTypeEnum = {}));
// BooleanCondition
/**
 * A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters.
**/
var BooleanCondition = /** @class */ (function (_super) {
    __extends(BooleanCondition, _super);
    function BooleanCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], BooleanCondition.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values", elemType: ConditionValue }),
        __metadata("design:type", Array)
    ], BooleanCondition.prototype, "values", void 0);
    return BooleanCondition;
}(SpeakeasyBase));
export { BooleanCondition };
