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
import { Amount } from "./amount";
import { BalanceTypeEnum } from "./balancetypeenum";
// Balance
/**
 * A single balance element.
 *
**/
var Balance = /** @class */ (function (_super) {
    __extends(Balance, _super);
    function Balance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balanceAmount" }),
        __metadata("design:type", Amount)
    ], Balance.prototype, "balanceAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balanceType" }),
        __metadata("design:type", String)
    ], Balance.prototype, "balanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditLimitIncluded" }),
        __metadata("design:type", Boolean)
    ], Balance.prototype, "creditLimitIncluded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastChangeDateTime" }),
        __metadata("design:type", Date)
    ], Balance.prototype, "lastChangeDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastCommittedTransaction" }),
        __metadata("design:type", String)
    ], Balance.prototype, "lastCommittedTransaction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referenceDate" }),
        __metadata("design:type", Date)
    ], Balance.prototype, "referenceDate", void 0);
    return Balance;
}(SpeakeasyBase));
export { Balance };
