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
import { GoogleTypeDateTime } from "./googletypedatetime";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeDecimal } from "./googletypedecimal";
import { GoogleTypeMoney } from "./googletypemoney";
// GoogleCloudChannelV1ReportValue
/**
 * A single report value.
**/
var GoogleCloudChannelV1ReportValue = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1ReportValue, _super);
    function GoogleCloudChannelV1ReportValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateTimeValue" }),
        __metadata("design:type", GoogleTypeDateTime)
    ], GoogleCloudChannelV1ReportValue.prototype, "dateTimeValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateValue" }),
        __metadata("design:type", GoogleTypeDate)
    ], GoogleCloudChannelV1ReportValue.prototype, "dateValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decimalValue" }),
        __metadata("design:type", GoogleTypeDecimal)
    ], GoogleCloudChannelV1ReportValue.prototype, "decimalValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intValue" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ReportValue.prototype, "intValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moneyValue" }),
        __metadata("design:type", GoogleTypeMoney)
    ], GoogleCloudChannelV1ReportValue.prototype, "moneyValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringValue" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ReportValue.prototype, "stringValue", void 0);
    return GoogleCloudChannelV1ReportValue;
}(SpeakeasyBase));
export { GoogleCloudChannelV1ReportValue };
