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
import { FieldReference } from "./fieldreference";
import { Value } from "./value";
export var FieldFilterOpEnum;
(function (FieldFilterOpEnum) {
    FieldFilterOpEnum["OperatorUnspecified"] = "OPERATOR_UNSPECIFIED";
    FieldFilterOpEnum["LessThan"] = "LESS_THAN";
    FieldFilterOpEnum["LessThanOrEqual"] = "LESS_THAN_OR_EQUAL";
    FieldFilterOpEnum["GreaterThan"] = "GREATER_THAN";
    FieldFilterOpEnum["GreaterThanOrEqual"] = "GREATER_THAN_OR_EQUAL";
    FieldFilterOpEnum["Equal"] = "EQUAL";
    FieldFilterOpEnum["NotEqual"] = "NOT_EQUAL";
    FieldFilterOpEnum["ArrayContains"] = "ARRAY_CONTAINS";
    FieldFilterOpEnum["In"] = "IN";
    FieldFilterOpEnum["ArrayContainsAny"] = "ARRAY_CONTAINS_ANY";
    FieldFilterOpEnum["NotIn"] = "NOT_IN";
})(FieldFilterOpEnum || (FieldFilterOpEnum = {}));
// FieldFilter
/**
 * A filter on a specific field.
**/
var FieldFilter = /** @class */ (function (_super) {
    __extends(FieldFilter, _super);
    function FieldFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", FieldReference)
    ], FieldFilter.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=op" }),
        __metadata("design:type", String)
    ], FieldFilter.prototype, "op", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Value)
    ], FieldFilter.prototype, "value", void 0);
    return FieldFilter;
}(SpeakeasyBase));
export { FieldFilter };
