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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var AccountRiskVerdictRiskEnum;
(function (AccountRiskVerdictRiskEnum) {
    AccountRiskVerdictRiskEnum["RiskUnspecified"] = "RISK_UNSPECIFIED";
    AccountRiskVerdictRiskEnum["Unevaluated"] = "UNEVALUATED";
    AccountRiskVerdictRiskEnum["Higher"] = "HIGHER";
    AccountRiskVerdictRiskEnum["Unknown"] = "UNKNOWN";
    AccountRiskVerdictRiskEnum["Lower"] = "LOWER";
    AccountRiskVerdictRiskEnum["Lowest"] = "LOWEST";
})(AccountRiskVerdictRiskEnum || (AccountRiskVerdictRiskEnum = {}));
export var AccountRiskVerdictRiskLevelEnum;
(function (AccountRiskVerdictRiskLevelEnum) {
    AccountRiskVerdictRiskLevelEnum["RiskLevelUnspecified"] = "RISK_LEVEL_UNSPECIFIED";
    AccountRiskVerdictRiskLevelEnum["RiskLevelUnevaluated"] = "RISK_LEVEL_UNEVALUATED";
    AccountRiskVerdictRiskLevelEnum["RiskLevelRisk"] = "RISK_LEVEL_RISK";
    AccountRiskVerdictRiskLevelEnum["RiskLevelUnknown"] = "RISK_LEVEL_UNKNOWN";
    AccountRiskVerdictRiskLevelEnum["RiskLevelLowRisk"] = "RISK_LEVEL_LOW_RISK";
    AccountRiskVerdictRiskLevelEnum["RiskLevelLowestRisk"] = "RISK_LEVEL_LOWEST_RISK";
})(AccountRiskVerdictRiskLevelEnum || (AccountRiskVerdictRiskLevelEnum = {}));
// AccountRiskVerdict
/**
 * Contains information about account risk that indicates if the current user session seems low risk, unknown, or risky before you allow important actions to proceed.
**/
var AccountRiskVerdict = /** @class */ (function (_super) {
    __extends(AccountRiskVerdict, _super);
    function AccountRiskVerdict() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=risk" }),
        __metadata("design:type", String)
    ], AccountRiskVerdict.prototype, "risk", void 0);
    __decorate([
        Metadata({ data: "json, name=riskLevel" }),
        __metadata("design:type", String)
    ], AccountRiskVerdict.prototype, "riskLevel", void 0);
    return AccountRiskVerdict;
}(SpeakeasyBase));
export { AccountRiskVerdict };
