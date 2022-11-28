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
import { Links } from "./links";
import { Meta } from "./meta";
// ObWriteFundsConfirmationResponse1DataFundsAvailableResult
/**
 * Result of a funds availability check.
**/
var ObWriteFundsConfirmationResponse1DataFundsAvailableResult = /** @class */ (function (_super) {
    __extends(ObWriteFundsConfirmationResponse1DataFundsAvailableResult, _super);
    function ObWriteFundsConfirmationResponse1DataFundsAvailableResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FundsAvailable" }),
        __metadata("design:type", Boolean)
    ], ObWriteFundsConfirmationResponse1DataFundsAvailableResult.prototype, "fundsAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FundsAvailableDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteFundsConfirmationResponse1DataFundsAvailableResult.prototype, "fundsAvailableDateTime", void 0);
    return ObWriteFundsConfirmationResponse1DataFundsAvailableResult;
}(SpeakeasyBase));
export { ObWriteFundsConfirmationResponse1DataFundsAvailableResult };
var ObWriteFundsConfirmationResponse1Data = /** @class */ (function (_super) {
    __extends(ObWriteFundsConfirmationResponse1Data, _super);
    function ObWriteFundsConfirmationResponse1Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FundsAvailableResult" }),
        __metadata("design:type", ObWriteFundsConfirmationResponse1DataFundsAvailableResult)
    ], ObWriteFundsConfirmationResponse1Data.prototype, "fundsAvailableResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteFundsConfirmationResponse1Data.prototype, "supplementaryData", void 0);
    return ObWriteFundsConfirmationResponse1Data;
}(SpeakeasyBase));
export { ObWriteFundsConfirmationResponse1Data };
var ObWriteFundsConfirmationResponse1 = /** @class */ (function (_super) {
    __extends(ObWriteFundsConfirmationResponse1, _super);
    function ObWriteFundsConfirmationResponse1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteFundsConfirmationResponse1Data)
    ], ObWriteFundsConfirmationResponse1.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObWriteFundsConfirmationResponse1.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObWriteFundsConfirmationResponse1.prototype, "meta", void 0);
    return ObWriteFundsConfirmationResponse1;
}(SpeakeasyBase));
export { ObWriteFundsConfirmationResponse1 };
