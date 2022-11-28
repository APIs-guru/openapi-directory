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
import { CellFormat } from "./cellformat";
import { IterativeCalculationSettings } from "./iterativecalculationsettings";
import { SpreadsheetTheme } from "./spreadsheettheme";
export var SpreadsheetPropertiesAutoRecalcEnum;
(function (SpreadsheetPropertiesAutoRecalcEnum) {
    SpreadsheetPropertiesAutoRecalcEnum["RecalculationIntervalUnspecified"] = "RECALCULATION_INTERVAL_UNSPECIFIED";
    SpreadsheetPropertiesAutoRecalcEnum["OnChange"] = "ON_CHANGE";
    SpreadsheetPropertiesAutoRecalcEnum["Minute"] = "MINUTE";
    SpreadsheetPropertiesAutoRecalcEnum["Hour"] = "HOUR";
})(SpreadsheetPropertiesAutoRecalcEnum || (SpreadsheetPropertiesAutoRecalcEnum = {}));
// SpreadsheetProperties
/**
 * Properties of a spreadsheet.
**/
var SpreadsheetProperties = /** @class */ (function (_super) {
    __extends(SpreadsheetProperties, _super);
    function SpreadsheetProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoRecalc" }),
        __metadata("design:type", String)
    ], SpreadsheetProperties.prototype, "autoRecalc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultFormat" }),
        __metadata("design:type", CellFormat)
    ], SpreadsheetProperties.prototype, "defaultFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iterativeCalculationSettings" }),
        __metadata("design:type", IterativeCalculationSettings)
    ], SpreadsheetProperties.prototype, "iterativeCalculationSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], SpreadsheetProperties.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spreadsheetTheme" }),
        __metadata("design:type", SpreadsheetTheme)
    ], SpreadsheetProperties.prototype, "spreadsheetTheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], SpreadsheetProperties.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], SpreadsheetProperties.prototype, "title", void 0);
    return SpreadsheetProperties;
}(SpeakeasyBase));
export { SpreadsheetProperties };
