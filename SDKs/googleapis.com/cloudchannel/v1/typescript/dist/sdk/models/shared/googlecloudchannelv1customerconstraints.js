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
export var GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum;
(function (GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum) {
    GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum["CustomerTypeUnspecified"] = "CUSTOMER_TYPE_UNSPECIFIED";
    GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum["Domain"] = "DOMAIN";
    GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum["Team"] = "TEAM";
})(GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum || (GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum = {}));
export var GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum;
(function (GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum) {
    GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum["PromotionalTypeUnspecified"] = "PROMOTIONAL_TYPE_UNSPECIFIED";
    GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum["NewUpgrade"] = "NEW_UPGRADE";
    GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum["Transfer"] = "TRANSFER";
    GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum["PromotionSwitch"] = "PROMOTION_SWITCH";
})(GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum || (GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum = {}));
// GoogleCloudChannelV1CustomerConstraints
/**
 * Represents constraints required to purchase the Offer for a customer.
**/
var GoogleCloudChannelV1CustomerConstraints = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1CustomerConstraints, _super);
    function GoogleCloudChannelV1CustomerConstraints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedCustomerTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudChannelV1CustomerConstraints.prototype, "allowedCustomerTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedRegions" }),
        __metadata("design:type", Array)
    ], GoogleCloudChannelV1CustomerConstraints.prototype, "allowedRegions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionalOrderTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudChannelV1CustomerConstraints.prototype, "promotionalOrderTypes", void 0);
    return GoogleCloudChannelV1CustomerConstraints;
}(SpeakeasyBase));
export { GoogleCloudChannelV1CustomerConstraints };
