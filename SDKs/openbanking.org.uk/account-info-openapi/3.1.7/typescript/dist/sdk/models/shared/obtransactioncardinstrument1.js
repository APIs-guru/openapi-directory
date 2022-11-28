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
export var ObTransactionCardInstrument1AuthorisationTypeEnum;
(function (ObTransactionCardInstrument1AuthorisationTypeEnum) {
    ObTransactionCardInstrument1AuthorisationTypeEnum["ConsumerDevice"] = "ConsumerDevice";
    ObTransactionCardInstrument1AuthorisationTypeEnum["Contactless"] = "Contactless";
    ObTransactionCardInstrument1AuthorisationTypeEnum["None"] = "None";
    ObTransactionCardInstrument1AuthorisationTypeEnum["Pin"] = "PIN";
})(ObTransactionCardInstrument1AuthorisationTypeEnum || (ObTransactionCardInstrument1AuthorisationTypeEnum = {}));
export var ObTransactionCardInstrument1CardSchemeNameEnum;
(function (ObTransactionCardInstrument1CardSchemeNameEnum) {
    ObTransactionCardInstrument1CardSchemeNameEnum["AmericanExpress"] = "AmericanExpress";
    ObTransactionCardInstrument1CardSchemeNameEnum["Diners"] = "Diners";
    ObTransactionCardInstrument1CardSchemeNameEnum["Discover"] = "Discover";
    ObTransactionCardInstrument1CardSchemeNameEnum["MasterCard"] = "MasterCard";
    ObTransactionCardInstrument1CardSchemeNameEnum["Visa"] = "VISA";
})(ObTransactionCardInstrument1CardSchemeNameEnum || (ObTransactionCardInstrument1CardSchemeNameEnum = {}));
// ObTransactionCardInstrument1
/**
 * Set of elements to describe the card instrument used in the transaction.
**/
var ObTransactionCardInstrument1 = /** @class */ (function (_super) {
    __extends(ObTransactionCardInstrument1, _super);
    function ObTransactionCardInstrument1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisationType" }),
        __metadata("design:type", String)
    ], ObTransactionCardInstrument1.prototype, "authorisationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CardSchemeName" }),
        __metadata("design:type", String)
    ], ObTransactionCardInstrument1.prototype, "cardSchemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObTransactionCardInstrument1.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObTransactionCardInstrument1.prototype, "name", void 0);
    return ObTransactionCardInstrument1;
}(SpeakeasyBase));
export { ObTransactionCardInstrument1 };
