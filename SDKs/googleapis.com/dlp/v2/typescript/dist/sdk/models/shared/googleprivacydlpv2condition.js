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
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";
export var GooglePrivacyDlpV2ConditionOperatorEnum;
(function (GooglePrivacyDlpV2ConditionOperatorEnum) {
    GooglePrivacyDlpV2ConditionOperatorEnum["RelationalOperatorUnspecified"] = "RELATIONAL_OPERATOR_UNSPECIFIED";
    GooglePrivacyDlpV2ConditionOperatorEnum["EqualTo"] = "EQUAL_TO";
    GooglePrivacyDlpV2ConditionOperatorEnum["NotEqualTo"] = "NOT_EQUAL_TO";
    GooglePrivacyDlpV2ConditionOperatorEnum["GreaterThan"] = "GREATER_THAN";
    GooglePrivacyDlpV2ConditionOperatorEnum["LessThan"] = "LESS_THAN";
    GooglePrivacyDlpV2ConditionOperatorEnum["GreaterThanOrEquals"] = "GREATER_THAN_OR_EQUALS";
    GooglePrivacyDlpV2ConditionOperatorEnum["LessThanOrEquals"] = "LESS_THAN_OR_EQUALS";
    GooglePrivacyDlpV2ConditionOperatorEnum["Exists"] = "EXISTS";
})(GooglePrivacyDlpV2ConditionOperatorEnum || (GooglePrivacyDlpV2ConditionOperatorEnum = {}));
// GooglePrivacyDlpV2Condition
/**
 * The field type of `value` and `field` do not need to match to be considered equal, but not all comparisons are possible. EQUAL_TO and NOT_EQUAL_TO attempt to compare even with incompatible types, but all other comparisons are invalid with incompatible types. A `value` of type: - `string` can be compared against all other types - `boolean` can only be compared against other booleans - `integer` can be compared against doubles or a string if the string value can be parsed as an integer. - `double` can be compared against integers or a string if the string can be parsed as a double. - `Timestamp` can be compared against strings in RFC 3339 date string format. - `TimeOfDay` can be compared against timestamps and strings in the format of 'HH:mm:ss'. If we fail to compare do to type mismatch, a warning will be given and the condition will evaluate to false.
**/
var GooglePrivacyDlpV2Condition = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2Condition, _super);
    function GooglePrivacyDlpV2Condition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", GooglePrivacyDlpV2FieldId)
    ], GooglePrivacyDlpV2Condition.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2Condition.prototype, "operator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", GooglePrivacyDlpV2Value)
    ], GooglePrivacyDlpV2Condition.prototype, "value", void 0);
    return GooglePrivacyDlpV2Condition;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2Condition };
