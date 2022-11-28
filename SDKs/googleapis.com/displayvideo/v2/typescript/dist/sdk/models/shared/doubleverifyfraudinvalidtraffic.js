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
export var DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum;
(function (DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum) {
    DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum["FraudUnspecified"] = "FRAUD_UNSPECIFIED";
    DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum["AdImpressionFraud100"] = "AD_IMPRESSION_FRAUD_100";
    DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum["AdImpressionFraud50"] = "AD_IMPRESSION_FRAUD_50";
    DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum["AdImpressionFraud25"] = "AD_IMPRESSION_FRAUD_25";
    DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum["AdImpressionFraud10"] = "AD_IMPRESSION_FRAUD_10";
    DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum["AdImpressionFraud8"] = "AD_IMPRESSION_FRAUD_8";
    DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum["AdImpressionFraud6"] = "AD_IMPRESSION_FRAUD_6";
    DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum["AdImpressionFraud4"] = "AD_IMPRESSION_FRAUD_4";
    DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum["AdImpressionFraud2"] = "AD_IMPRESSION_FRAUD_2";
})(DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum || (DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum = {}));
// DoubleVerifyFraudInvalidTraffic
/**
 * DoubleVerify Fraud & Invalid Traffic settings.
**/
var DoubleVerifyFraudInvalidTraffic = /** @class */ (function (_super) {
    __extends(DoubleVerifyFraudInvalidTraffic, _super);
    function DoubleVerifyFraudInvalidTraffic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avoidInsufficientOption" }),
        __metadata("design:type", Boolean)
    ], DoubleVerifyFraudInvalidTraffic.prototype, "avoidInsufficientOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avoidedFraudOption" }),
        __metadata("design:type", String)
    ], DoubleVerifyFraudInvalidTraffic.prototype, "avoidedFraudOption", void 0);
    return DoubleVerifyFraudInvalidTraffic;
}(SpeakeasyBase));
export { DoubleVerifyFraudInvalidTraffic };
