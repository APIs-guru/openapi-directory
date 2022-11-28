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
export var ConstraintViolationConstraintTypeEnum;
(function (ConstraintViolationConstraintTypeEnum) {
    ConstraintViolationConstraintTypeEnum["MustBeFalse"] = "MUST_BE_FALSE";
    ConstraintViolationConstraintTypeEnum["MustBeTrue"] = "MUST_BE_TRUE";
    ConstraintViolationConstraintTypeEnum["MustBeLessThan"] = "MUST_BE_LESS_THAN";
    ConstraintViolationConstraintTypeEnum["MustBeGreaterThan"] = "MUST_BE_GREATER_THAN";
    ConstraintViolationConstraintTypeEnum["DigitOutOfBounds"] = "DIGIT_OUT_OF_BOUNDS";
    ConstraintViolationConstraintTypeEnum["DateMustBeInTheFuture"] = "DATE_MUST_BE_IN_THE_FUTURE";
    ConstraintViolationConstraintTypeEnum["MustBeLessOrEqualThan"] = "MUST_BE_LESS_OR_EQUAL_THAN";
    ConstraintViolationConstraintTypeEnum["MustBeGreaterOrEqualTo"] = "MUST_BE_GREATER_OR_EQUAL_TO";
    ConstraintViolationConstraintTypeEnum["MustNotBeNull"] = "MUST_NOT_BE_NULL";
    ConstraintViolationConstraintTypeEnum["MustBeNull"] = "MUST_BE_NULL";
    ConstraintViolationConstraintTypeEnum["DateMustBeInThePast"] = "DATE_MUST_BE_IN_THE_PAST";
    ConstraintViolationConstraintTypeEnum["MustMatchPattern"] = "MUST_MATCH_PATTERN";
    ConstraintViolationConstraintTypeEnum["InvalidSize"] = "INVALID_SIZE";
    ConstraintViolationConstraintTypeEnum["InvalidEmail"] = "INVALID_EMAIL";
    ConstraintViolationConstraintTypeEnum["MustNotBeEmpty"] = "MUST_NOT_BE_EMPTY";
    ConstraintViolationConstraintTypeEnum["InvalidRange"] = "INVALID_RANGE";
    ConstraintViolationConstraintTypeEnum["Unknown"] = "UNKNOWN";
})(ConstraintViolationConstraintTypeEnum || (ConstraintViolationConstraintTypeEnum = {}));
var ConstraintViolation = /** @class */ (function (_super) {
    __extends(ConstraintViolation, _super);
    function ConstraintViolation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=constraintType" }),
        __metadata("design:type", String)
    ], ConstraintViolation.prototype, "constraintType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=developerMessage" }),
        __metadata("design:type", String)
    ], ConstraintViolation.prototype, "developerMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expected" }),
        __metadata("design:type", String)
    ], ConstraintViolation.prototype, "expected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=propertyName" }),
        __metadata("design:type", String)
    ], ConstraintViolation.prototype, "propertyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ConstraintViolation.prototype, "value", void 0);
    return ConstraintViolation;
}(SpeakeasyBase));
export { ConstraintViolation };
