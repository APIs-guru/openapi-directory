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
import { LinksSigningBasket } from "./linkssigningbasket";
import { TransactionStatusSbsEnum } from "./transactionstatussbsenum";
// SigningBasketResponse200
/**
 * Body of the JSON response for a successful get signing basket request.
 *
 *   * 'payments': payment initiations which shall be authorised through this signing basket.
 *   * 'consents': consent objects which shall be authorised through this signing basket.
 *   * 'transactionStatus': Only the codes RCVD, ACTC, RJCT are used.
 *   * '_links': The ASPSP might integrate hyperlinks to indicate next (authorisation) steps to be taken.
 *
**/
var SigningBasketResponse200 = /** @class */ (function (_super) {
    __extends(SigningBasketResponse200, _super);
    function SigningBasketResponse200() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", LinksSigningBasket)
    ], SigningBasketResponse200.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consents" }),
        __metadata("design:type", Array)
    ], SigningBasketResponse200.prototype, "consents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payments" }),
        __metadata("design:type", Array)
    ], SigningBasketResponse200.prototype, "payments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionStatus" }),
        __metadata("design:type", String)
    ], SigningBasketResponse200.prototype, "transactionStatus", void 0);
    return SigningBasketResponse200;
}(SpeakeasyBase));
export { SigningBasketResponse200 };
