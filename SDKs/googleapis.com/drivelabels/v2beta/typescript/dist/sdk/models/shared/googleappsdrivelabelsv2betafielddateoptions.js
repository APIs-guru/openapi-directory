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
export var GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum;
(function (GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum) {
    GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum["DateFormatUnspecified"] = "DATE_FORMAT_UNSPECIFIED";
    GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum["LongDate"] = "LONG_DATE";
    GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum["ShortDate"] = "SHORT_DATE";
})(GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum || (GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum = {}));
// GoogleAppsDriveLabelsV2betaFieldDateOptions
/**
 * Options for the date field type.
**/
var GoogleAppsDriveLabelsV2betaFieldDateOptions = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaFieldDateOptions, _super);
    function GoogleAppsDriveLabelsV2betaFieldDateOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateFormat" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaFieldDateOptions.prototype, "dateFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateFormatType" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaFieldDateOptions.prototype, "dateFormatType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxValue" }),
        __metadata("design:type", GoogleTypeDate)
    ], GoogleAppsDriveLabelsV2betaFieldDateOptions.prototype, "maxValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minValue" }),
        __metadata("design:type", GoogleTypeDate)
    ], GoogleAppsDriveLabelsV2betaFieldDateOptions.prototype, "minValue", void 0);
    return GoogleAppsDriveLabelsV2betaFieldDateOptions;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2betaFieldDateOptions };
// GoogleAppsDriveLabelsV2betaFieldDateOptionsInput
/**
 * Options for the date field type.
**/
var GoogleAppsDriveLabelsV2betaFieldDateOptionsInput = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaFieldDateOptionsInput, _super);
    function GoogleAppsDriveLabelsV2betaFieldDateOptionsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateFormatType" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaFieldDateOptionsInput.prototype, "dateFormatType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxValue" }),
        __metadata("design:type", GoogleTypeDate)
    ], GoogleAppsDriveLabelsV2betaFieldDateOptionsInput.prototype, "maxValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minValue" }),
        __metadata("design:type", GoogleTypeDate)
    ], GoogleAppsDriveLabelsV2betaFieldDateOptionsInput.prototype, "minValue", void 0);
    return GoogleAppsDriveLabelsV2betaFieldDateOptionsInput;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2betaFieldDateOptionsInput };
