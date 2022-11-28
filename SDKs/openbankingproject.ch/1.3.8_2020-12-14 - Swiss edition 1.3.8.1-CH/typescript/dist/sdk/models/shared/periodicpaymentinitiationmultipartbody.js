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
import { PeriodicPaymentInitiationXmlPart2StandingorderTypeJson } from "./periodicpaymentinitiationxmlpart2standingordertypejson";
// PeriodicPaymentInitiationMultipartBody
/**
 * The multipart message definition for the initiation of a periodic payment initiation
 * where the information of the payment is contained in a pain.001 message (Part 1) and
 * the additional informations related to the periodic payment is an additional JSON message (Part 2).
 *
**/
var PeriodicPaymentInitiationMultipartBody = /** @class */ (function (_super) {
    __extends(PeriodicPaymentInitiationMultipartBody, _super);
    function PeriodicPaymentInitiationMultipartBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=json_standingorderType;json=true" }),
        __metadata("design:type", PeriodicPaymentInitiationXmlPart2StandingorderTypeJson)
    ], PeriodicPaymentInitiationMultipartBody.prototype, "jsonStandingorderType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=xml_sct;json=true" }),
        __metadata("design:type", Object)
    ], PeriodicPaymentInitiationMultipartBody.prototype, "xmlSct", void 0);
    return PeriodicPaymentInitiationMultipartBody;
}(SpeakeasyBase));
export { PeriodicPaymentInitiationMultipartBody };
