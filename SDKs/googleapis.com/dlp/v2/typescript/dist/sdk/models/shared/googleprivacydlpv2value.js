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
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeTimeOfDay } from "./googletypetimeofday";
export var GooglePrivacyDlpV2ValueDayOfWeekValueEnum;
(function (GooglePrivacyDlpV2ValueDayOfWeekValueEnum) {
    GooglePrivacyDlpV2ValueDayOfWeekValueEnum["DayOfWeekUnspecified"] = "DAY_OF_WEEK_UNSPECIFIED";
    GooglePrivacyDlpV2ValueDayOfWeekValueEnum["Monday"] = "MONDAY";
    GooglePrivacyDlpV2ValueDayOfWeekValueEnum["Tuesday"] = "TUESDAY";
    GooglePrivacyDlpV2ValueDayOfWeekValueEnum["Wednesday"] = "WEDNESDAY";
    GooglePrivacyDlpV2ValueDayOfWeekValueEnum["Thursday"] = "THURSDAY";
    GooglePrivacyDlpV2ValueDayOfWeekValueEnum["Friday"] = "FRIDAY";
    GooglePrivacyDlpV2ValueDayOfWeekValueEnum["Saturday"] = "SATURDAY";
    GooglePrivacyDlpV2ValueDayOfWeekValueEnum["Sunday"] = "SUNDAY";
})(GooglePrivacyDlpV2ValueDayOfWeekValueEnum || (GooglePrivacyDlpV2ValueDayOfWeekValueEnum = {}));
// GooglePrivacyDlpV2Value
/**
 * Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data.
**/
var GooglePrivacyDlpV2Value = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2Value, _super);
    function GooglePrivacyDlpV2Value() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=booleanValue" }),
        __metadata("design:type", Boolean)
    ], GooglePrivacyDlpV2Value.prototype, "booleanValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateValue" }),
        __metadata("design:type", GoogleTypeDate)
    ], GooglePrivacyDlpV2Value.prototype, "dateValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayOfWeekValue" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2Value.prototype, "dayOfWeekValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floatValue" }),
        __metadata("design:type", Number)
    ], GooglePrivacyDlpV2Value.prototype, "floatValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integerValue" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2Value.prototype, "integerValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringValue" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2Value.prototype, "stringValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeValue" }),
        __metadata("design:type", GoogleTypeTimeOfDay)
    ], GooglePrivacyDlpV2Value.prototype, "timeValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestampValue" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2Value.prototype, "timestampValue", void 0);
    return GooglePrivacyDlpV2Value;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2Value };
