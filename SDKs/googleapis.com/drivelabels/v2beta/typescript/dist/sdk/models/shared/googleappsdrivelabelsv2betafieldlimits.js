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
import { GoogleAppsDriveLabelsV2betaDateLimits } from "./googleappsdrivelabelsv2betadatelimits";
import { GoogleAppsDriveLabelsV2betaIntegerLimits } from "./googleappsdrivelabelsv2betaintegerlimits";
import { GoogleAppsDriveLabelsV2betaLongTextLimits } from "./googleappsdrivelabelsv2betalongtextlimits";
import { GoogleAppsDriveLabelsV2betaSelectionLimits } from "./googleappsdrivelabelsv2betaselectionlimits";
import { GoogleAppsDriveLabelsV2betaTextLimits } from "./googleappsdrivelabelsv2betatextlimits";
import { GoogleAppsDriveLabelsV2betaUserLimits } from "./googleappsdrivelabelsv2betauserlimits";
// GoogleAppsDriveLabelsV2betaFieldLimits
/**
 * Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc.
**/
var GoogleAppsDriveLabelsV2betaFieldLimits = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaFieldLimits, _super);
    function GoogleAppsDriveLabelsV2betaFieldLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateLimits" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaDateLimits)
    ], GoogleAppsDriveLabelsV2betaFieldLimits.prototype, "dateLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integerLimits" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaIntegerLimits)
    ], GoogleAppsDriveLabelsV2betaFieldLimits.prototype, "integerLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longTextLimits" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLongTextLimits)
    ], GoogleAppsDriveLabelsV2betaFieldLimits.prototype, "longTextLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxDescriptionLength" }),
        __metadata("design:type", Number)
    ], GoogleAppsDriveLabelsV2betaFieldLimits.prototype, "maxDescriptionLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxDisplayNameLength" }),
        __metadata("design:type", Number)
    ], GoogleAppsDriveLabelsV2betaFieldLimits.prototype, "maxDisplayNameLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxIdLength" }),
        __metadata("design:type", Number)
    ], GoogleAppsDriveLabelsV2betaFieldLimits.prototype, "maxIdLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectionLimits" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaSelectionLimits)
    ], GoogleAppsDriveLabelsV2betaFieldLimits.prototype, "selectionLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textLimits" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaTextLimits)
    ], GoogleAppsDriveLabelsV2betaFieldLimits.prototype, "textLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLimits" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserLimits)
    ], GoogleAppsDriveLabelsV2betaFieldLimits.prototype, "userLimits", void 0);
    return GoogleAppsDriveLabelsV2betaFieldLimits;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2betaFieldLimits };
