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
export var GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum;
(function (GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum) {
    GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum["DateFormatUnspecified"] = "DATE_FORMAT_UNSPECIFIED";
    GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum["LongDate"] = "LONG_DATE";
    GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum["ShortDate"] = "SHORT_DATE";
})(GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum || (GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum = {}));
// GoogleAppsDriveLabelsV2FieldDateOptions
/**
 * Options for the date field type.
**/
var GoogleAppsDriveLabelsV2FieldDateOptions = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2FieldDateOptions, _super);
    function GoogleAppsDriveLabelsV2FieldDateOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateFormat" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2FieldDateOptions.prototype, "dateFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateFormatType" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2FieldDateOptions.prototype, "dateFormatType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxValue" }),
        __metadata("design:type", GoogleTypeDate)
    ], GoogleAppsDriveLabelsV2FieldDateOptions.prototype, "maxValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minValue" }),
        __metadata("design:type", GoogleTypeDate)
    ], GoogleAppsDriveLabelsV2FieldDateOptions.prototype, "minValue", void 0);
    return GoogleAppsDriveLabelsV2FieldDateOptions;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2FieldDateOptions };
