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
import { GoogleCloudChannelV1Constraints } from "./googlecloudchannelv1constraints";
import { GoogleCloudChannelV1MarketingInfo } from "./googlecloudchannelv1marketinginfo";
import { GoogleCloudChannelV1ParameterDefinition } from "./googlecloudchannelv1parameterdefinition";
import { GoogleCloudChannelV1Plan } from "./googlecloudchannelv1plan";
import { GoogleCloudChannelV1PriceByResource } from "./googlecloudchannelv1pricebyresource";
import { GoogleCloudChannelV1Sku } from "./googlecloudchannelv1sku";
// GoogleCloudChannelV1Offer
/**
 * Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying.
**/
var GoogleCloudChannelV1Offer = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1Offer, _super);
    function GoogleCloudChannelV1Offer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=constraints" }),
        __metadata("design:type", GoogleCloudChannelV1Constraints)
    ], GoogleCloudChannelV1Offer.prototype, "constraints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealCode" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Offer.prototype, "dealCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Offer.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketingInfo" }),
        __metadata("design:type", GoogleCloudChannelV1MarketingInfo)
    ], GoogleCloudChannelV1Offer.prototype, "marketingInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Offer.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameterDefinitions", elemType: GoogleCloudChannelV1ParameterDefinition }),
        __metadata("design:type", Array)
    ], GoogleCloudChannelV1Offer.prototype, "parameterDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plan" }),
        __metadata("design:type", GoogleCloudChannelV1Plan)
    ], GoogleCloudChannelV1Offer.prototype, "plan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceByResources", elemType: GoogleCloudChannelV1PriceByResource }),
        __metadata("design:type", Array)
    ], GoogleCloudChannelV1Offer.prototype, "priceByResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", GoogleCloudChannelV1Sku)
    ], GoogleCloudChannelV1Offer.prototype, "sku", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Offer.prototype, "startTime", void 0);
    return GoogleCloudChannelV1Offer;
}(SpeakeasyBase));
export { GoogleCloudChannelV1Offer };
