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
import { GoogleCloudChannelV1Price } from "./googlecloudchannelv1price";
import { GoogleCloudChannelV1PricePhase } from "./googlecloudchannelv1pricephase";
export var GoogleCloudChannelV1PriceByResourceResourceTypeEnum;
(function (GoogleCloudChannelV1PriceByResourceResourceTypeEnum) {
    GoogleCloudChannelV1PriceByResourceResourceTypeEnum["ResourceTypeUnspecified"] = "RESOURCE_TYPE_UNSPECIFIED";
    GoogleCloudChannelV1PriceByResourceResourceTypeEnum["Seat"] = "SEAT";
    GoogleCloudChannelV1PriceByResourceResourceTypeEnum["Mau"] = "MAU";
    GoogleCloudChannelV1PriceByResourceResourceTypeEnum["Gb"] = "GB";
    GoogleCloudChannelV1PriceByResourceResourceTypeEnum["LicensedUser"] = "LICENSED_USER";
    GoogleCloudChannelV1PriceByResourceResourceTypeEnum["Minutes"] = "MINUTES";
    GoogleCloudChannelV1PriceByResourceResourceTypeEnum["IaasUsage"] = "IAAS_USAGE";
    GoogleCloudChannelV1PriceByResourceResourceTypeEnum["Subscription"] = "SUBSCRIPTION";
})(GoogleCloudChannelV1PriceByResourceResourceTypeEnum || (GoogleCloudChannelV1PriceByResourceResourceTypeEnum = {}));
// GoogleCloudChannelV1PriceByResource
/**
 * Represents price by resource type.
**/
var GoogleCloudChannelV1PriceByResource = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1PriceByResource, _super);
    function GoogleCloudChannelV1PriceByResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", GoogleCloudChannelV1Price)
    ], GoogleCloudChannelV1PriceByResource.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pricePhases", elemType: GoogleCloudChannelV1PricePhase }),
        __metadata("design:type", Array)
    ], GoogleCloudChannelV1PriceByResource.prototype, "pricePhases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1PriceByResource.prototype, "resourceType", void 0);
    return GoogleCloudChannelV1PriceByResource;
}(SpeakeasyBase));
export { GoogleCloudChannelV1PriceByResource };
