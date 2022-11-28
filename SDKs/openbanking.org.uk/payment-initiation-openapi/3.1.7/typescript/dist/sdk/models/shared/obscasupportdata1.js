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
export var ObscaSupportData1AppliedAuthenticationApproachEnum;
(function (ObscaSupportData1AppliedAuthenticationApproachEnum) {
    ObscaSupportData1AppliedAuthenticationApproachEnum["Ca"] = "CA";
    ObscaSupportData1AppliedAuthenticationApproachEnum["Sca"] = "SCA";
})(ObscaSupportData1AppliedAuthenticationApproachEnum || (ObscaSupportData1AppliedAuthenticationApproachEnum = {}));
export var ObscaSupportData1RequestedScaExemptionTypeEnum;
(function (ObscaSupportData1RequestedScaExemptionTypeEnum) {
    ObscaSupportData1RequestedScaExemptionTypeEnum["BillPayment"] = "BillPayment";
    ObscaSupportData1RequestedScaExemptionTypeEnum["ContactlessTravel"] = "ContactlessTravel";
    ObscaSupportData1RequestedScaExemptionTypeEnum["EcommerceGoods"] = "EcommerceGoods";
    ObscaSupportData1RequestedScaExemptionTypeEnum["EcommerceServices"] = "EcommerceServices";
    ObscaSupportData1RequestedScaExemptionTypeEnum["Kiosk"] = "Kiosk";
    ObscaSupportData1RequestedScaExemptionTypeEnum["Parking"] = "Parking";
    ObscaSupportData1RequestedScaExemptionTypeEnum["PartyToParty"] = "PartyToParty";
})(ObscaSupportData1RequestedScaExemptionTypeEnum || (ObscaSupportData1RequestedScaExemptionTypeEnum = {}));
// ObscaSupportData1
/**
 * Supporting Data provided by TPP, when requesting SCA Exemption.
**/
var ObscaSupportData1 = /** @class */ (function (_super) {
    __extends(ObscaSupportData1, _super);
    function ObscaSupportData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AppliedAuthenticationApproach" }),
        __metadata("design:type", String)
    ], ObscaSupportData1.prototype, "appliedAuthenticationApproach", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReferencePaymentOrderId" }),
        __metadata("design:type", String)
    ], ObscaSupportData1.prototype, "referencePaymentOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedSCAExemptionType" }),
        __metadata("design:type", String)
    ], ObscaSupportData1.prototype, "requestedScaExemptionType", void 0);
    return ObscaSupportData1;
}(SpeakeasyBase));
export { ObscaSupportData1 };
