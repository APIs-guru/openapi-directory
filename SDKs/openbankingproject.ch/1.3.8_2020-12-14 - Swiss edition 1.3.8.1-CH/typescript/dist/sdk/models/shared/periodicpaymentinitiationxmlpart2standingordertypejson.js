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
import { DayOfExecutionEnum } from "./dayofexecutionenum";
import { ExecutionRuleEnum } from "./executionruleenum";
import { FrequencyCodeEnum } from "./frequencycodeenum";
// PeriodicPaymentInitiationXmlPart2StandingorderTypeJson
/**
 * The body part 2 of a periodic payment initation request containes the execution related informations
 * of the periodic payment.
 *
**/
var PeriodicPaymentInitiationXmlPart2StandingorderTypeJson = /** @class */ (function (_super) {
    __extends(PeriodicPaymentInitiationXmlPart2StandingorderTypeJson, _super);
    function PeriodicPaymentInitiationXmlPart2StandingorderTypeJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayOfExecution" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationXmlPart2StandingorderTypeJson.prototype, "dayOfExecution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], PeriodicPaymentInitiationXmlPart2StandingorderTypeJson.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionRule" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationXmlPart2StandingorderTypeJson.prototype, "executionRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationXmlPart2StandingorderTypeJson.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], PeriodicPaymentInitiationXmlPart2StandingorderTypeJson.prototype, "startDate", void 0);
    return PeriodicPaymentInitiationXmlPart2StandingorderTypeJson;
}(SpeakeasyBase));
export { PeriodicPaymentInitiationXmlPart2StandingorderTypeJson };
